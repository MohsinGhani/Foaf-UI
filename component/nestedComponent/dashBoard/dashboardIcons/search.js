export default function Searchicon(props) {
  return (
    <div className={props.condition ? " icon search" : "full"}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.76639"
          cy="9.76639"
          r="8.98856"
          stroke="#BFBFBF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0181 16.4849L19.5421 19.9997"
          stroke="#BFBFBF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input type="text" />
    </div>
  );
}
