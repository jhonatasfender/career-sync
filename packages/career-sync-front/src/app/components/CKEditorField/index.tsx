import { Controller, useFormContext } from 'react-hook-form';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

type CKEditorFieldProps = {
  name: string;
  label: string;
};

export default function CKEditorField({ name, label }: CKEditorFieldProps) {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CKEditor
            editor={ClassicEditor}
            data={field.value}
            onChange={(event, editor) => {
              const data = editor.getData();
              field.onChange(data);
            }}
          />
        )}
      />
    </div>
  );
}
