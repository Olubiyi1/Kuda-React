import styled from "styled-components";
import HeroTwelveProps from "../Components/HeroTwelveCardsProps";
import Trans from "../assets/images/transfers.png"
import Bag from "../assets/images/bag.png"
import Loan from "../assets/images/Loan.png"
import { IoIosArrowForward } from "react-icons/io";

const HeroTwelve = () => {
    return ( 
        <SectionTwelve>
            <TwelveHeader>
            More for you
            </TwelveHeader>
            <PropsStyle>
                <HeroTwelveProps Image={Bag} Title="Kuda Business" Paragraph="Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more." Link="Learn more" Arrow={<IoIosArrowForward/>}/>
                <HeroTwelveProps Image={Trans} Title="Transfer & Spend" Paragraph="Send money for free to any Nigerian account with 25 free transfers every month."  Link="Learn more" Arrow={<IoIosArrowForward/>}/>
                <HeroTwelveProps Image={Loan} Title="Loans" Paragraph="Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments."  Link="Learn more" Arrow={<IoIosArrowForward/>}/>
            </PropsStyle>
        </SectionTwelve>
     );
}
 
export default HeroTwelve;

const SectionTwelve = styled.div`
margin-top: 70px;
/* background-color: rgb(247,245,249); */
margin-bottom: 100px;


`
const TwelveHeader =styled.div`
    color: RGB(64, 25, 109);
    font-size: 34px;
    font-weight: 900;
    text-align: center;
    padding: 50px;

    @media (max-width:950px){
    font-size: 30px;
}

@media (max-width: 500px){
     font-size:25px;   
    }
 
`
const PropsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
margin: auto;
gap: 50px;
justify-content: center;


`