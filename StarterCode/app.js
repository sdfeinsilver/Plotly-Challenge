// Scope of Project: Use Plotly to Create Interactive Charts where user can select Test Subject ID
// and get the corresponding information about test subject

// 1. Get a handle on the dropdown menu where user will choose Test Subject ID
let userSubjectChoice = d3.select("#selDataset");

// 2. Read in json data and start
d3.json("data/samples.json").then((data) => {
    // Check data can log in console -- CHECK!
    console.log("Samples.json Data Below:")
    console.log(data);
    // Assign local variable to subject ids, and check that you can log to console -- CHECK!
    let subjectIds = data.names;
    console.log("Subject ID's Below:")
    console.log(subjectIds);
    // Append subjectIds to userSubjectChoice handle
    subjectIds.forEach((id) => {
        userSubjectChoice
            .append("option")
            .property("value", id)
            .text(id);
});

// // 3. Set initial webpage load to first subject ID
// optionChanged(subjectIds[0]);

//4. Create function that is triggerd by the option change in the dropdown box (Step 1 of Homework)
function optionChanged(selectedID) {
    // Check that userID can log to the console - CHECK!
    console.log("Selected ID Below:");
    console.log(selectedID)
    // Assign sample array to sample variable
    let samples = data.samples;
    let results = samples.filter(sampleObj => sampleObj.id = selectedID);
    // Check that sample data is correct by logging to console
    console.log("Samples:");
    console.log(samples);

    // Define userSample at 0th index of userSamples
    let result = results[0];

    // Check that User defined sample is correct
    console.log("Result:");
    console.log(result);

    //Assign Part 1 Homework dat to variables
    let otuIds = results.otu_ids;
    let otuLables = result.otu_labels;
    let sampleValues = result.sample_values;

    

}
});