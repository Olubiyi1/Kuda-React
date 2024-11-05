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
    justify-content: space-between;
    max-width: 1000px;
    margin:auto;
    justify-content: center;
    align-items: center;
    font-family: Mulish;
    margin-top: 60px;

    @media (max-width:700px){
        flex-wrap: wrap;
        justify-content:center;
        
    }

    @media (max-width: 500px){
     margin-left: -20px;
    }


.SectionThreeLeft{
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
}

.SectionThreeFooter{
    display: flex;
    height: 30px;
    align-items: center;
    @media (max-width:950px){
            margin: 0px auto;
}

    a{
        font-size: 14px;
        font-weight: 700;
        color: RGB(64, 25, 109);

        @media (max-width: 500px){
        font-size:15px;   
        }
    }
}
    
#Icon{
    font-size:20px;
    text-align: center;
    margin-top:8px;
}
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

#heroThree{
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
#paraThree{
    font-size:14px;
    font-weight: 400;
    line-height: 20px;

}`
