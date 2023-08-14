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
  flex-direction: column;
`;

export const FormArrayItemWrapperRow = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  height: 100%;
`;

export const FormArrayItemWrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  font-size: 23px;
  line-height: 28px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 4px;
  min-width: 0px;
  height: 28px;
  font-weight: 600;
`;

export const Separator = styled.hr`
  width: 100%;
`;

export const FormArrayButtonRemover = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;

  svg {
    transform: rotate(90deg);
    width: 40px;
  }
`;

export const FormArrayButtonRemoverText = styled.span`
  writing-mode: vertical-lr;
  text-orientation: mixed;
`;

export const FormArrayButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;

  svg {
    width: 20px;
  }
`;
