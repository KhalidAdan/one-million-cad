import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "1 MILLION DOLLARS" },
    { name: "description", content: "What a domain! buy it now!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
