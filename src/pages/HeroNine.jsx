import styled from "styled-components";
import Tc from "../assets/images/tc.svg"
import Image from "../assets/images/downloa.svg"
import fintech from "../assets/images/fintech.svg"
import download from "../assets/images/download.svg"
import cnbc from "../assets/images/cnbc.svg"
import euromoney from "../assets/images/euromoney.svg"




const HeroNine = () => {
    return ( 
        <SectionNine>
            <img src={Tc} alt="" />
            <img src={Image}alt="" />
            <img src={fintech}alt="" />
            <img src={download} alt="" />
            <img src={cnbc} alt="" />
            <img src={euromoney} alt="" />
        </SectionNine>
     );
}
 
export default HeroNine;

const SectionNine = styled.div`


display: flex;
align-items: center;
justify-content: center;
gap: 100px;
height: 150px;
margin: auto;
margin-top: 50px;

img{
    width: 90px;
}
`