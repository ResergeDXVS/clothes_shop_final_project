import React, { useState } from "react"
import { HeaderBase, HeaderIcons, HeaderLogo, HeaderOptions, HeaderUserContainer } from "./styles";
import HeaderSearch from "./HeaderSearch";
import HeaderLogin from "./HeaderLogin";
import { UserContainer } from "./HeaderLogin/styles";
import { loginUserText } from "../../redux/slices/userSlice";
import { useAppSelector } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const username = useAppSelector( state => state.user.actualUser );
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
                    {
                        username===null ? 
                        <i className="fi fi-rs-user"></i> :
                        <h1>{username?.name.charAt(0)}</h1>
                    }
                    
                    <UserContainer className={showLogin ? "user--show" : ""}>
                        <HeaderLogin />
                    </UserContainer>
                </div>



                <div className="icon-bag" 
                    onClick={()=>navigate(`/cart/${username?.id}`)}>
                    <i className="fi fi-rs-shopping-bag"></i>
                </div>
            </HeaderIcons>
            <HeaderSearch/>
        </HeaderBase>

    );
}
export default Header;