import styled from "styled-components";
import Image from "../assets/images/HeroThree.png"
import { IoIosArrowForward } from "react-icons/io";

const HeroThree = () => {
    return ( 
        <SectionThree>
            <div className="SectionThreeLeft">
                <h1 id="heroThree">Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.</h1>
                <p id="paraThree">We designed a money app for your lifestyle, and <br />you can get a debit card to go with it. That's all <br /> you need to make the right money moves.</p>
                <div className="SectionThreeFooter">
                    <a href="#">Open An Account in Minutes </a>
                    <div id="Icon"><IoIosArrowForward/></div>
                </div>
            </div>

            
                <img src={Image} alt="" />

        </SectionThree>
     );
}
 
export default HeroThree;

const SectionThree = styled.div`
display: flex;
gap: 100px;
width: 80%;
margin: auto;
justify-content: center;
align-items: center;
margin-top: 50px;

.SectionThreeLeft{
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.SectionThreeFooter{
    display: flex;
    height: 30px;
    align-items: center;

    a{
        font-size: 14px;
        font-weight: 700;
        color: RGB(64, 25, 109);
    }
}
    
#Icon{
    font-size:20px;
    text-align: center;
    margin-top:8px;
}
img{
    width: 500px;
}

#heroThree{
    font-size: 26px;
    color: RGB(64, 25, 109);
    font-weight: 900;
}
#paraThree{
    font-size:14px;
    font-weight: 400;
    line-height: 20px;
}

`