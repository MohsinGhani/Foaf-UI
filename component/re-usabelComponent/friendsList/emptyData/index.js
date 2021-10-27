import { Empty } from "antd";
export default function EmptyData(props) {
  return (
    <div className="empty">
      <Empty description={props.text} />
    </div>
  );
}
