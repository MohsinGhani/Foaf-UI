export default function CommonHeading({ heading, text }) {
  return (
    <div className="main_commonHeading">
      <div className="text">
        <p className="text_one">{heading}</p>
        <p className="text_two">{text}</p>
      </div>
      <hr />
    </div>
  );
}
