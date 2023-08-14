/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, useFieldArray } from 'react-hook-form';

import { DeleteOutline } from '@styled-icons/material-sharp';
import { NoteAdd } from '@styled-icons/fluentui-system-regular';
import * as S from './styles';

type FormArrayProps = {
  children: ((props: FormArrayOutProps) => JSX.Element) | JSX.Element;
  control: Control<FieldValues, any>;
  name: string;
  titleRemove: string;
  titleAdd: string;
  title: string;
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
  title,
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
        <S.Title>{title}</S.Title>

        {fields.map((field, key) => (
          <S.FormArrayItemWrapper key={field.id}>
            {key === 0 && <S.Separator />}

            <S.FormArrayItemWrapperRow>
              <S.FormArrayItemWrapperCol>
                {children({ controlForm: control, field, key, name })}
              </S.FormArrayItemWrapperCol>

              <S.FormArrayButtonRemover type="button" title={titleRemove}>
                <DeleteOutline />
                <S.FormArrayButtonRemoverText>{titleRemove}</S.FormArrayButtonRemoverText>
              </S.FormArrayButtonRemover>
            </S.FormArrayItemWrapperRow>

            <S.Separator />
          </S.FormArrayItemWrapper>
        ))}

        <S.FormArrayButtonAdd
          type="button"
          onClick={handleAdd}
          title={titleAdd}
        >
          <NoteAdd />
          {titleAdd}
        </S.FormArrayButtonAdd>
      </S.FormArrayWrapper>
    );
  }

  return children;
}
