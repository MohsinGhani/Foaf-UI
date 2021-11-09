import { Input } from "antd";
import { useRouter } from "next/router";
import Searchicon from "../dashboardIcons/search";
export default function SearchBarDashboard() {
  const router = useRouter();
  return (
    <div
      className={`searchBarHomeDashboard ${
        router.pathname === "/explore-page" && "hidethis"
      }`}
      onClick={() => {
        router.push("/explore-page");
      }}
    >
      <Searchicon />
      <p>Explore foaf</p>
    </div>
  );
}
