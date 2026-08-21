export type Unit = {
  id: string;
  name: string;
  city: string;
  address: string;
  phoneDisplay: string;
  whatsapp: string;
  mapsUrl: string;
};

function createMapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

const unitData = [
  {
    id: "icarai",
    name: "Icaraí",
    city: "Niterói",
    address: "Rua Gavião Peixoto, 31 — Icaraí, Niterói/RJ",
    phoneDisplay: "(21) 97491-4677",
    whatsapp: "5521974914677",
  },
  {
    id: "botafogo",
    name: "Botafogo",
    city: "Rio de Janeiro",
    address:
      "Rua São João Batista, 11 — Botafogo, Rio de Janeiro/RJ — CEP 22270-030",
    phoneDisplay: "(21) 96445-2129",
    whatsapp: "5521964452129",
  },
  {
    id: "flamengo",
    name: "Flamengo",
    city: "Rio de Janeiro",
    address:
      "Rua Machado de Assis, 55 — Flamengo, Rio de Janeiro/RJ — CEP 22220-060",
    phoneDisplay: "(21) 97216-1402",
    whatsapp: "5521972161402",
  },
] as const;

export const units: Unit[] = unitData.map((unit) => ({
  ...unit,
  mapsUrl: createMapsUrl(unit.address),
}));

export function getUnitById(id: string) {
  return units.find((unit) => unit.id === id);
}
