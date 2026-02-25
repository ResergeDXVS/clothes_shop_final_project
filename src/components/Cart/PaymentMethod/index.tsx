import React, { Fragment, useState } from "react";
import { CartContainer } from "../styles";
import { PaymentMethodAddButton, PaymentMethodDecoration, PaymentMethodDiv, PaymentMethodForm, PaymentMethodInput, PaymentMethodLabel, PaymentMethodPayment, PaymentMethodTitle } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { UserHeader, UserHeaderLogo } from "../../Header/HeaderMin/styles";
import CreditForm from "./CreditForm";
import Alert from "../../Alert";
import { addMethod } from "../../../redux/slices/cartSlice";


export type FormMethodState = {
    card_number: string,
    expiration: string,
    cvc: string,
};

const PaymentMethod = () =>{
    const [showAlertError, setShowAlertError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedCard, setSelectedCard] = useState<number>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const payments = useAppSelector(state=>state.payments.payment);
    const actualUser = useAppSelector(state=>state.user.actualUser);
    const cards = payments.filter(state=>state.user_id === actualUser?.id);
    
    const handlePay = () => {
        if (selectedCard) {
            dispatch(addMethod({ 
                user: actualUser, 
                payment_id: selectedCard
            }));

            navigate("/check/");
        } else {
            setShowAlert(true);
        }
    };

    const MethodView = () => (
        <CartContainer>
            <PaymentMethodDecoration>
                <PaymentMethodTitle>Asignar Método de pago</PaymentMethodTitle>
                <PaymentMethodForm>
                    {cards && cards.map((card)=>(
                        <PaymentMethodDiv key={card.id}>
                            <PaymentMethodInput
                                type="radio"
                                id={`${card.id}`}
                                name="payment_card"
                                value={card.card_number}
                                onChange={(e)=>setSelectedCard(Number(e.target.id))}
                            />
                            <PaymentMethodLabel htmlFor={`${card.id}`}>
                                {card.card_number.slice(-4).padStart(card.card_number.length, "*")}
                            </PaymentMethodLabel>
                        </PaymentMethodDiv>
                    ))}
                    <PaymentMethodAddButton onClick={()=>setShowForm(true)}>
                        <i className="fi fi-rs-plus"></i>
                        <p>Agregar método de pago</p>
                    </PaymentMethodAddButton>
                </PaymentMethodForm>
                <PaymentMethodPayment>
                    <button type="button" onClick={handlePay}>
                        Pagar
                    </button>
                </PaymentMethodPayment>
            </PaymentMethodDecoration>
        </CartContainer>
    );

    return(
        <Fragment>
            <UserHeader>
                <UserHeaderLogo>
                    <img src="/img/GAME-DEX-LOGO.png" alt="GAMES DEX"/>
                    <p>GAME DEX</p>
                </UserHeaderLogo>
            </UserHeader>
            {MethodView()}
            <CreditForm 
                visible={showForm}
                onClose={()=>setShowForm(false)}
                onAlert={()=>setShowAlert(true)}
            />
            <Alert
                id="alert_product"
                title={"Tarjeta inválida"} 
                message={"Debes asignar una tarjeta nueva y con los datos correctos."}
                action={() => setShowAlertError(false)}
                visible={showAlertError}/>
            <Alert
                id="alert_product"
                title={"Tarjeta no seleccionada"} 
                message={"Debes seleccionar una tarjeta."}
                action={() => setShowAlert(false)}
                visible={showAlert}/>
        </Fragment>
    );
};



export default PaymentMethod;