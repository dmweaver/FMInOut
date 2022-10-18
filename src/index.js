import c3 from "c3";

window.loadChart=function(json){
  console.log(json);
  const obj=JSON.parse(json);


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
  

// const{data, type, width, height, space}=obj

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
          ratio: 0.9,
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
      colors: colours,
      
      labels:true,
      
      type: type,
      keys: {x: "name", value:["Jan", "Feb", "Mar"]},
      json: data,
    },
  };
  const chart = c3.generate(options);

window.transformChart=function(json){
  const obj=JSON.parse(json);
  const type=obj.type;
  console.log(obj);
  console.log(type);
  chart.transform(type);


};

window.transformChartSize=function(json){
  const obj=JSON.parse(json);
  const size=obj;
  // console.log(obj);
  console.log(size);
  chart.resize(size);


};


window.transformChartToggle=function(json){
  const obj=JSON.parse(json);
  const ids=obj.ids;
 
  console.log(ids);
  chart.toggle(ids);


};

window.transformChartColour=function(json){
  const obj=JSON.parse(json);
  const colour=obj.colour;
  // console.log(obj);
  console.log(colour);

  // const current=chart.data.colors();
  // console.log(current);
  
  if(colour==="normal") 
  {var newcolour={Feb:'#FF7D11',Jan:'#FF2C11',Mar:'#007D57'}}
  else if (colour==="colour blind") 
  {var newcolour={Feb:'#A8DDB5',Jan:'#E0F3DB',Mar:'#43A2CA'}};
  console.log(newcolour);
  
  chart.data.colors(newcolour);
 


};

};

