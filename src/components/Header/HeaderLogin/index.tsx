import React, { Fragment } from "react";
import { LoginButton, LoginContainer, UserContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/store";
import { useDispatch } from "react-redux";
import { closeUser } from "../../../redux/slices/userSlice";

const HeaderLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const actualUser = useAppSelector(state=>state.user.actualUser);
    const closeSessionAction = () => {
        if (actualUser){
            dispatch(closeUser());
        }
    }


    const accessButtons = () => (
        <Fragment>
            <p>Para comprar en Game Dex</p>
            <LoginButton $login={true}
                onClick={()=>navigate("/user/login")}>
                Ingresar a cuenta
            </LoginButton>
            <p>O</p>
            <LoginButton $login={false}
                onClick={()=>navigate("/user/create")}>
                Crear Usuario
            </LoginButton>
        </Fragment>
    )

    const closeSession = () => (
        <Fragment>
            <p>
                Hola {actualUser?.name}
            </p>
            <LoginButton $login={true}
                onClick={()=>closeSessionAction()}>
                Cerrar Sesión
            </LoginButton>
        </Fragment>
    )

    const renderButtons = () => {
        if(!actualUser) return accessButtons();
        else return closeSession();
    }

    return(
        <LoginContainer>
            {renderButtons()}
        </LoginContainer>
    );
};

export default HeaderLogin;