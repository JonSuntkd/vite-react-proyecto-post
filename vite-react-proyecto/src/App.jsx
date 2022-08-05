import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import NotFound from "./components/NotFound";
import { UserProvider } from "./components/Context/LoginContext/UserContext";
import RouterProyect from "./router/RouterProyect";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <RouterProyect />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
