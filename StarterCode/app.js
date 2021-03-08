// Read in the json file
d3.json("data/samples.json").then((data) => {
    // Create the Traces
    let trace1 = {
        x: data.sample_values,
        y: data.otu_ids,
        type: "box"
    }
    // Create the data array for the plot
    let traceDataArr = [trace1];
    // Define the plot layout
    let layout = {
        title: "Top 10 OTU's"
    }

    // Plot the chart to a div tag with id "selDataset"
    Plotly.newPlot("selDataset", traceDataArr, layout);
});