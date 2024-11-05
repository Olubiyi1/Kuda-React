import styled from "styled-components";
import CardProps from "../Components/CardProps";
import ImageOne from "../assets/images/card.png"
import ImageTwo from "../assets/images/casheless.png"
import Bills from "../../src/assets/images/Bills.png"
import Transfer from "../../src/assets/images/transfer.png"
import Piggy from "../../src/assets/images/piggy.png"

const HeroTwo = () => {
    return ( 
        <SectionTwo>
            <TopCards>
                <CardProps Image={ImageOne} Texts="Order a Kuda card on the app with pickup and delivery options."/>
                <CardProps Image={ImageTwo} Texts="Enjoy cashless payment options online and offline."/>
                <CardProps Image={Bills} Texts="Pay your essential bills and buy gift cards easily."/>
            </TopCards>
            <BottomCards>
                <CardProps Image={Transfer}Texts="Get 25 free transfers to Nigerian banks every month."/>
                <CardProps Image={Piggy} Texts="Save money automatically any time you spend."/>
            </BottomCards>
        </SectionTwo>
     );
}
 
export default HeroTwo;

const SectionTwo = styled.div`
    display: flex;
    /* width:80%; */
    max-width: 1000px;
    margin: auto;
    flex-direction: column;
`
const TopCards = styled.div`
display:flex;
justify-content: center;


@media (max-width:700px){
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
    }

`
const BottomCards = styled.div`
display:flex;
justify-content: center;
margin-bottom: 30px;

@media (max-width:700px){
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        margin-top: 10px;

    }
`