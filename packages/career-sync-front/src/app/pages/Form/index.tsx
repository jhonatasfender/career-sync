/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from '../../app';
import CKEditorField from '../../components/CKEditorField';
import Input from '../../components/Input';
import ViewPDF from '../../components/ViewPDF';
import FormArray from './form-array';
import * as S from './styles';
import FormDatePicker from '../../components/FormDatePicker';

export default function Form(): JSX.Element {
  const methods = useForm();
  const { register, handleSubmit, reset, control } = methods;

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const [message, setMessage] = useState<string[]>([]);

  const { data, isLoading, isError } = useQuery(
    ['careerPortfolioById', id],
    () => api.get(`/career-portfolio/${id}`)
  );

  const mutation = useMutation(
    (formData) => api.put(`/career-portfolio/${id}`, formData),
    {
      onError: ({
        response: {
          data: { message },
        },
      }) => {
        setMessage(message);
      },
    }
  );

  useEffect(() => {
    data && reset(data.data);
  }, [data, reset]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    navigate('/');

    return <p>Error fetching data</p>;
  }

  const onSubmit = async (formData: any) => {
    mutation.mutate(formData);
  };

  return (
    <S.WrapperForm>
      <FormProvider {...methods}>
        <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('id')} />

          <S.FormRow>
            <S.FormCol>
              <Input label="User Name" name="username" />
              <Input label="Phone" name="phone" />
              <Input label="Portfolio Link" name="portfolioLink" />
            </S.FormCol>
            <S.FormCol>
              <Input label="Email" name="email" />
              <Input label="GitHub Link" name="githubLink" />
            </S.FormCol>
          </S.FormRow>

          <FormArray
            name="languages"
            titleAdd="Add Language"
            titleRemove="Remove Language"
            control={control}
            title="Professional Summary"
          >
            {({ controlForm, name, key }): JSX.Element => (
              <>
                <input type="hidden" {...register(`${name}[${key}].id`)} />

                <S.FormRow>
                  <S.FormCol>
                    <Input label="City" name={`${name}[${key}].city`} />
                    <Input label="Lang" name={`${name}[${key}].lang`} />
                  </S.FormCol>
                  <S.FormCol>
                    <Input label="Country" name={`${name}[${key}].country`} />
                  </S.FormCol>
                </S.FormRow>

                <CKEditorField
                  name={`${name}[${key}].presentation`}
                  label="Presentation"
                />

                <FormArray
                  titleAdd="Add Experience"
                  titleRemove="Remove Experience"
                  name={`${name}[${key}].experiences`}
                  control={controlForm}
                  title="Employment History"
                >
                  {({ key: keyIndex, name }): JSX.Element => (
                    <>
                      <input
                        type="hidden"
                        {...register(`${name}[${keyIndex}].id`)}
                      />
                      <S.FormRow>
                        <S.FormCol>
                          <Input
                            label="Company Name"
                            name={`${name}[${keyIndex}].companyName`}
                          />

                          <FormDatePicker
                            label="Start Date"
                            name={`${name}[${keyIndex}].startDate`}
                          />
                        </S.FormCol>
                        <S.FormCol>
                          <Input
                            label="Position"
                            name={`${name}[${keyIndex}].position`}
                          />

                          <FormDatePicker
                            label="End Date"
                            name={`${name}[${keyIndex}].endDate`}
                          />
                        </S.FormCol>
                      </S.FormRow>

                      <CKEditorField
                        name={`${name}[${keyIndex}].description`}
                        label="Description"
                      />
                    </>
                  )}
                </FormArray>

                <FormArray
                  titleAdd="Add Academic Experiences"
                  titleRemove="Remove Academic Experiences"
                  name={`${name}[${key}].academicExperiences`}
                  control={controlForm}
                  title="Education"
                >
                  {({ key: keyIndex, name }): JSX.Element => (
                    <>
                      <input
                        type="hidden"
                        {...register(`${name}[${keyIndex}].id`)}
                      />

                      <S.FormRow>
                        <S.FormCol>
                          <Input
                            label="Institution Name"
                            name={`${name}[${keyIndex}].institutionName`}
                          />
                        </S.FormCol>
                        <S.FormCol>
                          <Input
                            label="Course Name"
                            name={`${name}[${keyIndex}].courseName`}
                          />
                        </S.FormCol>
                      </S.FormRow>

                      <CKEditorField
                        name={`${name}[${keyIndex}].description`}
                        label="Presentation"
                      />
                    </>
                  )}
                </FormArray>
              </>
            )}
          </FormArray>

          <pre>{JSON.stringify(message, null, 2)}</pre>

          <button type="submit">enviar</button>
        </S.ContainerForm>
      </FormProvider>

      <ViewPDF />
    </S.WrapperForm>
  );
}
