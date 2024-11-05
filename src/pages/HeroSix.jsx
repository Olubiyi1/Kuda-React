import styled from "styled-components";
import Image from "../assets/images/HeroSix.png";


const HeroSix = () => {
    return ( 
        <SectionSix>
            <SectionSixHeader>
                <h1 id="SixHeader">Turn off access, turn on <br />safety..</h1>
                <p id="para">Life happens. Milk spills. Debit cards go <br /> missing. If that ever happens, you can block <br />your missing card on the app so no one can <br />use it. We’d like to see them try.</p>
            </SectionSixHeader>

            <SectionSixImage>
                <img src={Image} alt="" />
            </SectionSixImage>
        </SectionSix>
     );
}
 
export default HeroSix;

const SectionSix = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 100px;
width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;

@media (min-width: 350px){
        flex-direction: column;
    }
`
const SectionSixHeader = styled.div`
     width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 350px){
    width: 350px;
    text-align: center;
    margin-top:20px;
}

    #SixHeader{
        font-size: 31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;

    @media (min-width: 350px){
    font-size: 30px;
}
    }

    #para{
        font-size:14px;
    font-weight: 400;
    line-height: 20px;
    }
`
const SectionSixImage = styled.image`
    img{
        width: 400px;
        @media (min-width: 350px){
            margin-top: -60px;
}
    }
`