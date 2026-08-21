"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";
import { units } from "@/data/units";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type UnitSelectorContextValue = {
  openUnitSelector: (service?: string) => void;
};

const UnitSelectorContext = createContext<UnitSelectorContextValue | null>(
  null,
);

export function UnitSelectorProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstOptionRef = useRef<HTMLButtonElement>(null);
  const [service, setService] = useState<string>();

  const openUnitSelector = useCallback((selectedService?: string) => {
    setService(selectedService);
    dialogRef.current?.showModal();
    requestAnimationFrame(() => firstOptionRef.current?.focus());
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const syncBodyScroll = () =>
      document.body.classList.toggle("dialog-open", dialog.open);
    dialog.addEventListener("close", syncBodyScroll);
    dialog.addEventListener("cancel", syncBodyScroll);

    const observer = new MutationObserver(syncBodyScroll);
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      dialog.removeEventListener("close", syncBodyScroll);
      dialog.removeEventListener("cancel", syncBodyScroll);
      document.body.classList.remove("dialog-open");
    };
  }, []);

  function selectUnit(unitIndex: number) {
    const unit = units[unitIndex];
    close();
    window.open(
      createWhatsAppUrl(unit, { service }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <UnitSelectorContext.Provider value={{ openUnitSelector }}>
      {children}
      <dialog
        className="unit-dialog"
        ref={dialogRef}
        aria-labelledby="unit-dialog-title"
        aria-describedby="unit-dialog-description"
        onClick={(event) => event.target === event.currentTarget && close()}
      >
        <div className="unit-dialog-card">
          <button
            className="unit-dialog-close"
            type="button"
            onClick={close}
            aria-label="Fechar seleção de unidade"
          >
            <X aria-hidden="true" />
          </button>
          <div className="unit-dialog-heading">
            <span className="eyebrow">Atendimento E-Power</span>
            <h2 id="unit-dialog-title">
              Em qual unidade você deseja atendimento?
            </h2>
            <p id="unit-dialog-description">
              Escolha a unidade mais conveniente para continuar pelo WhatsApp.
            </p>
          </div>
          <div className="unit-dialog-options">
            {units.map((unit, index) => (
              <button
                className="unit-dialog-option"
                type="button"
                key={unit.id}
                ref={index === 0 ? firstOptionRef : undefined}
                onClick={() => selectUnit(index)}
                aria-label={`Continuar pelo WhatsApp com a unidade de ${unit.name}, ${unit.city}`}
              >
                <span className="unit-option-icon">
                  <MapPin aria-hidden="true" />
                </span>
                <span className="unit-option-copy">
                  <strong>
                    {unit.name} — {unit.city}
                  </strong>
                  <small>{unit.address}</small>
                  <span>
                    <MessageCircle aria-hidden="true" />
                    Continuar pelo WhatsApp
                  </span>
                </span>
                <ArrowRight className="unit-option-arrow" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </UnitSelectorContext.Provider>
  );
}

export function UnitSelectorTrigger({
  children,
  className = "button primary",
  service,
  showArrow = true,
  ariaLabel,
  onBeforeOpen,
}: {
  children: ReactNode;
  className?: string;
  service?: string;
  showArrow?: boolean;
  ariaLabel?: string;
  onBeforeOpen?: () => void;
}) {
  const context = useContext(UnitSelectorContext);
  if (!context) {
    throw new Error(
      "UnitSelectorTrigger must be used inside UnitSelectorProvider",
    );
  }

  return (
    <button
      className={className}
      type="button"
      aria-label={ariaLabel}
      onClick={() => {
        onBeforeOpen?.();
        context.openUnitSelector(service);
      }}
    >
      {children}
      {showArrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </button>
  );
}
