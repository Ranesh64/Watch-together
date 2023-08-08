import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body.jsx";
import WatchPage from "./Components/WatchPage.jsx";
import MainContainer from "./Components/MainContainer.jsx";
import SearchResults from "./Components/SearchResults.jsx";
// import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./utils/store.js";

// const WatchTogether = lazy(() => import("./Components/WatchTogether.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/results",
            element: <SearchResults />,
          },
        ],
      },
      {
        path: "/watch",
        element: <WatchPage />,
        // children:[
        //   {
        //     path: "/",

        //   }
        // ]
      },
    ],
  },
  {
    path: "/watchtogether",
    element: <WatchPage watchEnable={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
