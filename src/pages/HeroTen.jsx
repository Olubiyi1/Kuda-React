import styled from "styled-components";
import Valar from "../assets/images/Valar.svg"
import entre from "../assets/images/entre.svg"
import sbi from "../assets/images/sbi.svg"
import target from "../assets/images/target.svg"
import Visa from "../assets/images/Visa.svg"

const HeroTen = () => {
    return ( 
        <SectionTen>
            <SectionTenHead>
                Our Partners
            </SectionTenHead>
            <SectionTenImg>
                <img src={Valar} alt="" />
                <img src={entre} alt="" />
                <img src={sbi} alt="" />
                <img src={target} alt="" />
                <img src={Visa}alt="" />
            </SectionTenImg>
        </SectionTen>
     );
}
 
export default HeroTen;

const SectionTen = styled.div`
margin-top:50px;
height: 200px;
margin:auto;
background-color: #fbfbfb;

`
const SectionTenHead = styled.div`
text-align: center;
color: RGB(64, 25, 109);
font-size: 31.5px;
font-weight: 900;
padding-top: 50px;
`
const SectionTenImg = styled.image`
display: flex;
height: 100px;
align-items: center;
justify-content: center;
gap:50px;
`
