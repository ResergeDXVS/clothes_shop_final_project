import React from "react";
import { HeaderSearchButton, HeaderSearchContainer, HeaderSearchInput } from "./styles";

const HeaderSearch = () => {
    return(
        <HeaderSearchContainer>
            <HeaderSearchInput
                type="text"
                name="search"
                placeholder="Buscar artículo"
                />
            <HeaderSearchButton
                type="submit">
                <i className="fi fi-rs-search"></i>
            </HeaderSearchButton>
        </HeaderSearchContainer>
    );
}

export default HeaderSearch;
