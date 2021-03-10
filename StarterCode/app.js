// Scope of Project: Use Plotly to Create Interactive Charts where user can select Test Subject ID
// and get the corresponding information about test subject

// 1. Get a handle on the dropdown menu where user will choose Test Subject ID
let userSubjectChoice = d3.select("#selDataset");

// 2. Read in json data and start
d3.json("data/samples.json").then((data) => {
    // Check data in console
    console.log(data);
});











// // Put the names in the samples.json file in the dropdown box

// var select_tag = d3.select("#selDataset");

// d3.json("data/samples.json").then((data) => {
//     var subject_ids = importedData.names;
  


// // Check to see that you can log the samples.json names to the console
// d3.json("data/samples.json").then((data) => {
//     console.log(data.names);

//     subject_ids.forEach((id) => {
//         select_tag
//           .append("option")
//           .property("value", id)
//           .text(id);
//       });
    
// });









// // Log sample_values to console to test
// d3.json("data/samples.json").then((data) => {
//     console.log(data.sample_values);
// });


// // // Define Dataset you are working with:
// // // 1. Define individual dataset
// // let individual = 


// // //Function to draw a horizontal bar chart based on whichever option selected int he dropdown
// // function drawHorBar (dataset) {

// // }





// // // Read in the json file
// // d3.json("data/samples.json").then((data) => {
// //     // Create the Traces
// //     let trace1 = {
// //         x: data.sample_values,
// //         y: data.otu_ids,
// //         type: "box"
// //     }
// //     // Create the data array for the plot
// //     let traceDataArr = [trace1];
// //     // Define the plot layout
// //     let layout = {
// //         title: "Top 10 OTU's"
// //     }

// //     // Plot the chart to a div tag with id "selDataset"
// //     Plotly.newPlot("selDataset", traceDataArr, layout);
// // });