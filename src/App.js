import React from "react";
import Routes from "./routes";
import "./generals.css";

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
