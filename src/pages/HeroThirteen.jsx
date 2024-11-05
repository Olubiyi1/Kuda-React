import styled from "styled-components";
import ButtonProps from "../Components/ButtonProps";
import Img from "../assets/images/thirt.png"

const HeroThirteen = () => {
    return ( 
        <SectionThirteen>
            <div className="right">
                <ThirteenHead>
                    <h4>The money app for <br /> Africans.</h4>
                <p>Save, spend, send and invest money across borders.</p>
                <Prop>
                    <ButtonProps Title="Join Kuda"/>
                </Prop>
                </ThirteenHead>
            </div>
            <ThirteenImg>
                <img src={Img} alt="" />
            </ThirteenImg>
        </SectionThirteen>
     );
}
 
export default HeroThirteen;

const SectionThirteen = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1000px;
    margin:auto;
    align-items: center;
    font-family: Mulish;
    margin-top: 100px;
    background-color: #9a9ae2;

    @media (max-width:950px){
    gap: 10px;
    background-color: transparent;
}
    
    /* background-color: rgb(239,241,255); */

    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
 

`

const ThirteenHead =styled.div`
 width: 600px;    
display: flex;
flex-direction: column;
gap:30px;
/* border: 1px solid; */


@media (max-width:950px){
    gap: 10px;
    background-color: #9a9ae2;
    margin:0 auto;

    @media (max-width: 500px){
     margin-left: -20px;
     width: 500px;
    }
   
}


    h4{
        font-size: 31.5px;
        color: RGB(64, 25, 109);
        font-weight: 900;
        @media (max-width:950px){
    font-size: 30px;
    text-align: center;
}

    }

    p{
        font-size: 14px;
        font-weight: 400;
        color: RGB(64, 25, 109);

        @media (max-width:950px){
            text-align: center;
        }
    }
    
`
const ThirteenImg = styled.image`
    img{
        width: 450px;
        margin-top: 50px;
        overflow: hidden;

        @media (max-width:950px){
            display: none;
        }

    }
`
const Prop = styled.button`
    border: none;
    background-color: transparent;

`