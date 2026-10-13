export type HeightRow = {
  model: string;
  height: string;
  min: number;
  max: number;
  href?: string;
};

export const HEIGHT_ROWS: HeightRow[] = [
  { model: "Navimow X430", height: "0.75–4 in", min: 0.75, max: 4, href: "/reviews/segway-navimow-x4" },
  { model: "Automower 410 iQ and 420 iQ", height: "1–4 in", min: 1, max: 4, href: "/reviews/husqvarna-automower-iq" },
  { model: "Dreame A3 AWD Pro 2500", height: "1.2–3.9 in", min: 1.2, max: 3.9, href: "/reviews/dreame-a3-awd-pro" },
  { model: "MOVA LiDAX Ultra 1000, 2000, and 3000 AWD", height: "1.2–3.9 in", min: 1.2, max: 3.9, href: "/reviews/mova-lidax-ultra" },
  { model: "LUBA 3 AWD 3000", height: "1.0–2.7 in", min: 1, max: 2.7, href: "/reviews/mammotion-luba-3-awd" },
  { model: "LUBA 3 AWD high-cut", height: "2.2–4.0 in", min: 2.2, max: 4, href: "/reviews/mammotion-luba-3-awd" },
  { model: "LUBA mini 2 AWD 1500", height: "0.8–2.6 in", min: 0.8, max: 2.6, href: "/reviews/mammotion-luba-mini-2-awd" },
  { model: "LUBA mini 2 AWD 1500H", height: "2.2–4.0 in", min: 2.2, max: 4, href: "/reviews/mammotion-luba-mini-2-awd" },
  { model: "Worx WR340 and WR344", height: "1.57–3.54 in", min: 1.57, max: 3.54, href: "/reviews/worx-landroid-vision-cloud" },
  { model: "Worx Landroid M WR147", height: "1.5–3.5 in", min: 1.5, max: 3.5, href: "/reviews/worx-landroid-m-wr147" },
  { model: "Navimow i210 AWD", height: "2.0–3.6 in", min: 2, max: 3.6, href: "/reviews/segway-navimow-i-series" },
  { model: "RockNeo Q110H", height: "1.57–3.15 in", min: 1.57, max: 3.15, href: "/reviews/roborock-rockneo-q110h" },
  { model: "Automower 435 iQ AWD and 435X AWD", height: "1.2–2.8 in", min: 1.2, max: 2.8, href: "/reviews/husqvarna-automower-iq" },
];

export function stAugustineFit(row: HeightRow): string {
  if (row.max >= 4) return "Reaches 4 in, the top of the UF/IFAS standard-cultivar band.";
  if (row.max >= 3.5) return "Reaches 3.5 in and stops short of 4 in.";
  return "Tops out under 3.5 in, short of the UF/IFAS standard-cultivar band.";
}

export function bermudaFit(row: HeightRow): string {
  if (row.min <= 1) return "Low end is at or under 1 in.";
  if (row.min <= 1.5) return "Low end is at or under 1.5 in.";
  if (row.min <= 2) return "Low end is 2 in, the top of the Texas A&M 1–2 in home-lawn band.";
  return "Low end is above 2 in, so it stays above that 1–2 in band.";
}
