import { useEffect, useRef } from "react";

export function Assignment1() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  const handleButtonClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input
        ref={ref}
        type="text"
        placeholder="Enter text here"
      />
      <button onClick={handleButtonClick}>
        Focus Input
      </button>
    </div>
  );
}