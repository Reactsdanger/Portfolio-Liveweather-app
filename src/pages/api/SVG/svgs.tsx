import { JSX } from "react";

export const Wind = () => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24"
    />
  </svg>
};

export const Degree = () => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11 22q-3.75 0-6.375-2.625T2 13q0-1.875.713-3.513t1.937-2.85q1.225-1.212 2.863-1.924T11.025 4h.175l-.9-.9q-.15-.15-.213-.325t-.062-.375q0-.2.063-.375T10.3 1.7q.275-.275.7-.275t.7.275l2.6 2.6q.15.15.212.325t.063.375q0 .2-.063.375T14.3 5.7l-2.6 2.6q-.275.275-.7.275t-.7-.275q-.15-.15-.212-.325t-.063-.375q0-.2.063-.375T10.3 6.9l.9-.9h-.175q-2.9 0-4.962 2.05T4 13q0 2.9 2.05 4.95T11 20q.725 0 1.413-.138t1.337-.412q.275-.125.563-.075t.487.25q.425.425.35.925t-.6.725q-.825.35-1.713.538T11 22Zm6-3.425q-.2 0-.375-.063T16.3 18.3l-4.6-4.6q-.15-.15-.212-.325T11.425 13q0-.2.063-.375t.212-.325l4.6-4.6q.15-.15.325-.212T17 7.425q.2 0 .375.063t.325.212l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
    />
  </svg>;
}

export const Direction = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <mask id="lineMdCompassTwotoneLoop0">
        <path
          fill="#fff"
          fill-opacity="0"
          stroke="#fff"
          stroke-dasharray="60"
          stroke-dashoffset="60"
          stroke-linecap="round"
          stroke-width="2"
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.5s"
            dur="0.15s"
            values="0;0.3"
          />
        </path>
        <path fill="#fff" d="M11 11L12 12L13 13L12 12z">
          <set attributeName="opacity" begin="0.6s" to="1" />
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.6s"
            dur="0.3s"
            values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
          />
          <animateTransform
            attributeName="transform"
            begin="0.5s"
            dur="9s"
            repeatCount="indefinite"
            type="rotate"
            values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
          />
        </path>
        <circle cx="12" cy="12" r="1" fill-opacity="0">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.8s"
            dur="0.3s"
            values="0;1"
          />
        </circle>
      </mask>
      <rect
        width="24"
        height="24"
        fill="currentColor"
        mask="url(#lineMdCompassTwotoneLoop0)"
      />
    </svg>
  );
}

export const Temperature = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0v8.5M8 9h4m4 0h6m-3-3v6"
      />
    </svg>
  );
}