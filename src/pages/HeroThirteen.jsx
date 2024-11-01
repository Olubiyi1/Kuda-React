import styled from "styled-components";
import ButtonProps from "../Components/ButtonProps";

const HeroThirteen = () => {
    return ( 
        <SectionThirteen>
            <ThirteenHead>
                <h4>The money app for <br /> Africans.</h4>

            <p>Save, spend, send and invest money across borders.</p>
            <ButtonProps Title="Join Kuda"/>
            </ThirteenHead>
            <ThirteenImg>
                <img src="src\assets\images\Thirteen.png" alt="" />
            </ThirteenImg>
        </SectionThirteen>
     );
}
 
export default HeroThirteen;

const SectionThirteen = styled.div`
    display: flex;
    max-width: 70%;
    align-items: center;
    gap: 50px;
    justify-content: center;
    background-color: rgb(239,241,255);
    margin: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 60px;
`

const ThirteenHead =styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;

    h4{
        font-size: 31.5px;
        color: RGB(64, 25, 109);
        font-weight: 900;
    }

    p{
        font-size: 14px;
        font-weight: 400;
        color: RGB(64, 25, 109);
    }
    
`
const ThirteenImg = styled.image`
    img{
        width: 400px;
        margin-top: 50px;
        overflow: hidden;
    }
`