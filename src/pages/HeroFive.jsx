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
    justify-content: space-between;
    max-width: 1000px;
    margin:auto;
    align-items: center;
    font-family: Mulish;
    margin-top: 100px;

    @media (max-width:700px){
        flex-wrap: wrap;
        justify-content:center;
        margin-top: 40px;

    }

    @media (max-width: 500px){
     margin-left: -20px;
    }

`
const SectionFiveHeader = styled.div`
     width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;


    @media (max-width:950px){
    margin-left: 30px;;
}
@media (max-width:810px){
        width: 450px;
        text-align: center;
        
    }

    #FiveHeader{
        font-size: 31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;

    @media (max-width:950px){
    font-size: 28px;
}

@media (max-width: 500px){
     font-size:25px;   
    }
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

        @media (max-width: 950px){
        width: 400px;
    }

    @media (max-width: 500px){
    width:300px;   
    margin-top: 20px;
    }
    }
`