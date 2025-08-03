import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layout.tsx", [
        index("routes/home/home.tsx"),
        // Front-End Web Development
        route("gctavatar", "routes/frontendwebdevelopment/gctavatar/gctavatar.tsx"),
        route("symptomsleuth", "routes/frontendwebdevelopment/symptomsleuth/symptomsleuth.tsx"),
        route("shoppinglist", "routes/frontendwebdevelopment/shoppinglist/shoppinglist.tsx"),
        route("cocktailsquiz", "routes/frontendwebdevelopment/cocktailsquiz/cocktailsquiz.tsx"),
        route("lab3d", "routes/frontendwebdevelopment/lab3d/lab3d.tsx"),
        // Design & Visual Communication
        route("apliaredesign", "routes/designandvisualcommmunication/apliaredesign/apliaredesign.tsx"),
        route("naturecover", "routes/designandvisualcommmunication/naturecover/naturecover.tsx"),
        // Other
        route("writingandspeaking", "routes/writingandspeaking/writingandspeaking.tsx"),
    ]),
] satisfies RouteConfig;