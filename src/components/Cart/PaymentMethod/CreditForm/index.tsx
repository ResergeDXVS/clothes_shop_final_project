import React, { Fragment, useState } from "react";
import { MethodAddButton, MethodCancel, MethodDiv, MethodForm, MethodFormBase } from "./styles";
import { FormMethodState } from "..";
import { createPaymentThunk } from "../../../../redux/slices/paymentMethodSlice";
import { useAppDispatch } from "../../../../redux/store/store";

type PaymentMethodProps = {
    visible: boolean;
    onClose: ()=>void;
    onAlert: ()=>void;
};



const CreditForm = ({ visible,onClose,onAlert }: PaymentMethodProps) => {
    
    const dispatch = useAppDispatch();
    const [form, setForm] = useState<FormMethodState>({
        card_number: "",
        expiration: "",
        cvc: "",
    });
    

    const clearAndClose = () => {
        setForm({
            card_number: "",
            expiration: "",
            cvc: "",
        })
        onClose();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "expiration") {
        let digits = newValue.replace(/\D/g, "");
        if (digits.length > 2) {
            digits = digits.slice(0, 2) + "/" + digits.slice(2);
        }
        newValue = digits;
        }

        setForm((prev) => ({ ...prev, [name]: newValue }));
    };

    const checkData = (type:string, data:string) => {
        const regexNumber = /^\d{16}$/;
        const regexExpired = /^\d{2}\/\d{2}$/;
        const regexCVC = /^\d{3}$/;
        if (data==="") return null;
        if(type==="number"){    
            if (!regexNumber.test(data)) return false;
            else return true;
        }else if(type==="expired"){
            if (!regexExpired.test(data)) return false;
            else return true;
        }else if(type==="cvc"){
            if (!regexCVC.test(data)) return false;
            else return true;
        }
        return null;
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await dispatch(createPaymentThunk(form));
        if (createPaymentThunk.fulfilled.match(result)) {
            onClose();
        } else if (createPaymentThunk.rejected.match(result)) {
            onAlert();
        }

    };



    return (
        <Fragment>
            <MethodFormBase 
                data-testid="form_credit"
                className={ visible ? `form--show`:``}>
                <MethodCancel
                    data-testid="form_credit_cancel"
                    onClick={()=>clearAndClose()}>
                    <i className="fi fi-rs-x"></i>
                </MethodCancel>
                <MethodForm onSubmit={handleSubmit}>
                    
                    
                    <MethodDiv 
                        $grid_name="number"
                        $show_data={checkData("number",form.card_number)}>
                        <label htmlFor="card_number">Número de tarjeta</label>
                        <input
                            id="card_number"
                            name="card_number"
                            type="text"
                            maxLength={16}
                            value={form.card_number}
                            onChange={handleChange}
                        />
                        <p>Favor de agregar una tarjeta válida</p>
                    </MethodDiv>

                    <MethodDiv 
                        $grid_name="expired"
                        $show_data={checkData("expired",form.expiration)}>
                        <label htmlFor="expiration">Expiración</label>
                        <input
                            id="expiration"
                            name="expiration"
                            type="text"
                            maxLength={5}
                            value={form.expiration}
                            onChange={handleChange}
                        />
                        <p>Favor de agregar una fecha valida</p>
                    </MethodDiv>

                    <MethodDiv 
                        $grid_name="cvc"
                        $show_data={checkData("cvc",form.cvc)}>
                        <label htmlFor="cvc">CVC</label>
                        <input
                            id="cvc"
                            name="cvc"
                            type="text"
                            maxLength={3}
                            value={form.cvc}
                            onChange={handleChange}
                        />
                        <p>Favor de agregar 3 dígitos</p>
                    </MethodDiv>

                    <MethodAddButton 
                        data-testid="form_credit_submit"
                        type="submit">
                        <i className="fi fi-rs-plus"></i>
                        <p>Agregar</p>
                    </MethodAddButton>
                </MethodForm>
            </MethodFormBase>
            
        </Fragment>
    );
};

export default CreditForm;