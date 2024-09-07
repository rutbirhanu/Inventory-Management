"use client"

import Card from "@/components/home_card";
import { Roboto_Condensed } from "next/font/google";
import { useEffect, useRef } from "react"
import * as d3 from 'd3';

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 400)
      .attr('height', 200)
      .style('overflow', 'visible')
      .style('margin', '50px');

    // Sample Data
    const data = [
      { x: 0, y: 4 },
      { x: 1, y: 20 },
      { x: 2, y: 15 },
      { x: 3, y: 30 },
      { x: 4, y: 40 },
      { x: 5, y: 35 },
      { x: 6, y: 50 }
    ];

    // Define scales
    const xScale = d3.scaleLinear().domain([0, 6]).range([0, 400]);
    const yScale = d3.scaleLinear().domain([0, 50]).range([200, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g').call(xAxis).attr('transform', 'translate(0,200)');
    svg.append('g').call(yAxis);

    // Create curved line generator
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveBasis);  // curveBasis gives a smoother curve

    // Append the line to the SVG
    svg.append('path')
      .data([data])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2);
  }, []);


  const data = [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
    { label: 'C', value: 45 },
    { label: 'D', value: 65 }
  ];

  const pieSvgRef = useRef()
  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(pieSvgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().outerRadius(radius - 10).innerRadius(0);

    const tooltip = d3.select("#tooltip");

    // Draw pie chart
    svg.selectAll('.slice')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html(`${d.data.label}: ${d.data.value}`)
          .style("left", (event.pageX + 5) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
      });

    // Add labels
    svg.selectAll('.label')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text(d => d.data.label);

  }, [data]);


  return (
    <div className="container p-6 flex bg-gradient-to-r from-purple-50 to-pink-50">

      <main className="container shadow-2xl rounded-3xl p-5 border-indigo-600 ">
        <div className="flex flex-wrap justify-evenly">
          <Card />
          <Card />
          <Card />
        </div>

        <div className=" container flex gap-10 my-20 items-center">
          <svg ref={svgRef}></svg>;
          <svg ref={pieSvgRef}></svg>;
        </div>

      </main>

    </div>
  );
}
