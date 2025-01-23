import React from "react";
import "./index.css"
import AppRoutes from "./routes/AppRoutes";
import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
    <>
    <Nav/>
    <AppRoutes/>
    </>
  )
}

export default App