import { Button } from "react-bootstrap";

export default function TrendingButton(props) {
  return (
    <div className="trend_button">
      <Button className={props.class}>
        <p className="text">{props.text}</p>
        <p className="post_ranking">{props.postRank}</p>
      </Button>
    </div>
  );
}
