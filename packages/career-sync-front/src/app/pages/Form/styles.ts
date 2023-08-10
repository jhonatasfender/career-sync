import { styled } from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 40px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FormArrayWrapper = styled.div``;

export const FormArrayItemWrapper = styled.div`
display: flex;
`;
