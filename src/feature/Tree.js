import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import EmployeeCard from "./EmployeeCard";

const DragDropChart = ({ hierarchy }) => {
  const ds = {
    id: "n1",
    name: "Lao Lao",
    title: "general manager",
    children: [
      {
        id: "n2",
        name: "Nikola Duval",
        designation: "Developer Advocate",
        team: "IT",
        manager: 4,
        image: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      {
        id: "n3",
        name: "Su Miao",
        title: "department manager",
        children: [
          { id: "n4", name: "Tie Hua", title: "senior engineer" },
          {
            id: "n5",
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { id: "n6", name: "Dan Dan", title: "engineer" },
              { id: "n7", name: "Xiang Xiang", title: "engineer" },
            ],
          },
          { id: "n8", name: "Pang Pang", title: "senior engineer" },
        ],
      },
      { id: "n9", name: "Hong Miao", title: "department manager" },
      {
        id: "n10",
        name: "Chun Miao",
        title: "department manager",
        children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }],
      },
    ],
  };

  return (
    <OrganizationChart
      datasource={hierarchy}
      draggable={true}
      collapsible={false}
      NodeTemplate={({ nodeData }) => {
        const selectNode = () => {
          alert(
            nodeData.name +
              " - " +
              nodeData.designation +
              ", from " +
              nodeData.team +
              " team."
          );
        };
        return (
          <div onClick={selectNode}>
            <EmployeeCard {...nodeData} />
          </div>
        );
      }}
    />
  );
};

export default DragDropChart;