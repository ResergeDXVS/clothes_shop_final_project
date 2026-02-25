import React, { Fragment, useState } from "react";
import { CartContainer } from "../styles";
import { PaymentMethodAddButton, PaymentMethodDecoration, PaymentMethodForm, PaymentMethodInput, PaymentMethodLabel, PaymentMethodPayment, PaymentMethodTitle } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";


export type FormMethodState = {
    card_number: number,
    expiration: number,
    cvc: number,
};

const PaymentMethod = () =>{
    const [showForm, setShowForm] = useState(false);
    const param = useParams<{id:string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const payments = useAppSelector(state=>state.payments.payment);


    const MethodView = () => (
        <>
            <CartContainer>
                <PaymentMethodDecoration>
                    <PaymentMethodTitle>Asignar Método de pago</PaymentMethodTitle>
                    <PaymentMethodForm>
                        {
                            payments && payments.map((card)=>{
                                const {id,card_number} = card;
                                return(
                                    <>
                                        <PaymentMethodInput
                                            type="radio"
                                            id={`${id}`}
                                            name={`card_${card.id}`}
                                            value={card_number}
                                        />
                                        <PaymentMethodLabel 
                                            htmlFor={`${id}`}/>
                                    </>
                                );
                            })
                        }
                        <PaymentMethodAddButton
                            onClick={()=>setShowForm(false)}>
                                <i className="fi fi-rs-plus"></i>
                                <p>Agregar método de pago</p>
                        </PaymentMethodAddButton>
                    </PaymentMethodForm>
                    <PaymentMethodPayment>
                        <button
                            onClick={()=>{}}>
                            Pagar
                        </button>
                    </PaymentMethodPayment>
                </PaymentMethodDecoration>
            </CartContainer>
        </>
    );

    const render = () =>{
        return MethodView();

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
            {render()}
        </Fragment>
        
    );
}

export default PaymentMethod;