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
gap: 100px;
width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;
`
const SectionSevenHeader = styled.div`
     width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    #SevenHeader{
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
const SectionSevenImage = styled.image`
    img{
        width: 500px;
    }
`