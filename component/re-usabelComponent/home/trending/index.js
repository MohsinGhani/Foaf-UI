import { Button } from "react-bootstrap";

export default function TrendingButton(props) {
  return (
    <div className="trend_button">
      <div className="heading">
        <p>Trending</p>
      </div>
      <Button className="button_one">
        <p>{props.text}</p>
      </Button>
      <Button className="button_two">
        <p>{props.text}</p>
      </Button>
      <Button className="button_three">
        <p>{props.text}</p>
      </Button>
      <Button className="button_four">
        <p>{props.text}</p>
      </Button>
    </div>
  );
}
