import Sponsoreds from "../nestedComponent/home/homeSponsored/sponsoreds";
import ShowTrending from "../nestedComponent/home/trending/showTrandings";
import TrendingTabs from "../nestedComponent/trending/trendingtabs";
export default function Trending() {
  return (
    <div className="trending_main">
      <div className="left_side">
        <div className="trend_tabs_main">
          <TrendingTabs />
        </div>
      </div>
      <div className="right_side">
        <div className="sponsoreds_main">
          <Sponsoreds />
        </div>
        <div className="show_trending_main">
          <ShowTrending />
        </div>
      </div>
    </div>
  );
}
