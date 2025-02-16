const svg = d3.select("#japan-map");
const tooltip = d3.select("#tooltip");

d3.json("assets/japan.topojson").then(data => {
    const geoData = topojson.feature(data, data.objects.japan);
    const projection = d3.geoMercator().center([137, 38]).scale(2000).translate([600, 400]);
    const path = d3.geoPath().projection(projection);

    svg.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "province")
        .attr("id", d => d.properties.nam)
        .on("mouseover", (event, d) => {
            tooltip.style("display", "block").text(`${d.properties.nam} (${d.properties.nam_ja})`);
        })
        .on("mousemove", (event) => {
            tooltip.style("top", `${event.clientY + 10}px`).style("left", `${event.clientX + 10}px`); 
        })
        .on("mouseout", () => tooltip.style("display", "none"))
        .on("click", (event, d) => {
            window.location.href = "./provincies/" + d.properties.nam.replace(/\s/g, '') + ".html";

        });
});
