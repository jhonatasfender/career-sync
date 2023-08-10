/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from '../../app';
import CKEditorField from '../../components/CKEditorField';
import Input from '../../components/Input';
import ViewPDF from '../../components/ViewPDF';
import FormArray from './form-array';
import * as S from './styles';

export default function Form(): JSX.Element {
  const methods = useForm();
  const { register, handleSubmit, reset, control } = methods;

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const { data, isLoading, isError } = useQuery(
    ['careerPortfolioById', id],
    () => api.get(`/career-portfolio/${id}`)
  );

  const mutation = useMutation((formData) => {
    return api.put(`/career-portfolio/${id}`, formData);
  });

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
              <Input label="City" name="city" />
              <Input label="Portfolio Link" name="portfolioLink" />
            </S.FormCol>
            <S.FormCol>
              <Input label="Email" name="email" />
              <Input label="Country" name="country" />
              <Input label="GitHub Link" name="githubLink" />
            </S.FormCol>
          </S.FormRow>

          <FormArray
            name="languages"
            titleAdd="Add Language"
            titleRemove="Remove Language"
            control={control}
          >
            {({ controlForm, name, key }): JSX.Element => (
              <div key={key}>
                <input type="hidden" {...register(`${name}[${key}].id`)} />

                <CKEditorField
                  name={`${name}[${key}].presentation`}
                  label="Presentation"
                />

                <Input label="Lang" name={`${name}[${key}].lang`} />

                <FormArray
                  titleAdd="Add Experience"
                  titleRemove="Remove Experience"
                  name={`${name}[${key}].experiences`}
                  control={controlForm}
                >
                  {({ key: keyIndex, name }): JSX.Element => (
                    <div key={keyIndex}>
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

                          <Input
                            label="Start Date"
                            name={`${name}[${keyIndex}].startDate`}
                          />
                        </S.FormCol>
                        <S.FormCol>
                          <Input
                            label="Position"
                            name={`${name}[${keyIndex}].position`}
                          />
                          <Input
                            label="End Date"
                            name={`${name}[${keyIndex}].endDate`}
                          />
                        </S.FormCol>
                      </S.FormRow>

                      <CKEditorField
                        name={`${name}[${keyIndex}].description`}
                        label="Description"
                      />
                    </div>
                  )}
                </FormArray>

                <FormArray
                  titleAdd="Add Academic Experiences"
                  titleRemove="Remove Academic Experiences"
                  name={`${name}[${key}].academicExperiences`}
                  control={controlForm}
                >
                  {({ key: keyIndex, name }): JSX.Element => (
                    <div key={keyIndex}>
                      <input
                        type="hidden"
                        {...register(`${name}[${keyIndex}].id`)}
                      />

                      <div>
                        <label>Institution Name</label>
                        <input
                          type="text"
                          {...register(`${name}[${keyIndex}].institutionName`)}
                        />
                      </div>

                      <div>
                        <label>Course Name</label>
                        <input
                          type="text"
                          {...register(`${name}[${keyIndex}].courseName`)}
                        />
                      </div>

                      <div>
                        <label>Description</label>
                        <textarea
                          {...register(`${name}[${keyIndex}].description`)}
                        />
                      </div>
                    </div>
                  )}
                </FormArray>
              </div>
            )}
          </FormArray>

          <button type="submit">enviar</button>
        </S.ContainerForm>
      </FormProvider>

      <ViewPDF />
    </S.WrapperForm>
  );
}
