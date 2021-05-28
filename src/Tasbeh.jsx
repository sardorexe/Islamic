import React, { useState, useEffect } from "react";

function Tasbeh() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [className, setClassName] = useState("");
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const remove = () => {
    setClick(true);
    setClassName("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("open");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`tasbeh ${click ? "remove" : ""} ${className}`}>
      <span className="remember">Zikrda bo'ling</span>
      <i onClick={remove} className="fas fa-times"></i>
      <div className="tasbeh-container">
        <span className="container-line">{count}</span>
        <button onClick={increment} className="increment"></button>
        <button onClick={reset} className="reset"></button>
      </div>
    </div>
  );
}

export default Tasbeh;
