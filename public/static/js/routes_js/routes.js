import { HomeComponent, AboutComponent } from "../main.js";
import { Router } from "./router.js";

export const routes = [
  { path: "/", component: HomeComponent },
  { path: "/menu", component: AboutComponent },
];

const router = new Router(routes);
router.loadInitialRoute();
