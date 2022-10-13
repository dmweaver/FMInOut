import c3 from "c3";

window.loadChart=function(json){
  console.log(json);
  const obj=JSON.parse(json);
  console.log(obj);
  const data=obj.data;
  const type=obj.type;
  console.log(data);
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
      type: type,
      keys: {x: "name", value:["Jan", "Feb", "Mar"]},
      json: data,
    },
  };
  const chart = c3.generate(options);
};