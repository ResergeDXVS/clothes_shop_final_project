import React from "react";
import { useAppSelector } from "../../../redux/store/store";
import { CompaniesGrid, CompanyElement } from "./styles";
const Companies = () => {
    const companies = useAppSelector(state=>state.data.companies);
    return(
        <CompaniesGrid>
            {
                companies && (
                    companies.map(data => {
                        const { id,name,image } = data;
                        return(
                            <CompanyElement key={id}>
                                <img 
                                    src={image}
                                    alt={name}/>
                            </CompanyElement>
                        );
                    })
                )
            }
        </CompaniesGrid>
    );
}
export default Companies;