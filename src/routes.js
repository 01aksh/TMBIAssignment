import React from "react";

export const BASE_PATH = "/";

export const PATH_LOGIN = "/login";

export const PATH_AUTH_ROUTE = "/dashboard";
export const PATH_HOME = "/home";
export const PATH_SEARCH = "/voterSearch";

const Home = React.lazy(() => import("./pages/dashboard/Home/Home"));

const routes = [  
  {
    path: PATH_HOME,
    component: Home,
  },
];

export default routes;
