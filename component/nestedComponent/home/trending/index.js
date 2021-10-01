import TrendingButton from "../../../re-usabelComponent/home/trendingButton";

export default function Trending() {
  return (
    <div className="trending">
      <div className="heading">
        <p>Trending</p>
      </div>
      <div className="trend_scroll">
        <TrendingButton button="button_one" text="#Comeback Super Kings" />
        <TrendingButton button="button_two" text="#IPL 2020" />
        <TrendingButton button="button_there" text="#Louis Tomlinson" />
        <TrendingButton button="button_four" text="#Covid-19" />

        <TrendingButton button="button_there" text="#Comeback Super Kings" />
        <TrendingButton button="button_four" text="#Comeback Super Kings" />
        <TrendingButton button="button_two" text="#Comeback Super Kings" />
        <TrendingButton button="button_there" text="#Comeback Super Kings" />
        <TrendingButton button="button_there" text="#Comeback Super Kings" />
        <TrendingButton button="button_one" text="#Comeback Super Kings" />
        <TrendingButton button="button_four" text="#Comeback Super Kings" />
      </div>
    </div>
  );
}
