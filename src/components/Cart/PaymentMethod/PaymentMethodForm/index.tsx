import React from "react";
import { MethodFormBase } from "./styles";

type PaymentMethodProps = {
    visible:boolean;
}

const PaymentMethodForm = ({visible}:PaymentMethodProps) => {
    if (!visible) return null;
    return(
        <MethodFormBase className="method--show">
            
        </MethodFormBase>
    );
}
export default PaymentMethodForm;