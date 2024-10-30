import Logo from "../assets/images/LogoKuda.png"
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import ButtonProps from "./ButtonProps";
import Flag from "../assets/images/flag.webp"

const Header = () => {
    return ( 
        <Navigation>
            <LeftNav>
                <img src={Logo} alt="" />
                <div className="withIcons">
                    <p>Personal</p>
                    <IoMdArrowDropdown/>
                </div>
                <div className="withIcons">
                    <p>Business</p>
                    <IoMdArrowDropdown/>
                </div>
                <div className="withIcons">
                    <p>Company</p>
                    <IoMdArrowDropdown/>
                </div>
                <div className="withIcons">
                    <p>Help</p>
                    <IoMdArrowDropdown/>
                </div>
                
            </LeftNav>

            <RightNav>
                <p>Sign in</p>
                <ButtonProps Title="Join Kuda"/>
                <div id="flag">
                    <img src={Flag} alt="" />
                </div>
            </RightNav>

        </Navigation>
     );
}
 
export default Header;

const Navigation= styled.div`
 
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Mulish,sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #634488;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 100%;
`
const LeftNav = styled.div`
display: flex;
align-items: center;
height: 70px;
justify-content: space-between;
width: 500px;
margin-left: 50px;


img{
    width: 70px;
    margin-right: 30px;
}

.withIcons{
    display: flex;
    align-items: center;

    p{
        margin-right: 3px;
    }
   
}
`
const RightNav = styled.div`
margin-right: 50px;
display: flex;
align-items: center;
width: 250px;
justify-content: space-between;

#flag{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #b2dbca;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width:20px;
    }
}
`