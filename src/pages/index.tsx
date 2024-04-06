import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("../containers/Home/HomeView"));

export default function Home() {
  return <HomeView />;
}
