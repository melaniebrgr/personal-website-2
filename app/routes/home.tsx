import type { Route } from "./+types/home";
import HomeView from "./home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Melanie 🍔's Website" },
    { name: "description", content: "Portfolio website of Melanie - creating at the intersection of art, science, and technology" },
  ];
}

export default function Home() {
  return <HomeView />;
}
