import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { UserContainerForm, UserCreateTitle, UserFormButtonSubmit, UserFormFeedback, UserFormFieldset, UserFormInput, UserFormLabel, UserFormLine } from "../styles";
import {  createUserThunk } from "../../../redux/slices/userSlice";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import Alert from "../../Alert";

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
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState<boolean|null>(null);
    const dispatch = useAppDispatch();
    const actualUser = useAppSelector(state => state.user.actualUser);
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

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const result = await dispatch(createUserThunk(form));
        if (createUserThunk.fulfilled.match(result)) {
            console.log("Usuario creado:", result.payload);
            navigate("/");
        } else {
            const alert = document.getElementById("alert_product")
            alert?.classList.toggle("alert--show");
        }
    };


    const showAlert = () => {console.log("dadsada");
        const alert = document.getElementById("alert_product")
        alert?.classList.toggle("alert--show");
        
    }
    
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
                            $invalid={submitted && !form.name}
                            $capitalize={true}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.name}
                            $capitalize={null}>
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
                            $invalid={submitted && !form.paternal_surname}
                            $capitalize={true}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.paternal_surname}
                            $capitalize={null}>
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
                            $invalid={null}
                            $capitalize={true}/>
                    </UserFormLine>
                    <UserFormLine>
                        <UserFormLabel>Fecha de Nacimiento</UserFormLabel>
                        <UserFormInput
                            id="datebirth"
                            name="datebirth"
                            type="date"
                            value={form.datebirth}
                            onChange={handleChange}
                            $invalid={submitted && !form.datebirth}
                            $capitalize={true}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.datebirth}
                            $capitalize={null}>
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
                            $invalid={submitted && !form.rfc}
                            $capitalize={true}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.rfc}
                            $capitalize={null}>
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
                            $invalid={submitted && !form.email}
                            $capitalize={false}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.email}
                            $capitalize={null}>
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
                            $invalid={submitted && !form.password}
                            $capitalize={false}/>
                        <UserFormFeedback
                            $invalid={submitted && !form.password}
                            $capitalize={null}>
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
            <Alert
                id="alert_product"
                title={"Cuenta ya existente"} 
                message={"El correo ya ha sido utilizado. Favor de ingresar."}
                action={showAlert}/>
        </Fragment>
    );
}
export default UserCreate;
