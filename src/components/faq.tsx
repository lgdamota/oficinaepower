"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const open = index === openIndex;
        const panelId = `faq-panel-${index}`;
        return (
          <article
            className={`faq-item ${open ? "open" : ""}`}
            key={item.question}
          >
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {item.question}
                </span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-answer"
              id={panelId}
              role="region"
              aria-hidden={!open}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
