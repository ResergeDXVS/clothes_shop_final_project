import React from "react";
import { useAppSelector } from "../../../redux/store/store";
import { CompaniesGrid, CompanyElement } from "./styles";
const Companies = () => {
    const companies = useAppSelector(state=>state.data.companies);
    return(
        <CompaniesGrid
            aria-label="Sección de compañias de videojuegos disponibles en tienda">
            {
                companies && (
                    companies.map(data => {
                        const { id,name,image } = data;
                        return(
                            <CompanyElement key={id}>
                                <img 
                                    src={image}
                                    alt={`Logo de la compañia ${name}`}/>
                            </CompanyElement>
                        );
                    })
                )
            }
        </CompaniesGrid>
    );
}
export default Companies;