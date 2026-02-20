import React, { useState } from "react";
import { Fragment } from "react";
import { UserContainerForm, UserCreateTitle, UserFormButtonSubmit, UserFormFeedback, UserFormFieldset, UserFormInput, UserFormLabel, UserFormLine } from "../styles";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/userSlice";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";

export type LoginState = {
    email: string,
    password: string,
};

const UserLogin = () => {
    const [submitted, setSubmitted] = useState<boolean|null>(null);
    const dispatch = useDispatch();
    const [form, setForm] = useState<LoginState>({
        email:"",
        password:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.email ||
            !form.password) {
                setSubmitted(true);
            return;
        }
        dispatch(loginUser(form));
    };

    return(
        <Fragment>
            <UserHeader>
                <UserHeaderLogo>
                    <img src="/img/GAME-DEX-LOGO.png"
                    alt="GAMES DEX"/>
                    <p>GAME DEX</p>
                </UserHeaderLogo>
            </UserHeader>
            <UserContainerForm onSubmit={handleSubmit}>
                <UserCreateTitle>Ingresa a tu cuenta</UserCreateTitle>
                <UserFormFieldset>
                    <UserFormLine>
                        <UserFormLabel>Correo Electrónico</UserFormLabel>
                        <UserFormInput
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            $invalid={submitted && !form.email}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.email}>
                            Ingresa un correo válido
                        </UserFormFeedback>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>Contraseña</UserFormLabel>
                        <UserFormInput
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            $invalid={submitted && !form.password}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.password}>
                            Ingresa una contraseña minimo de 8 dígitos
                        </UserFormFeedback>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormButtonSubmit 
                            id="submit"
                            type="submit"
                            value="Ingresar"/>
                    </UserFormLine>
                </UserFormFieldset>
            </UserContainerForm>
        </Fragment>
    );
}
export default UserLogin;