import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 5px;
  opacity: 1;
  padding: 30px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  span {
    text-align: left;
    font-size: 25px;
    font-family: 'Source Sans Pro';
    letter-spacing: 0.4px;
    color: #170c3a;
    opacity: 1;
  }

  svg {
    margin-left: -10px;
    margin-right: 15px;
  }
`;

export const ModalBody = styled.div`
  padding: 0px 20px;

  .group-inputs {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
  }

  label {
    margin-bottom: 10px;
    text-align: left;
    font-family: 'Source Sans Pro';
    letter-spacing: 0.4px;
    color: #170c3a;
    opacity: 1;
  }

  input,
  textArea {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
    padding: 10px;
  }
`;

export const ModalFooter = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: flex-end;
`;
