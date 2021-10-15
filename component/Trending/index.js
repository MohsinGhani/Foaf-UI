import Sponsoreds from "../nestedComponent/home/homeSponsored/sponsoreds";
import TrendingTabs from "../nestedComponent/trending/trendingtabs";
export default function Trending() {
  return (
    <div className="trending_main">
      <div className="left_side">
        <TrendingTabs />
      </div>
      <div className="right_side">
        <div className="sponsoreds_main">
          <Sponsoreds />
        </div>
        <div className="trending_main">
          <Trending />
        </div>
      </div>
    </div>
  );
}
