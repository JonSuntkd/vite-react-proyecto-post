import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "../components/gestion/Post";
import Header from "../components/Header";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import NotFound from "../components/NotFound";
import RoutePrivate from "./RoutePrivate";

function RouterProyect() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="post" element={<Post />}></Route>
        
        <Route
          path="product-admin"
          element={
            <RoutePrivate>
              <h1>Hola 12</h1>
            </RoutePrivate>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default RouterProyect;
