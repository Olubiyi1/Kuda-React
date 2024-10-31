import styled from "styled-components";
import HeroImg from "../assets/images/HeroImg.png"
import ContentButtonProps from "../Components/ContentButtonProps";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import CbnLogo from "../assets/images/cbn.webp"

const Hero = () => {
    return ( 
        <Section>
            <LeftHero>
                <h1 id="header">The money app for  <br />Africans.</h1>
                <p id="desc">Make free transfers, enjoy cashless  <br />payment options and earn interest on <br /> your savings with Kuda.</p>
                <div className="buttons">
                    <ContentButtonProps Image={<FaApple/>} Step="Download on the" AppName="App Store"/>
                    <ContentButtonProps Image={<IoLogoGooglePlaystore/>} Step="Get it on" AppName="Google Play"/> <br />
                </div>
                <div className="HeroFooter">
                    <small id="cbn">Fully Lincensed by the CBN <img src={CbnLogo} alt="" id="cbnLogo"/></small>
                    <small id="ndic">Deposits Insured by <span>NDIC</span></small>
                </div>
                
               
            </LeftHero>
            <RightHero>
                <img src={HeroImg} alt="" />
            </RightHero>
        </Section>
     );
}
 
export default Hero;

const Section = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
    gap: 50px;
    justify-content: center;
    font-family: Mulish;
    margin-top: 50px;

`
const LeftHero = styled.div`
width: 600px;    
display: flex;
flex-direction: column;
gap:30px;

#header{
    font-size: 40px;
    font-weight: 900;
    color: RGB(64, 25, 109);
}
#desc{
    font-size:20px;
    font-weight: 600;
    line-height: 20px;
}

.buttons{
    display: flex;
    gap: 10px;
}

.HeroFooter{
    display: flex;
    color: lightgray;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
}

#cbn{
    display: flex;
    align-items: center; 
}
#cbnLogo{
    width: 40px;
}

#ndic{
    display: flex;
    align-items: center;
}
#ndic span{
    font-weight: 900;
    color:#2c2f80; 
    font-size: 20px;
    border-left: 1.5px solid;
    margin-left: 4px;
}
`
const RightHero = styled.div`
    img{
    width: 550px;
}


`