import { Button } from "react-bootstrap";

export default function Topbar() {
  return (
    <div className="request_topbar">
      <p className="heading">Friends List</p>
      <div className="top_bar">
        <tr>
          <td>
            <Button className="selected">Friends request</Button>
          </td>
          <td>
            <Button>All friends</Button>
          </td>
          <td>
            <Button>Close friends</Button>
          </td>
          <td>
            <Button>Family</Button>
          </td>
        </tr>
      </div>
    </div>
  );
}
