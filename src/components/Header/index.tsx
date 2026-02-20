import React, { useState } from "react"
import { HeaderBase, HeaderIcons, HeaderLogo, HeaderOptions, HeaderUserContainer } from "./styles";
import HeaderSearch from "./HeaderSearch";
import HeaderLogin from "./HeaderLogin";
import { UserContainer } from "./HeaderLogin/styles";


const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    
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
                <div id="icon-user" 
                    onClick={() => setShowLogin(prev => !prev)}>
                    <i className="fi fi-rs-user"></i>
                    <UserContainer className={showLogin ? "user--show" : ""}>
                        <HeaderLogin />
                    </UserContainer>
                </div>



                <div className="icon-bag">
                    <i className="fi fi-rs-shopping-bag"></i>
                </div>
            </HeaderIcons>
            <HeaderSearch/>
        </HeaderBase>

    );
}
export default Header;