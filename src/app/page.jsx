"use client"

import Card from "@/components/card";
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
      .attr('width', 500)
      .attr('height', 300)
      .style('overflow', 'visible')
      .style('margin', '50px');

    // Sample Data
    const data = [
      { x: 0, y: 10 },
      { x: 1, y: 20 },
      { x: 2, y: 15 },
      { x: 3, y: 30 },
      { x: 4, y: 40 },
      { x: 5, y: 35 },
      { x: 6, y: 50 }
    ];

    // Define scales
    const xScale = d3.scaleLinear().domain([0, 6]).range([0, 500]);
    const yScale = d3.scaleLinear().domain([0, 50]).range([300, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g').call(xAxis).attr('transform', 'translate(0,300)');
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

  return (
    <div className="container p-6 flex bg-gradient-to-r from-purple-50 to-pink-50">

      <main className="container shadow-lg rounded-3xl p-5 border-indigo-600  bg-gradient-to-r from-purple-100 to-pink-100 ">
        <div className="flex flex-wrap gap-5">
          <Card />
          <Card />
        </div>
        <svg ref={svgRef}></svg>;
      </main>

    </div>
  );
}
