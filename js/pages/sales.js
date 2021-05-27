import MakeTile from "/js/modules/MakeTile.js";

const salesInfo = (() => {
    //const mainElement = document.getElementById("main");

    const init = () => {
        const containerElement = document.createElement("div");
        containerElement.classList.add("columns", "is-multiline")
        containerElement.classList.add("columns", "is-multiline");
        containerElement.id = "sales-container";

        document.getElementById("main").innerHTML = "";
        document.getElementById("main").append(containerElement);

        const makeTile = new MakeTile("sales-container");
        //const mainElement = document.getElementById("main-sales");

        // Apply info to "MakeTile" module
        makeTile.apply(
            "2021",
            "Total omsetning & mål",
            '<div id="sales-vs-goals"></div>',
            "is-6"
        );
        makeTile.apply(
            "2021",
            "Tittel",
            '<div id="tittel"></div>',
            "is-6"
        );
        
        makeTile.apply(
            "Mai 2021",
            "Oslo - Majorstuen",
            '<div id="majorstuen"></div>',
            "is-3"
        );
        makeTile.apply(
            "Mai 2021",
            "Oslo - Storo",
            '<div id="storo"></div>',
            "is-3"
        );
        makeTile.apply("Mai 2021", "Oslo", '<div id="oslo"></div>', "is-3");
        makeTile.apply("Mai 2021", "Bergen", '<div id="bergen"></div>', "is-3");
        makeTile.apply(
            "Mai 2021",
            "Oslo - Skippergata",
            '<div id="skippergata"></div>',
            "is-3"
        );
        makeTile.apply(
            "Mai 2021",
            "Oslo - Ensjø",
            '<div id="ensjø"></div>',
            "is-3"
        );

        // CREATE SALES vs. GOALS

        var config = {responsive: true};

        var sales = {
            x: ['Majorstuen', 'Storo', 'Skippergata', 'Ensjø'],
            y: [5000000, 3500000, 3000000, 4500000],
            name: 'Omsetning - 2021',
            type: 'bar'
        };
          
        var goals = {
            x: ['Majorstuen', 'Storo', 'Skippergata', 'Ensjø'],
            y: [8500000, 6700000, 5300000, 7200000],
            name: 'Mål - 2021',
            type: 'bar'
        };
          
        var data = [sales, goals];
          
        var layoutSales = {
            barmode: 'group',
            height: 400,
            width: 700
        };

        var config = {responsive: true};
          
          Plotly.newPlot('sales-vs-goals', data, layoutSales, config);

        
        // CREATE "PIE" CHARTS
        var layoutPie = {
            height: 300,
            width: 300,
            margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            showlegend: false,
            paper_bgcolor:'rgba(0,0,0,0)'
        };

        // Majorstuen
        var majorstuenData = [{
        type: "pie",
        values: [20000, 95000, 30000, 65000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('majorstuen', majorstuenData, layoutPie, config);

        // Storo
        var storoData = [{
        type: "pie",
        values: [15000, 80000, 15000, 60000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('storo', storoData, layoutPie, config);

        // Skippergata
        var skippergataData = [{
        type: "pie",
        values: [10000, 75000, 10000, 50000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('skippergata', skippergataData, layoutPie, config);

        // Ensjø
        var ensjøData = [{
        type: "pie",
        values: [10000, 85000, 25000, 60000],
        labels: ["Tilbehør", "Pizza", "Dessert", "Barvirksomhet"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
        }];

        Plotly.newPlot('ensjø', ensjøData, layoutPie, config);

        
    };
    return { init };
})();

export default salesInfo;
