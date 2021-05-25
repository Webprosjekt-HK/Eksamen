
import MakeTile from "/js/modules/MakeTile.js";

makeTile = new MakeTile("total-sales");

const salesInfo = (() => {

    const init = () => {

        // Apply info to "MakeTile" module
        makeTile.apply(
            "May 2021",
            "Oslo",
            <div id="oslo"></div>
        );
        makeTile.apply(
            "May 2021",
            "Bergen",
            <div id="bergen"></div>
        );
        makeTile.apply(
            "May 2021",
            "Trondheim",
            <div id="trondheim"></div>
        );
        makeTile.apply(
            "May 2021",
            "Kristiansand",
            <div id="kristiansand"></div>
        );

        // CREATE "PIE" CHARTS
        var layout = {
        height: 300,
        width: 300,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false
        };

        var config = {responsive: true}

        // Oslo
        var osloData = [{
        type: "pie",
        values: [20000, 95000, 30000, 65000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('oslo', osloData, layout, config);

        // Bergen
        var bergenData = [{
        type: "pie",
        values: [15000, 80000, 15000, 60000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('bergen', bergenData, layout, config);

        // Trondheim
        var trondheimData = [{
        type: "pie",
        values: [10000, 75000, 10000, 50000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('trondheim', trondheimData, layout, config);

        // Kristiansand
        var kristiansandData = [{
        type: "pie",
        values: [10000, 85000, 25000, 60000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('kristiansand', kristiansandData, layout, config);

    };
    return { init };
})();

export default salesInfo;