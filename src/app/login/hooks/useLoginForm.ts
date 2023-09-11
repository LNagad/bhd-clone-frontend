import { useEffect, useState } from 'react';


interface myFormErrors {
    user?: { error: boolean; message: string };
    password?: { error: boolean; message: string };
  }
  

  
const validateField = (name: string, value: string) => {
  switch (name) {
  case 'user':
    if (value.length < 3) {
      return { error: true, message: 'El usuario debe contener al menos 3 caracteres' };
    } else {
      return { error: false, message: '' };
    }
  case 'password':
    if (value.length < 8) {
      return { error: true, message: 'La contraseña debe contener al menos 8 caracteres' };
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
    
  const [formValues, setFormValues] = useState({
    user: '',
    password: '',
  });
  
  const [formErrors, setFormErrors] = useState<myFormErrors>({});
    


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValid) {
      console.log('Formulario válido');
      setIsLoading(true);
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
      
    if (formErrors.user?.error === false && formErrors.password?.error === false) {
      setFormValid(true);
    }
  }, [formErrors]);
    
  
  const handleRippleButtonClickAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    // methods
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    handleRippleButtonClickAnimation,
  };
};

export default useLoginForm;