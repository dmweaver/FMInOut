import c3 from "c3";

window.loadChart=function(json){
  console.log(json);
  const obj=JSON.parse(json);

  const obj1=JSON.parse(obj.colours);
  // const obj1 = json.replace(/\\/g, "");
  console.log(obj1);



  console.log(obj);
  const data=obj.data;
  console.log(data);
  const type=obj.type;
  console.log(type);
  const width=obj.width;
  console.log(width);
  const height=obj.height;
  console.log(height);
  const space=obj.space;
  console.log(space);
  const colours=obj.colours;
  console.log(colours);
  

  const options = {
    bindto: "#chart",
    size:{width:width, height:height},
    axis: 
      {x: {type: "category"}, 
      y: {
        label: {
          text: 'Area (ha)',
          position: 'outer-middle'
      },
      show:true,
      }},
      
      bar: {space: space,
        width: {
          ratio: 0.8,
        }},
    data: {labels:true,
      colors: 
      // colours
      {
        Apples: "#ff0000",
        Peaches: "#00ff00",
        Bananas: "#0000ff",
      }
      ,
      type: type,
      keys: {x: "name", value:["Jan", "Feb", "Mar"]},
      json: data,
    },
  };
  const chart = c3.generate(options);
};