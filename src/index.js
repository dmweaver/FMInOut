import c3 from "c3";

const options = {
  bindto: "#chart",
  data: {
    colors: {
      Apples: "#ff0000",
      Peaches: "#00ff00",
      Bananas: "#0000ff",
    },
    type: "bar",
    columns: [
      ["Apples", 90, 800, 600, 400, 850, 50],
      ["Peaches", 50, 20, 10, 40, 15, 25],
      ["Bananas", 350, 620, 410, 340, 215, 525],
    ],
  },
};
const chart = c3.generate(options);