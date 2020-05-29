import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./body.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import Header from "./components/Header";
const API_URL = "http://localhost:4000";
const CUBEJS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTA3NTkxMjUsImV4cCI6MTU5MDg0NTUyNX0.kMNsbaYF4xUVU7qnPV8he7yz8NsLTtBdfpax-0emxG4";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: "100%"
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);

export default App;
