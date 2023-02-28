export class Router {
  constructor(routes) {
    this.routes = routes;
  }

  loadInitialRoute() {
    const pathName = location.pathname;
    const route = this.routes.find((route) => route.path === pathName);
    route ? this.loadRoute(route.path) : this.loadRoute("/");
  }

  loadRoute(pathName) {
    const route = this.routes.find((route) => route.path === pathName);
    history.replaceState({},'', route.path);
    document.querySelector("#root").innerHTML = new route.component().render();
  }
}