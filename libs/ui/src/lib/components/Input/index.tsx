import styled from 'styled-components';

import {
  inputColorMap,
  InputProps,
  inputSizeMap,
  InputStyleProps,
} from './input.structure';

const InputStyle = styled.input<InputStyleProps>`
  border: none;
  height: 100%;
  width: 100%;
  line-height: 1rem;

  background-color: ${({ variant = 'white' }) => inputColorMap.get(variant)};

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div<InputStyleProps>`
  border: 0.1rem solid #dbdbdb;
  border-radius: 1.6rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  height: ${({ size = 'medium' }) => inputSizeMap.get(size)};
  background-color: ${({ variant = 'white' }) => inputColorMap.get(variant)};
`;

const InputAddon = styled.div`
  display: flex;
  padding: 1.4rem 0;
`;

export const Input = ({ size, variant, children, ...props }: InputProps) => {
  return (
    <InputWrapper size={size} variant={variant}>
      <InputStyle variant={variant} {...props} />
      {children && <InputAddon>{children}</InputAddon>}
    </InputWrapper>
  );
};
