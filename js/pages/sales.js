/*
import MakeTile from "/js/modules/MakeTile.js";

makeTile = new MakeTile("total-sales")

const salesObject = () => 
makeTile.apply();
makeTile.apply();
makeTile.apply();
*/

    var layout = {
    height: 300,
    width: 300,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    };

    var config = {responsive: true}

    var osloData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    Plotly.newPlot('oslo', osloData, layout, config);

    var bergenData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    Plotly.newPlot('bergen', bergenData, layout, config);

    var trondheimData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    Plotly.newPlot('trondheim', trondheimData, layout, config);

    var kristiansandData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    Plotly.newPlot('kristiansand', kristiansandData, layout, config);
