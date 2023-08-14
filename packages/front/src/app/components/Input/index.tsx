import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
}

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  children,
}: InputProps) {
  const { register } = useFormContext();

  return (
    <S.WrapperInput>
      <label htmlFor={name}>{label}</label>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {children}
    </S.WrapperInput>
  );
}
