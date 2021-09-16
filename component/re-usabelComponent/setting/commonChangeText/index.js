export default function CommonChangeText({ heading, text, selectedValue }) {
  return (
    <div className="main_commonChangeText">
      <div className="text">
        <p className="text_one">{heading}</p>
        <p className="text_two">{text}</p>
      </div>
      <div>
        <p className="change">change</p>
        <p className="seletedText">{selectedValue}</p>
      </div>
    </div>
  );
}
