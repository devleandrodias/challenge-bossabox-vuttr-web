import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 0.75;
  align-items: center;
  justify-content: space-between;
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  svg {
    margin-left: 12px;

    path {
      stroke: #b1adb9;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  letter-spacing: 0.4px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: none;
  color: #170c3a;
  opacity: 1;
  border-right-style: none;
  padding: 12px;
  width: 40%;
  font-family: 'Source Sans Pro', sans-serif;

  &::placeholder {
    color: #b1adb9;
  }
`;
