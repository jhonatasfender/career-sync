import 'react-datepicker/dist/react-datepicker.css';

import { format, parseISO } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './styles';

type FormDatePickerProps = {
  name: string;
  label: string;
};

export default function FormDatePicker({ name, label }: FormDatePickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <S.WrapperFormDatePicker>
          <label>{label}</label>

          <S.StyledDatePicker
            selected={value ? parseISO(value) : null}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione uma data"
            onChange={(date) => {
              date &&
                !Array.isArray(date) &&
                onChange(format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"));
            }}
            onBlur={onBlur}
          />
        </S.WrapperFormDatePicker>
      )}
    />
  );
}
