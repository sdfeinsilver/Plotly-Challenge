// Check to see that you can log the samples.json to the console
d3.json("data/samples.json").then((data) => {
    console.log(data);
});

// Log names to console to test
d3.json("data/samples.json").then((data) => {
    console.log(data.names);
});

// Log sample_values to console to test
d3.json("data/samples.json").then((data) => {
    console.log(data.sample_values);
});


// // Define Dataset you are working with:
// // 1. Define individual dataset
// let individual = 


// //Function to draw a horizontal bar chart based on whichever option selected int he dropdown
// function drawHorBar (dataset) {

// }





// // Read in the json file
// d3.json("data/samples.json").then((data) => {
//     // Create the Traces
//     let trace1 = {
//         x: data.sample_values,
//         y: data.otu_ids,
//         type: "box"
//     }
//     // Create the data array for the plot
//     let traceDataArr = [trace1];
//     // Define the plot layout
//     let layout = {
//         title: "Top 10 OTU's"
//     }

//     // Plot the chart to a div tag with id "selDataset"
//     Plotly.newPlot("selDataset", traceDataArr, layout);
// });