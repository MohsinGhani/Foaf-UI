import Image from "next/image";
import { Button } from "react-bootstrap";
import { useState } from "react";
export default function SmallRequestcard(props) {
  const [selected, setselected] = useState(true);
  return (
    <div className="small_requestCard_main">
      <div className="request">
        <Image src={props.url} alt="request" width="140" height="140" />
      </div>
      <div className="contant">
        <p className="name">{props.name}</p>
        {/* <div className="mutual_main"> */}
        <div className="mutual">
          <div className="image1">
            <Image
              src="/images/request/mutual1.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>

          <div className="image2">
            <Image
              src="/images/request/mutual2.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>
          <div className="image3">
            <Image
              src="/images/request/mutual3.svg"
              width="58"
              height="58"
              alt="request"
            />
          </div>
          <div className="mutual_friends">
            <p>85 mutual friends</p>
          </div>
        </div>
        {/* </div> */}
        <div className={selected ? "selected" : "unSelected"}>
          <Button
            onClick={() => {
              selected ? setselected(false) : setselected(true);
            }}
          >
            {selected ? <p>selected</p> : <p>select</p>}
          </Button>
        </div>
        {props.friendRequest && (
          <div className="reject">
            <Button>Reject</Button>
          </div>
        )}
      </div>
    </div>
  );
}
