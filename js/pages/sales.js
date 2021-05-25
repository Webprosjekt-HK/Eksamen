/*
import MakeTile from "/js/modules/MakeTile.js";

makeTile = new MakeTile("total-sales")

const salesObject = () => 
makeTile.apply();
makeTile.apply();
makeTile.apply();
*/

var osloData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    var osloLayout = {
    height: 300,
    width: 300,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    };

    var osloConfig = {responsive: true}

    Plotly.newPlot('oslo', osloData, osloLayout, osloConfig);

    var bergenData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    var bergenLayout = {
    height: 300,
    width: 300,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    };

    var bergenConfig = {responsive: true}

    Plotly.newPlot('bergen', bergenData, bergenLayout, bergenConfig);

    var trondheimData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    var trondheimLayout = {
    height: 300,
    width: 300,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    };

    var trondheimConfig = {responsive: true}

    Plotly.newPlot('trondheim', trondheimData, trondheimLayout, trondheimConfig);

    var kristiansandData = [{
    type: "pie",
    values: [20000, 95000, 30000, 65000],
    labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
    }];

    var kristiansandLayout = {
    height: 300,
    width: 300,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    };

    var kristiansandConfig = {responsive: true}

    Plotly.newPlot('kristiansand', kristiansandData, kristiansandLayout, kristiansandConfig);
