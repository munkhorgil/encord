import { PredictionValue } from "@/types";
import React from "react";

type Props = {
  data?: PredictionValue;
};

const DynamicSVG = ({ item }: { item: any }) => {
  const { bbox, label, score } = item;

  const width = bbox.x2 - bbox.x1;
  const height = bbox.y2 - bbox.y1;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`100 150 ${window.innerWidth} ${window.innerHeight}`}
    >
      <rect
        x={bbox.x1}
        y={bbox.y1}
        width={width}
        height={height}
        fill="#1b1386"
        opacity={0.2}
        stroke="black"
      />
      <text
        x={bbox.x2 - 10}
        y={bbox.y2 - 20}
        fill="#1b1386"
        dominantBaseline="baseline"
        textAnchor="end"
      >
        {label} ({score}%)
      </text>
    </svg>
  );
};

const Annotation: React.FC<Props> = ({ data }: Props) => {
  if (!data?.predictions || data?.predictions?.length === 0) {
    return null;
  }

  return data.predictions.map((item, index) => (
    <DynamicSVG key={index} item={item} />
  ));
};

export default Annotation;
