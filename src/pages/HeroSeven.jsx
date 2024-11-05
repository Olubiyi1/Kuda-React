import styled from "styled-components";
import Image from "../assets/images/HeroSeven.png";


const HeroSeven = () => {
    return ( 
        <SectionSeven>
            <SectionSevenHeader>
                <h1 id="SevenHeader">We’re always happy to <br /> help you.</h1>
                <p id="para">You can chat with us on the app, slide into our <br /> DMs, tweet, leave an Instagram comment,  <br />send an email or call. However you choose to <br />reach out, there’ll always be a friendly person <br />there to make your life easy.</p>
            </SectionSevenHeader>

            <SectionSevenImage>
                <img src={Image} alt="" />
            </SectionSevenImage>
        </SectionSeven>
     );
}
 
export default HeroSeven;

const SectionSeven = styled.div`
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
const SectionSevenHeader = styled.div`
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


    #SevenHeader{
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
    }
`
const SectionSevenImage = styled.image`
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