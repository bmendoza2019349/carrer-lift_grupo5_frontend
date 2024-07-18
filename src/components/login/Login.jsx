import "./Login.css"
import { useState } from "react";
import { Input } from "../Input";
import {
    emailValidationMessage,
    validatePasswordMessage,
    validateEmail,
    validatePassword,
} from "../../shared/validators";
import { useLogin } from "../../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
    const {login, isLoading} = useLogin();
  
    const [formState, setFormState] = useState({
      email: {
        value: "",
        isValid: false,
        showError: false,
      },
      password: {
        value: "",
        isValid: false,
        showError: false,
      },
    });
  
    const handleInputValueChange = (value, field) => {
      setFormState((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          value,
        },
      }));
    };
  
    const handleInputValidationOnBlur = (value, field) => {
      let isValid = false;
      switch (field) {
        case "email":
          isValid = validateEmail(value);
          break;
        case "password":
          isValid = validatePassword(value);
          break;
        default:
          break;
      }
      setFormState((prevState) =>({
          ...prevState,
          [field]:{
              ...prevState[field],
              isValid,
              showError: !isValid
          }
      }))
    };
  
    const handleLogin = (event) => {
      event.preventDefault()
      login(formState.email.value, formState.password.value)
    }
  
    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid

    return (
        <div className="h-screen w-screen bg-gradient-to-r from-[#902ef2] to-[#4b94f2]">
            <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: '500px' }}>
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <div className="flex flex-col flex-1 justify-center mb-8">
                            <h1 className="text-4xl text-center font-thin">Bienvenido</h1>
                            <div className="w-full mt-4">
                                <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                                    <div className="flex flex-col mt-4">
                                        <Input
                                            field="email"
                                            label="Email"
                                            value={formState.email.value}
                                            onChangeHandler={handleInputValueChange}
                                            type="text"
                                            onBlurHandler={handleInputValidationOnBlur}
                                            showErrorMessage={formState.email.showError}
                                            validationMessage={emailValidationMessage}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <Input
                                            field="password"
                                            label="Password"
                                            value={formState.password.value}
                                            onChangeHandler={handleInputValueChange}
                                            type="password"
                                            onBlurHandler={handleInputValidationOnBlur}
                                            showErrorMessage={formState.password.showError}
                                            validationMessage={validatePasswordMessage}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-8">
                                        <button onClick={handleLogin} disabled={isSubmitButtonDisabled} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">
                                    <a className="no-underline hover:underline text-blue-dark text-xs" onClick={switchAuthHandler}>
                                        No tienes cuenta?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden md:block md:w-1/2 rounded-r-lg"
                        style={{
                            background: "url('https://play-lh.googleusercontent.com/wKwW77zj6Gd-llTDakdjSDnWUPKSMDGXhnZSXel3A3qQSiM1cbDvuspBpQk15tiT9ik')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
