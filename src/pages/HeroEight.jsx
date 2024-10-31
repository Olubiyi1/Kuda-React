import styled from "styled-components";
import Image from "../assets/images/Eight.png";


const HeroEight= () => {
    return ( 
        <SectionEight>
            <SectionEightHeader>
                <h1 id="SixHeader">Fees as clear as glass.</h1>
                <p id="para">We’re serious about free banking, and we will <br /> never, ever charge you for anything without <br />your consent.</p>
            </SectionEightHeader>

            <SectionEightImage>
                <img src={Image} alt="" />
            </SectionEightImage>
        </SectionEight>
     );
}
 
export default HeroEight;

const SectionEight = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 100px;
width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;
`
const SectionEightHeader = styled.div`
     width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    #SixHeader{
        font-size: 31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;
    }

    #para{
        font-size:14px;
    font-weight: 400;
    line-height: 20px;
    }
`
const SectionEightImage = styled.image`
    img{
        width: 450px;
    }
`