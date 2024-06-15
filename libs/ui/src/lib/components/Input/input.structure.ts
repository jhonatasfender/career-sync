import { InputHTMLAttributes, ReactNode } from 'react';

export type InputStyleProps = {
  size?: 'small' | 'medium' | 'large';
  elementsChildren?: 'left' | 'right';
  variant?: 'light' | 'medium' | 'dark' | 'white';
};

export type InputProps = { children?: ReactNode } & InputStyleProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const inputSizeMap = new Map<InputStyleProps['size'], string>([
  ['small', '4.8rem'],
  ['medium', '6rem'],
  ['large', '8.8rem'],
]);

export const inputColorMap = new Map<InputStyleProps['variant'], string>([
  ['light', '#FAFAFA'],
  ['medium', '#e2e2e2'],
  ['dark', '#dcdcdc'],
  ['white', '#ffffff'],
]);
