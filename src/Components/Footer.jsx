import styled from "styled-components";
import ContentButtonProps from "../Components/ContentButtonProps.jsx";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";


const Footer = () => {
    return ( 
        <Foot>
               <FootProps>
                   <ContentButtonProps Image={<FaApple/>} Step="Download on the" AppName="App Store"/>
                   <ContentButtonProps Image={<IoLogoGooglePlaystore/>} Step="Get it on" AppName="Google Play"/>
                   <ContentButtonProps Image={<BsGlobe/>} Step="Get it on" AppName="Google Play" Style="StyleBlue"/>
               </FootProps>

               <FootHead>
                    Products may vary by country or market.
               </FootHead>

               <Locations>
                   <Location>
                        <h5>Contact</h5>
                        <p id="mail">help@kuda.com</p>
                        <Icons>
                            <Icon><FaXTwitter/></Icon>
                            <Icon><FaInstagram/></Icon>
                            <Icon><FaFacebookF/></Icon>
                            <Icon><FaYoutube/></Icon>
                            <Icon><FaMediumM/></Icon>
                            <Icon><FaLinkedinIn/></Icon>
                        </Icons>
                   </Location>

                   <Location>
                        <h5>Lagos</h5>
                        <p>1-11 <br /> Commercial  <br />Avenue, Yaba, <br /> Lagos, <br />
                        Nigeria</p>
                   </Location>

                   <Location>
                        <h5>London</h5>
                        <p>5 New Street<br /> Square, <br />London, EC4A <br /> 3TW, <br />
                        Nigeria</p>
                   </Location>
                   <Location>
                        <h5>Cape Town</h5>
                        <p>5 146<br />Campground<br />Road, <br /> Snakepit <br />Building, Level <br />4, Newlands, <br />
                        Cape Town</p>
                   </Location>
                   <Location>
                        <h5>Canada</h5>
                        <p>3080 Yonge<br /> Street, <br />Suite 6060, <br /> Toronto, <br />Ontario M4N <br />
                        3N1</p>
                   </Location>

                </Locations>

                <Copyright>
                    <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                    <p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
                    <p>Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
                </Copyright>


        </Foot>        
     );
}
 
export default Footer;

const Foot = styled.div`
    max-width:1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const FootProps = styled.div`
display:inline-flex;
gap: 10px;


.StyleBlue{
    background-color: rgb(64,25,109);
}
`


const FootHead = styled.div`
    font: 12.6px;
    text-align: center;
    font-weight: 400;
    color: rgb(77,41,119);
    padding: 30px 0px 50px;
`
const Locations = styled.div`
display: flex;
justify-content: space-around;
@media (max-width:950px){
    flex-direction: column;
    margin-left:10px;
    gap: 0px;

}

margin: auto;
gap: 100px;

`
const Location = styled.div`
    h5{
        font-size: 14px;
        font-weight: 700;
      color: rgb(77,41,119);
      margin-bottom:0px;

      @media (max-width:950px){
        line-height: 50px;
      }
    }
    p{
        font-size: 12.25px;
        font-weight: 400;
        line-height: 20px;
    }
    #mail{
        text-decoration: underline;
        font-size: 16px;
        font-weight: 700;
        color: rgb(77,41,119);
        padding-bottom: 10px;
    }

`
const Icons = styled.div`
    display: flex;
    gap: 10px;
`
const Icon = styled.div`

    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    background-color: rgb(239,241,255);
    color: rgb(77,41,119);
`
const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 20px;
    margin: auto;
    font-size: 11px;
    font-weight: 400;
    color: RGB(99, 99, 105);
    line-height: 15px;
    margin-bottom: 50px;
    padding-top: 30px;

`
