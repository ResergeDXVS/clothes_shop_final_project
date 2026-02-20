import React from "react";
import { AlertButton, AlertContainer, AlertMessage, AlertTitle } from "./styles";

type AlertProps = {
    id:string,
    title:string,
    message:string,
    action:any,
}


const Alert = ({id,title,message,action}:AlertProps) => {
    return(
        <AlertContainer id={id}>
            <AlertTitle>
                {title}
            </AlertTitle>
            <AlertMessage>
                {message}
            </AlertMessage>
            <AlertButton
                onClick={action}>
                Entendido
            </AlertButton>
        </AlertContainer>
    );
}

export default Alert;