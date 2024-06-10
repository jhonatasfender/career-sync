import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'specialOffer';

type ButtonBaseProps = {
  variant: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  width?: string;
  height?: string;
};

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
} & ButtonBaseProps;

const getPadding = (size: ButtonSize = 'medium'): string => {
  switch (size) {
    case 'small':
      return '0.8rem 1.6rem';
    case 'large':
      return '1.2rem 2.4rem';
    default:
      return '1rem 2rem';
  }
};

const getHeight = (
  size: ButtonSize = 'medium',
  customHeight?: string
): string => {
  if (customHeight) return customHeight;
  switch (size) {
    case 'small':
      return '4rem';
    case 'large':
      return '6.4rem';
    default:
      return '4.8rem';
  }
};

const getFontSize = (size: ButtonSize = 'medium'): string => {
  switch (size) {
    case 'small':
      return '1.2rem';
    case 'large':
      return '1.6rem';
    default:
      return '1.4rem';
  }
};

const variantStyles = new Map<ButtonVariant, ReturnType<typeof css>>([
  [
    'primary',
    css`
      background-color: #4cbc9a;
      color: white;
      border-radius: 0.8rem;
    `,
  ],
  [
    'secondary',
    css`
      background-color: white;
      color: #333;
      border: 0.1rem solid #ccc;
      border-radius: 1.6rem;
    `,
  ],
  [
    'tertiary',
    css`
      background-color: #f0f0f0;
      color: #333;
      border-radius: 0.4rem;
    `,
  ],
  [
    'specialOffer',
    css`
      background-color: #ff6868;
      color: white;
      border: 0.1rem solid #ff6868;
      border-radius: 2rem;
    `,
  ],
]);

const StyledButton = styled.button<ButtonBaseProps>`
  border: none;
  padding: ${({ size }) => getPadding(size)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  height: ${({ height, size }) => getHeight(size, height)};
  width: ${({ width }) => width ?? 'auto'};
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${({ variant }) => variantStyles.get(variant)}
`;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className,
  fontWeight,
  width,
  height,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      className={className}
      fontWeight={fontWeight}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  );
};
