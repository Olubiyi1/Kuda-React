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
const SectionSixHeader = styled.div`
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

    #SixHeader{
        font-size: 31.5px;
    color: RGB(64, 25, 109);
    font-weight: 900;

    @media (max-width:950px){
    font-size: 30px;
}

@media (max-width: 500px){
     font-size:25px;   
    }

    }

    #para{
        font-size:14px;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 500px){
     font-size:13px;   
    }
    }
`
const SectionSixImage = styled.image`
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