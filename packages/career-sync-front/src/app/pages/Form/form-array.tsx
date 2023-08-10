/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, useFieldArray } from 'react-hook-form';

import { Delete } from '@styled-icons/fluentui-system-filled';

import * as S from './styles';

type FormArrayProps = {
  children: ((props: FormArrayOutProps) => JSX.Element) | JSX.Element;
  control: Control<FieldValues, any>;
  name: string;
  titleRemove: string;
  titleAdd: string;
};

/**
 * @link https://codesandbox.io/s/react-hook-form-usefieldarray-nested-arrays-x7btr?file=/src/nestedFieldArray.js
 */

type FormArrayOutProps = {
  controlForm: Control<FieldValues, any>;
  field: Record<string, any>;
  key: number;
  name: string;
};

export default function FormArray({
  children,
  control,
  name,
  titleRemove,
  titleAdd,
}: FormArrayProps): JSX.Element {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleAdd = () => {
    append({});
  };

  if (typeof children === 'function') {
    return (
      <S.FormArrayWrapper>
        {fields.map((field, key) => (
          <S.FormArrayItemWrapper key={field.id}>
            <hr />

            <S.FormCol>
              {children({ controlForm: control, field, key, name })}
            </S.FormCol>

            <button type="button">{titleRemove}</button>

            <hr />
          </S.FormArrayItemWrapper>
        ))}

        <button type="button" onClick={handleAdd}>
          <Delete />
          {titleAdd}
        </button>
      </S.FormArrayWrapper>
    );
  }

  return children;
}
