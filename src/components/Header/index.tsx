import React from "react"
import { HeaderBase, HeaderIcons, HeaderLogo, HeaderOptions } from "./styles";
import HeaderSearch from "./HeaderSearch";


const Header = () => {
    return(
        <HeaderBase>
            <HeaderLogo>
                <img src="/img/GAME-DEX-LOGO.png"
                alt="GAMES DEX"/>
                <p>GAME DEX</p>
            </HeaderLogo>
            <HeaderOptions>
                <a>Consolas</a>
                <a>Juegos</a>
                <a>Controles</a>
                <a>Pases</a>
                <a>Accesorios</a>
            </HeaderOptions>
            <HeaderIcons>
                <div>
                    <i className="fi fi-rs-user"></i>
                </div>
                <div>
                    <i className="fi fi-rs-shopping-bag"></i>
                </div>
            </HeaderIcons>
            <HeaderSearch/>
        </HeaderBase>

    );
}
export default Header;