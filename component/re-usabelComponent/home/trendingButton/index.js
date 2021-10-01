import { Button } from "react-bootstrap";

export default function TrendingButton(props) {
  return (
    <div className="trend_button">
      <Button className={props.button}>
        <p>{props.text}</p>
      </Button>
    </div>
  );
}
