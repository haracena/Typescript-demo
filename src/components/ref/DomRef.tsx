import { useRef, useEffect } from "react";

export const DomRef = () => {
  // Non-null assertion operator le dice al compilador que inputRef no es null
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
