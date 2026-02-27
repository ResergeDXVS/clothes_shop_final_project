import React, { useState } from "react"
import { HeaderBase, HeaderIcons, HeaderLogo, HeaderOptions } from "./styles";
import HeaderLogin from "./HeaderLogin";
import { UserContainer } from "./HeaderLogin/styles";
import { useAppSelector } from "../../redux/store/store";
import { Link, useNavigate } from "react-router-dom";


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
                <Link to="/products?type=1">Consolas</Link>
                <Link to="/products?type=2">Juegos</Link>
                <Link to="/products?type=3">Controles</Link>
                <Link to="/products?type=4">Pases</Link>
                <Link to="/products?type=5">Accesorios</Link>
            </HeaderOptions>
            <HeaderIcons>
                <div id="icon-user" 
                    data-testid="icon_user"
                    onClick={() => setShowLogin(prev => !prev)}>
                    {
                        username===null ? 
                        <i className="fi fi-rs-user"></i> :
                        <h1 data-testid="user_login">{username?.name.charAt(0)}</h1>
                    }
                    
                    <UserContainer
                        data-testid="user_container"
                        className={showLogin ? "user--show" : ""}>
                        <HeaderLogin />
                    </UserContainer>
                </div>


                {
                    username!== null && (
                        <div
                            data-testid="bag" 
                            className="icon-bag" 
                            onClick={()=>navigate(`/cart/${username?.id}`)}>
                            <i className="fi fi-rs-shopping-bag"></i>
                        </div>
                    )
                }
                
            </HeaderIcons>
        </HeaderBase>

    );
}
export default Header;