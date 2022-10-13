import c3 from "c3";

const options = {
  bindto: "#chart",
  axis: 
    {x: {type: "category"}},
  data: {
    colors: {
      Apples: "#ff0000",
      Peaches: "#00ff00",
      Bananas: "#0000ff",
    },
    type: "bar",
    keys: {x: "name", value:["Jan", "Feb", "Mar"]},
    json: [
      
        {
          "name": "Apples",
          "Jan": 327,
          "Feb": 437,
          "Mar": 111
        },
        {
          "name": "Peaches",
          "Jan": 555,
          "Feb": 454,
          "Mar": 222
        },
        {
          "name": "Pears",
          "Jan": 242,
          "Feb": 864,
          "Mar": 343
        },
        {
          "name": "Bananas",
          "Jan": 222,
          "Feb": 454,
          "Mar": 434
        }
      
    ],
  },
};
const chart = c3.generate(options);