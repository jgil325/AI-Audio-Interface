import React from "react";
import BubbleChart from "./BubbleChart/BubbleChart";
import { Types } from "../components/BubbleChart/types";
import styled from "styled-components";

const d: Types.Data[] = [
  { id: 1, name: "alternative", size: 350, fillColor: "green" },
  { id: 2, name: "biodegradable", size: 100, fillColor: "green" },
  { id: 3, name: "globe", size: 75, fillColor: "green" },
  { id: 4, name: "recyclable ", size: 150, fillColor: "green" },
  { id: 5, name: "biofuel", size: 150, fillColor: "green" },
  { id: 6, name: "fossil reduce", size: 125, fillColor: "green" },
  { id: 7, name: "planet", size: 230, fillColor: "green" },
  { id: 8, name: "factory", size: 70, fillColor: "green" },
  { id: 9, name: "toxic waste", size: 70, fillColor: "green" },
  { id: 10, name: "life", size: 70, fillColor: "green" },
  { id: 11, name: "pollution", size: 70, fillColor: "green" },
  { id: 12, name: "rain forest", size: 50, fillColor: "green" },
  { id: 13, name: "water", size: 60, fillColor: "green" },
  { id: 14, name: "energy", size: 70, fillColor: "green" },
  { id: 15, name: "emissions", size: 80, fillColor: "green" },
  { id: 16, name: "renewable", size: 90, fillColor: "green" },
  { id: 17, name: "resource", size: 100, fillColor: "green" },
  { id: 18, name: "sustainable", size: 150, fillColor: "green" },
  { id: 19, name: "environment", size: 150, fillColor: "green" },
];

const ChartContainer = styled.div`
  align-items: center;
  margin-left: 150px;
`;

const WordDisplay = () => {
  return (
    <ChartContainer>
      <BubbleChart
        bubblesData={d}
        width={1000}
        height={600}
        textFillColor="white"
        backgroundColor="black"
        minValue={1}
        maxValue={150}
        selectedCircle={Function}
      />
    </ChartContainer>
  );
};

export default WordDisplay;
