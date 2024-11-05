import Logo from "../assets/images/LogoKuda.png"
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import ButtonProps from "./ButtonProps";
import Flag from "../assets/images/flag.webp"
import { RxHamburgerMenu } from "react-icons/rx";
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
                <Buttons>
                    <p>Sign in</p>
                    <ButtonProps Title="Join Kuda"/>
                </Buttons>
                <img src={Flag} alt=""  id="flag"/>
                <Hamburger><RxHamburgerMenu/></Hamburger>
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
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index:2;
    /* max-width: 1440px; */
`
const LeftNav = styled.div`
display: flex;
align-items: center;
height: 70px;
justify-content: space-between;
width: 500px;
margin-left: 20px;
 

img{
    width: 70px;
    /* margin-right: 30px; */
}

.withIcons{
    display: flex;
    align-items: center;

      
    @media (max-width:550px){
        display: none;
    }
 
    p{
        margin-right: 3px;
    }
   
}
`
const RightNav = styled.div`
/* margin-right: 200px; */
display: flex;
align-items: center;
width: 300px;
justify-content: space-between;
/* border: 1px solid; */

  
@media (max-width:750px){
        /* border: 1px solid; */
        width: 100px;
        margin-right: 20px;
    }

#flag{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #b2dbca;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    img{
        width:20px;
    }
}

`
const Hamburger = styled.image`
    font-size: 25px;
    margin-right: 20px;
    display: none;
      
    @media (max-width:750px){
        display: contents;
    }

`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    /* margin-left: 100px; */
    /* border: 1px solid; */
    justify-content: space-between;
    width: 200px;
    
    @media (max-width:750px){
        display: none;
    }
`