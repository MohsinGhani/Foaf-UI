import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col, Divider } from "antd";
export default function Family(props) {
  return (
    <div className="request_card_main">
      <Row gutter={16}>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile2.svg"
              name="Marcus Botosh"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile1.svg"
              name="Haylie Dokidis"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile1.svg"
              name="Tatiana George"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile2.svg"
              name="Dulce Saris"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile1.svg"
              name="Kianna Septimus"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile2.svg"
              name="Hanna Westervelt"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile1.svg"
              name="Allison Philips"
            />
          </div>
        </Col>
        <Col xs={16} sm={12} md={8} lg={6}>
          <div className="request_card">
            <RequestCard
              family={props.family}
              url="/images/request/requestProfile2.svg"
              name="Alfredo Lipshutz"
            />
          </div>
        </Col>
      </Row>
      {/* <div className="request_card">
            <RequestCard name="" />
          </div> */}
    </div>
  );
}
