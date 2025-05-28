import { useEffect, useRef } from "react";

function intro() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);
  return (
    <>
      <h1>INTRO</h1>
      <input type="text" ref={ref} />
    </>
  );
}

export default intro;
