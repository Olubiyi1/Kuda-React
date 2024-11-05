import styled from "styled-components";
import Image from "../assets/images/HeroFour.png";

const HeroFour = () => {
    return ( 
        <SectionFour>

            
<HeroFourImage>
                <img src={Image} alt="" />
            </HeroFourImage>
            <HeroFourHeader>
                <h1 className="header">
                It’s your money, we just <br />help you manage it.
                </h1>
                <p id="header">
                Save it, spend it, send it. It’s up to you. <br /> Whatever you choose to do with your money,<br />we’ll make sure it’s done better and free of <br /> charge. We take responsibility for that.
                </p>
            </HeroFourHeader>

        </SectionFour>
     );
}
 
export default HeroFour;

const SectionFour = styled.div`
    display: flex;
    gap: 100px;
width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;

@media (min-width: 350px){
        flex-direction: column-reverse;
    }
`
const HeroFourHeader = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 350px){
    width: 350px;
    text-align: center;
    margin-top:30px;
}

    .header{
        font-size:31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;
    }
    #header{
        font-size:14px;
    font-weight: 400;
    line-height: 20px;
    }
`
const HeroFourImage = styled.div`
    img{
        width: 500px;

        @media (min-width: 350px){
            width: 400px;
            margin-top: -50px;
            margin-left:-40px ;
        }
    }

    @media (min-width: 350px){
        width: 350px;
        margin-top: 80px;
        margin: 0px auto;
        /* margin-left: -50px; */
}


`