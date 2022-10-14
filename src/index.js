import c3 from "c3";

window.loadChart=function(json){
  console.log(json);
  const obj=JSON.parse(json);

  // const obj1=JSON.parse(obj.colours);
  // const obj1 = json.replace(/\\/g, "");
  // console.log(obj1);

const productsArray=["Apples", "Peaches", "Pears", "Bananas"];

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
  const AppleColour=obj.AppleColour;
  const PeachColour=obj.PeachColour;
  const BananaColour=obj.BananaColour;
  console.log (AppleColour);
  console.log (PeachColour);
  console.log (BananaColour);

// const{data, type, width, height, space}=obj

  // const colours=obj.colours;
  // console.log(colours);
  

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
    data: {
      onclick: function(d) {
        console.log(d);
        const{index, name}=d;
        const product = productsArray[index];
        console.log(product);
        const toSendToFM={name, product};
        console.log(toSendToFM);
        FileMaker.PerformScript("Chart Click", JSON.stringify (toSendToFM));
       },
      colors: 
      {
        Apple: AppleColour,
        Peaches: PeachColour,
        Banans: BananaColour,
      },
      labels:true,
      
      type: type,
      keys: {x: "name", value:["Jan", "Feb", "Mar"]},
      json: data,
    },
  };
  const chart = c3.generate(options);
};