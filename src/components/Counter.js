import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = Number(value.toFixed(0)).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <h4 ref={nodeRef}>{""}</h4> || <h4>5</h4>;
};

export default Counter;
