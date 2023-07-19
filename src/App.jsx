import React from "react";
import Navbar from "./Components/Navbar";
import MainBody from "./Components/MainBody";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";

const App = () => {
  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
};

export const myAppRouter = createBrowserRouter([
  {
     path:"/",
     element:<App />,
     children:[
      {
        path:"/",
        element:<MainBody />
      },
      {
        path:"watch",
        element:<WatchPage />
      }
     ]
  }
])
