export const Colors = {
  Primary: "#FFFFFF",
  Link: "#93d2fd",
  PrimaryDark: "#0F1C39",
  PrimaryDisable: "#1e3f6f",
  Background: "#1C1C1C",
  White: "#FFFFFF",
  Black: "#212121",
  Border: "#2121211c",
  Gray: "#b1b1b1",
  GrayBG: "#f7f9fa",
  Gradients: { PrimaryToSet: ["#1199FA", "#10C0E9"]},
};

const BreakPoints = {
  MobileS: "320px",
  MobileM: "375px",
  MobileL: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};

export const Devices = {
  MobileS: `(min-width: ${BreakPoints.MobileS})`,
  MobileM: `(min-width: ${BreakPoints.MobileM})`,
  MobileL: `(min-width: ${BreakPoints.MobileL})`,
  Tablet: `(min-width: ${BreakPoints.Tablet})`,
  Laptop: `(min-width: ${BreakPoints.Laptop})`,
  LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
  Desktop: `(min-width: ${BreakPoints.Desktop})`,
};
