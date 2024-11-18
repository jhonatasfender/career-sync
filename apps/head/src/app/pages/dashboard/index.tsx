import axios from 'axios';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<string | null>(null);

  const {
    register: registerUserForm,
    handleSubmit: handleSubmitUserForm,
    reset: resetUserForm,
  } = useForm({
    defaultValues: {
      email: 'jhonatas.fender@gmail.com',
      password: 'Password@123',
    },
  });

  const {
    register: registerExperienceForm,
    handleSubmit: handleSubmitExperienceForm,
    control,
    reset: resetExperienceForm,
  } = useForm({
    defaultValues: {
      experiences: [
        {
          companyName: 'BLUECYBER Seguros',
          jobTitle: 'Desenvolvedor Fullstack Sênior',
          description:
            'Na Bluecyber, lidero a arquitetura dos projetos em JavaScript e C#, garantindo a integração e eficiência das soluções desenvolvidas. No backend, utilizo .NET Core, Entity Framework (Code First), Web API e PostgreSQL, implementando conceitos avançados de microsserviços. Utilizo NestJS para a camada de BFF (Backend for Frontend), assegurando uma comunicação eficiente e segura entre os serviços. No front-end, aplico Next.js para otimização de SEO e React para a construção de interfaces dinâmicas e responsivas. Para gerenciamento de monorepos, utilizo NX, facilitando a organização e manutenção do código.',
          startDate: '2024-03-01',
          endDate: null,
        },
        {
          companyName: 'NTT DATA Brasil',
          jobTitle: 'Customer Service Specialist (CSS)',
          description:
            'Participei de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e Droga Raia. Trabalhei com React no desenvolvimento de aplicações, aplicando os princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.',
          startDate: '2023-07-01',
          endDate: '2024-09-01',
        },
        {
          companyName: 'GS3 Tecnologia',
          jobTitle: 'Desenvolvedor Flutter',
          description:
            'Contribuí para a transição do aplicativo de cartão de crédito do BRB de Ionic para Flutter. Essa experiência temporária me permitiu aprofundar meus conhecimentos em Flutter e entregar um produto robusto.',
          startDate: '2023-12-01',
          endDate: '2024-03-01',
        },
        {
          companyName: 'GS3 Tecnologia',
          jobTitle: 'Desenvolvedor Frontend',
          description:
            'Trabalhei na arquitetura de Micro Frontends utilizando Module Federation do Webpack em projetos Angular (versões 12, 13 e 14).',
          startDate: '2022-06-01',
          endDate: '2023-05-01',
        },
        {
          companyName: 'Pixeon',
          jobTitle: 'Analista de Sistemas',
          description:
            'Liderei e desenvolvi projetos de destaque, como o Xviewer, um visualizador web de exames de raio-X. Utilizei React, Styled Components, Java, Spring Boot e tecnologias como NX, React + RxJS e CBOR para comunicação eficiente. Adquiri experiência em BDD com Python.',
          startDate: '2021-02-01',
          endDate: '2023-07-01',
        },
        {
          companyName: 'Capgemini Brasília',
          jobTitle: 'Analista de Sistemas Pleno',
          description:
            'Desenvolvi novas funcionalidades utilizando Java (Kumuluz, Quarkus), Node.js e React. Utilizei ferramentas DevOps como Kubernetes, Docker, Jenkins, e ArgoCD, além de ferramentas de monitoramento como InfluxDB, Prometheus e Grafana.',
          startDate: '2020-03-01',
          endDate: '2021-02-01',
        },
        {
          companyName: 'SONDA',
          jobTitle: 'Desenvolvedor SW 4',
          description:
            'Desenvolvi novas funcionalidades e mantive sistemas legados utilizando Java, Angular (6, 7, 9), PHP, Laravel e Drupal 8.',
          startDate: '2019-11-01',
          endDate: '2020-03-01',
        },
        {
          companyName: 'CONNECT DF',
          jobTitle: 'Desenvolvedor Java',
          description:
            'Prestei serviços para o SEBRAE, desenvolvendo sistemas com Java Spring, Angular 8, ReactJS e ferramentas de integração contínua como Docker, Jenkins e Rancher.',
          startDate: '2019-08-01',
          endDate: '2019-11-01',
        },
        {
          companyName: 'Faros Educacional / IComunicação',
          jobTitle: 'Desenvolvedor Pleno',
          description:
            'Desenvolvi sistemas utilizando C# (SGUS), Ruby (Redmine), Angular V2+, Node.js + Ionic, PHP (Drupal 7 e 8, Moodle), e ExtJS. Trabalhei em projetos variados, incluindo trilhas de atendimento e sistemas de transparência.',
          startDate: '2018-02-01',
          endDate: '2019-08-01',
        },
        {
          companyName: 'Output - Pax Vida',
          jobTitle: 'Desenvolvedor AOSP (Android Open Source Project)',
          description:
            'Iniciei o projeto Android e alterei o template na camada HIDL (HAL Interface Design Language).',
          startDate: '2019-01-01',
          endDate: '2019-05-01',
        },
        {
          companyName: 'Insert Web',
          jobTitle: 'Desenvolvedor Web',
          description: 'Desenvolvi sistemas com PHP (CodeIgniter) e Ionic.',
          startDate: '2017-05-01',
          endDate: '2018-02-01',
        },
        {
          companyName: 'Polisys Informática',
          jobTitle: 'Programador Java Trainee',
          description: 'Desenvolvi sistemas com Spring e AngularJS.',
          startDate: '2017-08-01',
          endDate: '2017-10-01',
        },
        {
          companyName: 'CNM - Confederação Nacional de Municípios',
          jobTitle: 'Programador PHP',
          description:
            'Desenvolvi sistemas com CodeIgniter, Laravel e Angular 2+, e aplicativos híbridos com Ionic. Elaborei apresentações de geoprocessamento com D3.js.',
          startDate: '2016-11-01',
          endDate: '2017-08-01',
        },
        {
          companyName: 'Micromed Biotecnologia LTDA',
          jobTitle: 'Programador PHP',
          description:
            'Atualizei sistemas de intranet de Access para PHP (Phalcon 2.0) e integrei serviços AdvPL do Protheus.',
          startDate: '2015-05-01',
          endDate: '2016-11-01',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  });

  const registerUserMutation = useMutation(
    (data) =>
      axios.post('http://localhost:5000/api/Account/register', data, {
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
        },
      }),
    {
      onSuccess: (response) => {
        if (response.data.success) {
          setUserId(response.data.user.id);
          resetUserForm();
        }
      },
    },
  );

  const saveExperiencesMutation = useMutation(
    (data: any) => {
      const requests = data.map((exp: any) =>
        axios.post(`http://localhost:5000/api/experiences`, exp, {
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      );
      return Promise.all(requests);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('experiences');
        resetExperienceForm();
      },
    },
  );

  const onSubmitUserForm = async (formData: any) => {
    await registerUserMutation.mutateAsync(formData);
  };

  const onSubmitExperienceForm = async (formData: any) => {
    if (userId) {
      const experiencesWithUserId = formData.experiences.map((exp: any) => ({
        ...exp,
        userId,
      }));
      saveExperiencesMutation.mutate(experiencesWithUserId);
    } else {
      alert('Please register the user first.');
    }
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmitUserForm(onSubmitUserForm)}>
        <div>
          <label>Email</label>
          <input type="email" {...registerUserForm('email')} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...registerUserForm('password')} required />
        </div>
        <button type="submit">Register User</button>
      </form>

      {userId && (
        <>
          <h2>Work Experiences Form</h2>
          <form onSubmit={handleSubmitExperienceForm(onSubmitExperienceForm)}>
            {fields.map((field, index) => (
              <div key={field.id}>
                <div>
                  <label>Company Name</label>
                  <input
                    type="text"
                    {...registerExperienceForm(
                      `experiences.${index}.companyName`,
                    )}
                    required
                  />
                </div>
                <div>
                  <label>Job Title</label>
                  <input
                    type="text"
                    {...registerExperienceForm(`experiences.${index}.jobTitle`)}
                    required
                  />
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    {...registerExperienceForm(
                      `experiences.${index}.description`,
                    )}
                    required
                  />
                </div>
                <div>
                  <label>Start Date</label>
                  <input
                    type="date"
                    {...registerExperienceForm(
                      `experiences.${index}.startDate`,
                    )}
                    required
                  />
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    type="date"
                    {...registerExperienceForm(`experiences.${index}.endDate`)}
                  />
                </div>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                append({
                  companyName: '',
                  jobTitle: '',
                  description: '',
                  startDate: '',
                  endDate: '',
                })
              }
            >
              Add Experience
            </button>
            <button type="submit">Save Experiences</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Dashboard;
