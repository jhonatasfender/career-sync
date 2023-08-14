import { styled } from 'styled-components';

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 12px 16px;
  width: 100%;
  display: block;
  background-color: rgb(239, 242, 249);
  outline: none;
  border: 0px;
  color: rgb(30, 37, 50);
  transition: color 0.1s ease 0s;
`;
