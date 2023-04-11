import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import './AppDrawer.css';

export default function AppDrawer() {
  const [showModal, setShowModal] = useState(false);

  function handleSpanClick(e) {
    setShowModal(!showModal);
  };

  function handleModalClick(e) {
    if (e.target.className === 'modal') {
      setShowModal(false);
    }
  };

  let modal = null;
  if (showModal) {
    modal = (
      <div className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <h1>Choose a Game</h1>
          <h2 onClick={handleSpanClick}>The Legend of Zelda</h2>
          <h2 onClick={handleSpanClick}>A Link to the Past</h2>
          <h2 onClick={handleSpanClick}>Ocarina in Time</h2>
          <h2 onClick={handleSpanClick}>The Wind Maker</h2>
          <h2 onClick={handleSpanClick}>Breath of the Wild</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <span className='extra' onClick={handleSpanClick}><FaBars /></span>
      {modal}
    </>
  );
}
