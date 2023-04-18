import { useState } from "react";
import "./Accordion.css"

export default function Accordion({info}) {
  const [activeIndex, setActiveIndex] = useState(0);


  function handleClick(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <>
      {info.map((panel, index) => (
        <Panel
          key={index}
          title={panel.title}
          content={panel.content}
          isActive={activeIndex === index + 1}
          onShow={() => handleClick(index + 1)}
        />
      ))}
    </>
  );
}

function Panel({ title, content, isActive, onShow }) {
  function handlePanelClick() {
    if (isActive) {
      onShow(0);
    } else {
      onShow();
    }
  }

  return (
    <section className="panel">
      <h3 onClick={handlePanelClick}>{title}</h3>
      {isActive ? (
        <p onClick={() => onShow(0)}>{content}</p>
      ) : (
        <p style={{ display: "none" }}>{content}</p>
      )}
    </section>
  );
}
