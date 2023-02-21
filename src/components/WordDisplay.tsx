import React from "react";
import BubbleChart from "./BubbleChart/BubbleChart";
import { Types } from "../components/BubbleChart/types";
import styled from "styled-components";

const d: Types.Data[] = [
  { id: 1, name: "alternative", size: 350, fillColor: "#28B463" },
  { id: 2, name: "biodegradable", size: 100, fillColor: "#28B463" },
  { id: 3, name: "globe", size: 75, fillColor: "#28B463" },
  { id: 4, name: "recyclable ", size: 150, fillColor: "#28B463" },
  { id: 5, name: "biofuel", size: 150, fillColor: "#28B463" },
  { id: 6, name: "fossil reduce", size: 125, fillColor: "#28B463" },
  { id: 7, name: "planet", size: 230, fillColor: "#28B463" },
  { id: 8, name: "factory", size: 70, fillColor: "#28B463" },
  { id: 9, name: "toxic waste", size: 70, fillColor: "#28B463" },
  { id: 10, name: "life", size: 70, fillColor: "#28B463" },
  { id: 11, name: "pollution", size: 70, fillColor: "#28B463" },
  { id: 12, name: "rain forest", size: 50, fillColor: "#28B463" },
  { id: 13, name: "water", size: 60, fillColor: "#28B463" },
  { id: 14, name: "energy", size: 70, fillColor: "#28B463" },
  { id: 15, name: "emissions", size: 80, fillColor: "#28B463" },
  { id: 16, name: "renewable", size: 90, fillColor: "#28B463" },
  { id: 17, name: "resource", size: 100, fillColor: "#28B463" },
  { id: 18, name: "sustainable", size: 150, fillColor: "#28B463" },
  { id: 19, name: "environment", size: 150, fillColor: "#28B463" },
];

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   margin-left: 150px;
`;

const ShuffleButton = styled.button`
  background-color: #28b463;
`;

const WordDisplay = () => {
  const [data, setData] = React.useState<Types.Data[]>(d.slice(1, 10));
  const changeData = () => {
    setData(d.sort(() => Math.random() - 0.5));
  };
  const selectedKeyHandler = (key: string) => {
    // eslint-disable-next-line no-alert
    alert(key);
  };
  return (
    <ChartContainer>
      <ShuffleButton onClick={changeData}>SHUFFLE</ShuffleButton>
      <BubbleChart
        bubblesData={d}
        width={1000}
        height={600}
        textFillColor="white"
        backgroundColor="black"
        minValue={1}
        maxValue={150}
        selectedCircle={selectedKeyHandler}
      />
    </ChartContainer>
  );
};

export default WordDisplay;
