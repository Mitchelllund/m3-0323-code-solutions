import { useState } from "react"
import './Accordian.css'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <>
      <Panel
        title="Hypertext Markup Language"
        isActive={activeIndex === 1}
        onShow={() => handlePanelClick(1)}
      >
        The HyperText Markup Language or HTML is the standard markup be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
      </Panel>
      <Panel
        title="Cascading Style Sheets"
        isActive={activeIndex === 2}
        onShow={() => handlePanelClick(2)}
      >
        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.
      </Panel>
      <Panel
        title="Javascript"
        isActive={activeIndex === 3}
        onShow={() => handlePanelClick(3)}
      >
        JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  function handleClick() {
    if (isActive) {
      onShow(0);
    } else {
      onShow();
    }
  };

  return (
    <section className="panel">
      <h3 onClick={handleClick}>{title}</h3>
      {isActive ? (
        <p onClick={() => onShow(0)}>{children}</p>
      ) : (
        <p style={{ display: 'none' }}>{children}</p>
      )}
    </section>
  );
}
