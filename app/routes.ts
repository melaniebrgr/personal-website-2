import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),
    route("apliaredesign", "routes/designandvisualcommmunication/apliaredesign/apliaredesign.tsx"),
] satisfies RouteConfig;
