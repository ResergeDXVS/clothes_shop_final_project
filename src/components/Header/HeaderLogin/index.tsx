import React from "react";
import { LoginButton, LoginContainer, UserContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
    const navigate = useNavigate();
    return(
        <LoginContainer>
            <p>Para comprar en Game Dex</p>
            <LoginButton $login={true}
                onClick={()=>navigate("/user/create")}>
                Ingresar a cuenta
            </LoginButton>
            <p>O</p>
            <LoginButton $login={false}
                onClick={()=>navigate("/user/create")}>
                Crear Usuario
            </LoginButton>
        </LoginContainer>
    );
};

export default HeaderLogin;