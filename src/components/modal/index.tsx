import React from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalWrapper, ModalHeader, ModalBody, ModalFooter } from './style';
import { ButtonsClass } from '../../enum/button.enum';

const Modal: React.FC = () => {
  return (
    <ModalWrapper>
      <ModalHeader>
        <GrClose cursor="pointer" />
        <span>Add new tool</span>
      </ModalHeader>
      <ModalBody>
        <div className="group-inputs">
          <label htmlFor="toolName">Tool Name</label>
          <input name="toolName" type="text" />
        </div>
        <div className="group-inputs">
          <label htmlFor="toolLink">Tool Link</label>
          <input name="toolLink" type="text" />
        </div>
        <div className="group-inputs">
          <label htmlFor="toolDescription">Tool Description</label>
          <textarea maxLength={500} rows={7} name="toolDescription" />
        </div>
        <div className="group-inputs">
          <label htmlFor="toolTags">Tool Tags</label>
          <input name="toolTags" />
        </div>
      </ModalBody>
      <ModalFooter>
        <button
          type="button"
          className={`button ${ButtonsClass.PrimarySuccess}`}
        >
          Add Tool
        </button>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default Modal;
