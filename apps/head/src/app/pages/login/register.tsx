import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export default function Register() {
  const { register: registerUserForm, handleSubmit: handleSubmitUserForm } =
    useForm({
      defaultValues: {
        email: 'jhonatas.fender@gmail.com',
        password: 'Password@123',
      },
    });

  const onSubmitUserForm = async (formData: any) => {
    await registerUserMutation.mutateAsync(formData);
  };

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
          debugger;
          // resetUserForm();
          // redirect
        }
      },
    },
  );

  return (
    <>
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
        <button type="submit">login User</button>
      </form>
    </>
  );
}
