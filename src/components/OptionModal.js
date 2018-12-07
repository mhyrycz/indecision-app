import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelected}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>your option: {props.selectedOption}</p>}
      <button onClick={props.handleClearSelected}>Okay</button>
    </Modal>
  );

export default OptionModal;
