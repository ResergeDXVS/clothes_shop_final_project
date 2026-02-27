import React from "react";
import { AlertButton, AlertContainer, AlertMessage, AlertTitle } from "./styles";

type AlertProps = {
    id:string,
    title:string,
    message:string,
    action: () => void;
    visible: boolean;

}


const Alert = ({id,title,message,action,visible}:AlertProps) => {
    if (!visible) return null;

    return(
        <AlertContainer id={id} className="alert alert--show">
            <AlertTitle>
                {title}
            </AlertTitle>
            <AlertMessage>
                {message}
            </AlertMessage>
            <AlertButton
                data-testid="alert_button"
                onClick={action}>
                Entendido
            </AlertButton>
        </AlertContainer>
    );
}

export default Alert;