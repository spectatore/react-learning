import type { RouteObject } from "react-router";
import lazyLoad from "@/utils/router/lazyLoad";
import Index from "@/views/index";
const Menu1: RouteObject[] = [
  {
    element: <Index />,
    children: [
      {
        path: "/page1",
        element: lazyLoad("views/page1"),
      },
    ],
  },
];
export default Menu1;
