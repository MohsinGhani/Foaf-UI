import { useRouter } from "next/router";
import TrendingButton from "../../../../re-usabelComponent/home/trending/trendingButton";

export default function ShowTrending() {
  const router = useRouter();
  return (
    <div className="ShowTrending">
      <div className="heading">
        <p>Trending</p>
      </div>
      <div className="trend_scroll">
        <TrendingButton
          class="button"
          text="#Comeback Super Kings"
          postRank="20k Post"
        />
        <TrendingButton class="button" text="#IPL 2020" postRank="50K Post" />
        <TrendingButton
          class="button"
          text="#Louis Tomlinson"
          postRank="1496k Post"
        />
        <TrendingButton class="button" text="#Covid-19" postRank="80K Post" />

        <TrendingButton
          class="button"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
        <TrendingButton
          class="button"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
        <TrendingButton
          class="button"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
        <div
          onClick={() => {
            router.push("/trending-page");
          }}
        >
          <TrendingButton class="see_more button" text="See More" />
        </div>
      </div>
    </div>
  );
}
