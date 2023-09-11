
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ApiResponse, LoginResponse } from '@/types';
import { useRouter } from 'next/navigation';

interface myFormErrors {
  user?: { error: boolean; message: string };
  password?: { error: boolean; message: string };
}


const validateField = (name: string, value: string) => {
  switch (name) {
  case 'user':
    if (value.length < 3) {
      return {
        error: true,
        message: 'El usuario debe contener al menos 3 caracteres',
      };
    } else {
      return { error: false, message: '' };
    }
  case 'password':
    if (value.length < 8) {
      return {
        error: true,
        message: 'La contraseña debe contener al menos 8 caracteres',
      };
    } else {
      return { error: false, message: '' };
    }
  default:
    return { error: false, message: '' };
  }
};

const useLoginForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  const router = useRouter();
 

  const [formValues, setFormValues] = useState({
    user: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<myFormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValid) {
      console.log('Formulario válido');
      setIsLoading(true);
      

      try {
        const resp = await axios.post('/api/login', formValues);
        
        const data: ApiResponse = resp.data;
        
        if (data.succeeded) {

          setLoginErrors([]);
          const loginData: LoginResponse = data.data as LoginResponse;
          
          if (loginData != null) {

            localStorage.setItem('token', loginData.jwtToken);
         
            localStorage.setItem('user', JSON.stringify({
              id: loginData.id,
              userName: loginData.userName,
              email: loginData.email,
              roles: loginData.roles,
              clientId: loginData.clientId,
              isVerified: loginData.isVerified,
              jwtToken: loginData.jwtToken,
            }));

            //todo: use next auth router instead of localstorage auth
            router.push('/dashboard');
          }
        }

      } catch (error) {
        if (error instanceof AxiosError ) {
          
          const errorResponse = error.response?.data;
          console.log(errorResponse);
          
          if (errorResponse.Errors != null) {
            setLoginErrors(errorResponse.Errors);
            toast.error(errorResponse.Message);
          } else {
            setLoginErrors([errorResponse.Message]);
            toast.error('One or more validation errors ocurred');
          }
          
          
        }
      }


      setIsLoading(false);
    } else {
      setInputTouched(true);
    }
  };

  const setFormErrorsFunction = (name: string, value: string) => {
    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value),
    });
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputTouched(true);
    const { name, value } = e.target;
    setFormErrorsFunction(name, value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    setFormErrorsFunction(name, value);
  };

  useEffect(() => {
    if (inputTouched) {
      const userError = validateField('user', formValues.user);
      const passwordError = validateField('password', formValues.password);

      setFormErrors({
        user: userError,
        password: passwordError,
      });

      // Verificar si el formulario es válido
      const isValid = !userError && !passwordError;
      setFormValid(isValid);
    }
  }, [formValues.user, formValues.password, inputTouched]);

  useEffect(() => {
    if (formErrors.user?.error || formErrors.password?.error) {
      setFormValid(false);
    }

    if (
      formErrors.user?.error === false &&
      formErrors.password?.error === false
    ) {
      setFormValid(true);
    }
  }, [formErrors]);

  const handleRippleButtonClickAnimation = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    let x = e.clientX - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.offsetTop;

    let ripples = document.createElement('span');
    ripples.className = 'ripple-span';
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    e.currentTarget.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 500);
  };

  return {
    // properties
    formErrors,
    formValues,
    inputTouched,
    formValid,
    isLoading,
    loginErrors,
    // methods
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    handleRippleButtonClickAnimation,
  };
};

export default useLoginForm;
