import React, { useState } from "react";
import { Fragment } from "react";
import { UserContainerForm, UserCreateTitle, UserFormButtonSubmit, UserFormFeedback, UserFormFieldset, UserFormInput, UserFormLabel, UserFormLine } from "../styles";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/slices/userSlice";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";

export type FormState = {
    name: string,
    paternal_surname: string,
    maternal_surname: string,
    rfc: string,
    datebirth: string,
    email: string,
    password: string,
};

const UserCreate = () => {
    const [submitted, setSubmitted] = useState<boolean|null>(null);
    const dispatch = useDispatch();
    const [form, setForm] = useState<FormState>({
        name: "",
        paternal_surname: "",
        maternal_surname: "",
        rfc: "",
        datebirth: "",
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name ||
            !form.paternal_surname ||
            !form.rfc ||
            !form.datebirth ||
            !form.email ||
            !form.password) {
                setSubmitted(true);
            return;
        }
        dispatch(createUser(form));
        setForm({
            name: "",
            paternal_surname: "",
            maternal_surname: "",
            rfc: "",
            datebirth: "",
            email: "",
            password: "",
        });
        setSubmitted(null);
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
                <UserCreateTitle>Crea tu cuenta para comprar</UserCreateTitle>
                <UserFormFieldset>
                    <UserFormLine>
                        <UserFormLabel>Nombre(s)</UserFormLabel>
                        <UserFormInput
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            $invalid={submitted && !form.name}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.name}>
                            Ingresa tu nombre
                        </UserFormFeedback>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>Apellido Paterno</UserFormLabel>
                        <UserFormInput
                            id="paternal_surname"
                            name="paternal_surname"
                            type="text"
                            value={form.paternal_surname}
                            onChange={handleChange}
                            $invalid={submitted && !form.paternal_surname}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.paternal_surname}>
                            Ingresa tu apellido paterno
                        </UserFormFeedback>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>Apellido Materno</UserFormLabel>
                        <UserFormInput
                            id="maternal_surname"
                            name="maternal_surname"
                            type="text"
                            value={form.maternal_surname}
                            onChange={handleChange}
                            $invalid={null}/>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>Fecha de Nacimiento</UserFormLabel>
                        <UserFormInput
                            id="datetime"
                            name="datetime"
                            type="datetime-local"
                            value={form.datebirth}
                            onChange={handleChange}
                            $invalid={submitted && !form.datebirth}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.datebirth}>
                            Debes ser mayor de 18 años
                        </UserFormFeedback>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>RFC (Para aduana y facturación)</UserFormLabel>
                        <UserFormInput
                            id="rfc"
                            name="rfc"
                            type="text"
                            value={form.rfc}
                            onChange={handleChange}
                            $invalid={submitted && !form.rfc}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.rfc}>
                            Ingresa tu RFC válido
                        </UserFormFeedback>
                    </UserFormLine>
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
                            value="Crear Cuenta"/>
                    </UserFormLine>
                </UserFormFieldset>
            </UserContainerForm>
        </Fragment>
    );
}
export default UserCreate;
