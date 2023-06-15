import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from './app';
import FormArray from './form-array';

export default function Form(): JSX.Element {
  const methods = useForm();
  const { register, handleSubmit, reset, control, getValues } = methods;

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const { data, isLoading, isError } = useQuery(
    ['careerPortfolioById', id],
    () => api.get(`/career-portfolio/${id}`)
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

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('id')} />

        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" {...register('username')} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register('email')} />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" {...register('phone')} />
        </div>

        <div>
          <label htmlFor="githubLink">GitHub Link</label>
          <input type="text" id="githubLink" {...register('githubLink')} />
        </div>

        <div>
          <label htmlFor="portfolioLink">Portfolio Link</label>
          <input
            type="text"
            id="portfolioLink"
            {...register('portfolioLink')}
          />
        </div>

        <FormArray
          name="languages"
          titleAdd="Add Language"
          titleRemove="Remove Language"
          control={control}
        >
          {({ controlForm, name, key }): JSX.Element => (
            <div key={key}>
              <input type="hidden" {...register(`${name}[${key}].id`)} />

              <div>
                <label>Presentation</label>
                <textarea {...register(`${name}[${key}].presentation`)} />
              </div>

              <div>
                <label>Lang</label>
                <input type="text" {...register(`${name}[${key}].lang`)} />
              </div>

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

                    <div>
                      <label>Company Name</label>
                      <input
                        type="text"
                        {...register(`${name}[${keyIndex}].companyName`)}
                      />
                    </div>

                    <div>
                      <label>Position</label>
                      <input
                        type="text"
                        {...register(`${name}[${keyIndex}].position`)}
                      />
                    </div>

                    <div>
                      <label>Start Date</label>
                      <input
                        type="text"
                        {...register(`${name}[${keyIndex}].startDate`)}
                      />
                    </div>

                    <div>
                      <label>End Date</label>
                      <input
                        type="text"
                        {...register(`${name}[${keyIndex}].endDate`)}
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

        <pre>{JSON.stringify(getValues(), null, 2)}</pre>
        <button type="submit">enviar</button>
      </form>
    </FormProvider>
  );
}
