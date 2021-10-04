import TrendingButton from "../../../re-usabelComponent/home/trendingButton";

export default function Trending() {
  return (
    <div className="trending">
      <div className="heading">
        <p>Trending</p>
      </div>
      <div className="trend_scroll">
        <TrendingButton
          button="button_one"
          text="#Comeback Super Kings"
          postRank="20k Post"
        />
        <TrendingButton
          button="button_two"
          text="#IPL 2020"
          postRank="50K Post"
        />
        <TrendingButton
          button="button_there"
          text="#Louis Tomlinson"
          postRank="1496k Post"
        />
        <TrendingButton
          button="button_four"
          text="#Covid-19"
          postRank="80K Post"
        />

        <TrendingButton
          button="button_two"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
        <TrendingButton
          button="button_there"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
        <TrendingButton
          button="button_there"
          text="#Comeback Super Kings"
          postRank="80K Post"
        />
      </div>
    </div>
  );
}
