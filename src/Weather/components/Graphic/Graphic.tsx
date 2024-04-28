import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GraphicStyle } from "./GraphicStyle";
import { GraphicProps } from "../../common/types";
import React from "react";

export default function Graphic({ data, background }: GraphicProps) {
  return (
    <GraphicStyle>
      <LineChart width={700} height={300} data={data}>
        <Line type="monotone" dataKey="temp" stroke={background || "#006eff"} />
        <CartesianGrid stroke="#ccc" strokeDasharray="15 15" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </GraphicStyle>
  );
}
