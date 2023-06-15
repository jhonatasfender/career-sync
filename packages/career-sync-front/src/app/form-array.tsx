import { Control, FieldValues, useFieldArray } from 'react-hook-form';

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
      <>
        {fields.map((field, key) => (
          <div key={field.id}>
            <hr />

            {children({ controlForm: control, field, key, name })}

            <button type="button">{titleRemove}</button>

            <hr />
          </div>
        ))}

        <button type="button" onClick={handleAdd}>{titleAdd}</button>
      </>
    );
  }

  return children;
}
