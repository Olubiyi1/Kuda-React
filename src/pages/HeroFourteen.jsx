import styled from "styled-components";

const HeroFourteen = () => {
    return ( 
        <SectionFourteen>
             <img src="src/assets/images/LogoKuda.png" alt="" />
            <SectionFourteenContent>
               
                <Personal>
                    <h5>Personal</h5>
                    <p>Discover Personal</p>
                    <p>Save</p>
                    <p>Investments</p>
                    <p>Kuda card</p>
                </Personal>
                <Business>
                <h5>Business</h5>
                <p>Discover Business</p>
                <p>Business Registration</p>
                <p>softPOS</p>
                <p>Invoicing</p>
                <p>POS Machine</p>
                <p>Business Loan</p>
                <p>Business API</p>
                <p>Join Kuda Business</p>
                </Business>
                <Company>
                <h5>Company</h5>
                <p>Blog</p>
                <p>Press</p>
                <p>Join Our Team</p>
                <p>About Us</p>
                </Company>
                <Help>
                <h5>Help</h5>
                <p>Get Help</p>
                <p>Scam Awareness</p>
                <p>FAQs</p>
                <p>Security</p>
                <p>Contact Us</p>
                <p>Self Help</p>
                </Help>
                <Transparency>
                <h5>Transparency</h5>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Information Security Policy</p>
                <p>Cookie Policy</p>
                <p>Whistleblowing Policy</p>
                </Transparency>
            </SectionFourteenContent>
        </SectionFourteen>
     );
}
 
export default HeroFourteen;

const SectionFourteen = styled.div`
    border-top: 1px dashed lightgray;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-wrap: wrap;
    margin: 0px auto;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    img{
    width: 100px;
    margin-left: 10px;
    /* margin-bottom: -50px; */
}
    
`

const SectionFourteenContent = styled.div`
display: flex;
/* border: 1px solid; */
width: 900px;
justify-content: space-around;
align-items: flex-start;
font-family: Mulish;
margin-top: 15px;

@media (max-width:500px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
}
h5{
    font-size: 14px;
    font-weight: 700;
    color: 
    RGB(64, 25, 109);
}

`

const Personal = styled.div`
display:flex;
flex-direction: column;
gap:15px;
font-size:12.25px;
font-weight: 400;
`
const Business = styled.div`
display:flex;
flex-direction: column;
gap:15px;
font-size:12.25px;
font-weight: 400;

`
const Company = styled.div`
display:flex;
flex-direction: column;
gap:15px;
font-size:12.25px;
`

const Help = styled.div`
display:flex;
flex-direction: column;
gap:15px;
font-size:12.25px;
`
const Transparency = styled.div`
display:flex;
flex-direction: column;
gap:15px;
font-size:12.25px;
`
