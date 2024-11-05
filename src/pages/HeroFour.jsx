import styled from "styled-components";
import Image from "../assets/images/HeroFour.png";

const HeroFour = () => {
    return ( 
        <SectionFour>

            
            <HeroFourImage   HeroFourImage>
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
    justify-content: space-between;
    max-width: 1000px;
    margin:auto;
    align-items: center;
    font-family: Mulish;
    margin-top: 100px;

    @media (max-width:700px){
        flex-direction: column-reverse;
        justify-content:center;
        margin-top: 40px;
        align-items: center;
       

    }

    @media (max-width: 500px){
     margin-left: -20px;

    }
   

    
`
const HeroFourHeader = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width:950px){
    margin-left: 30px;
}
@media (max-width:810px){
        width: 450px;
        text-align: center;
        
    }
    .header{
        font-size:31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;

    @media (max-width:950px){
    font-size: 30px;
}

@media (max-width: 500px){
     font-size:25px;   
    }
    }
    #header{
        font-size:14px;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 500px){
     font-size:13px;   
    }
    }
`
const HeroFourImage = styled.div`
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