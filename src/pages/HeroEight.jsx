import styled from "styled-components";
import Image from "../assets/images/Eight.png";


const HeroEight= () => {
    return ( 
        <SectionEight>
            <SectionEightHeader>
                <h1 id="SixHeader">Fees as clear as glass.</h1>
                <p id="para">We’re serious about free banking, and we will <br /> never, ever charge you for anything without <br />your consent.</p>
            </SectionEightHeader>

            <SectionEightImage>
                <img src={Image} alt="" />
            </SectionEightImage>
        </SectionEight>
     );
}
 
export default HeroEight;

const SectionEight = styled.div`
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

    }

    @media (max-width: 500px){
     margin-left: -20px;
    }
   
`
const SectionEightHeader = styled.div`
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
    margin-bottom: 20px;
    }
`
const SectionEightImage = styled.image`
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