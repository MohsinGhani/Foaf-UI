import { Input } from "antd";
import Searchicon from "../../dashBoard/dashboardIcons/search";
export default function SearchBar() {
  return (
    <div className="searchBar">
      <Input
        placeholder="Search Recomandation, Location, Hashtag, Users"
        prefix={<Searchicon />}
      />
    </div>
  );
}