import MakeTile from "/js/modules/MakeTile.js";



const salesInfo = (() => {

    //const mainElement = document.getElementById("main");

    const init = () => {
        const makeTile = new MakeTile("main-sales");
        //const mainElement = document.getElementById("main-sales");

        // Apply info to "MakeTile" module
        makeTile.apply(
            '<img src="/images/icons/clock.svg" alt="clock icon"/>',
            "Oslo",
            '<div id="oslo"></div>',
            "is-4"
        );
        makeTile.apply(
            '<img src="/images/icons/clock.svg" alt="clock icon"/>',
            "Bergen",
            '<div id="bergen"></div>',
            "is-4"
        );
        makeTile.apply(
            '<img src="/images/icons/clock.svg" alt="clock icon"/>',
            "Trondheim",
            '<div id="trondheim"></div>',
            "is-4"
        );
        makeTile.apply(
            '<img src="/images/icons/clock.svg" alt="clock icon"/>',
            "Kristiansand",
            '<div id="kristiansand"></div>',
            "is-4"
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