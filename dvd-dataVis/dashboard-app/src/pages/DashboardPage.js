import React from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "New Chart",
    vizState: {
      query: {
        measures: ["FilmActor.count"],
        timeDimensions: [
          {
            dimension: "FilmActor.lastUpdate"
          }
        ],
        dimensions: ["Actor.firstName", "Actor.lastName"],
        filters: []
      },
      chartType: "table"
    }
  },
  {
    id: 1,
    name: "New Chart",
    vizState: {
      query: {
        measures: ["Language.count"],
        timeDimensions: [],
        dimensions: ["Language.name"],
        filters: []
      },
      chartType: "pie"
    }
  },
  {
    id: 2,
    name: "New Chart",
    vizState: {
      query: {
        measures: ["City.count"],
        timeDimensions: [
          {
            dimension: "City.lastUpdate"
          }
        ],
        dimensions: ["City.city"],
        filters: []
      },
      chartType: "pie"
    }
  }
];

const DashboardPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={12}
      key={item.id}
      style={{
        marginBottom: "24px"
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <h2>
        There are no charts on this dashboard. Use Playground Build to add one.
      </h2>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard dashboardItems={DashboardItems}>
      {DashboardItems.map(dashboardItem)}
    </Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
