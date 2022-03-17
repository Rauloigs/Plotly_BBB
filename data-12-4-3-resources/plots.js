function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = Object.entries(resultArray[0]);
      // var complete = Object.entries(result).forEach(([key, value]) => {console.log(key + ': ' + value);});
      // Object.entries(result).forEach(([key, value]) => {console.log(key + ': ' + value);});
      // var complete = Object.entries(result).forEach((keys, values));
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("");
      // PANEL.append("h6").text(key + ': ' + value);
      PANEL.append("h6").text(result);
    });
  }
// Object.entries to iterate through keys and values
