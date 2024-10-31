import styled from "styled-components";
import Image from "../assets/images/herofive.png";


const HeroFive = () => {
    return ( 
        <SectionFive>
            <SectionFiveHeader>
                <h1 id="FiveHeader">Save money as you <br />spend it, seriously.</h1>
                <p id="para">You can’t avoid spending. That’s how you pay <br />for your needs. But we can help you put money <br />away every time you pay for something. Just set <br /> a percentage to save and watch your money <br /> grow.</p>
            </SectionFiveHeader>

            <SectionFiveImage>
                <img src={Image} alt="" />
            </SectionFiveImage>
        </SectionFive>
     );
}
 
export default HeroFive;

const SectionFive = styled.div`
        display: flex;
        gap: 100px;
        width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;
`
const SectionFiveHeader = styled.div`
     width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    #FiveHeader{
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
const SectionFiveImage = styled.div`
    img{
        width: 500px;
    }
`