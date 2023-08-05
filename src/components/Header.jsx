import { styled } from "styled-components"
import {Link} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { auth, signOut } = useAuth();
    const navigate = useNavigate();

    return(
        <HeaderSC>
            <TopMenu>
                <LeftOptions>
                    { auth ? <GreenP onClick={signOut}>Seja bem-vindo(a), {auth.name}!</GreenP> : <GreenP>  </GreenP>}
                </LeftOptions>
                <RightOptions>
                    { auth ? <p><Link to="/">Home</Link></p> : <GreenP><Link to="/signin">Entrar</Link></GreenP>}
                    { auth ? <p><Link to="/ranking">Ranking</Link></p> : <p><Link to="/signup">Cadastrar-se</Link></p> }
                    { auth ? <p onClick={() => {signOut(); navigate("/ranking")}}>Sair</p> : "" }
                </RightOptions>
            </TopMenu>
                <img src="logo.png"/>
        </HeaderSC>
    )
}


const RightOptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9C9C9C;
    p {
        padding: 0 15px;
    }
`;

const LeftOptions = styled.div`
    width: 400px;
`;

const TopMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const GreenP = styled.p`
    color: #5D9040;
`


const HeaderSC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 100px;
    img {
        margin-top: 25px;
    }
    a:-webkit-any-link {
    text-decoration: none;
    color: inherit;
  }
`;