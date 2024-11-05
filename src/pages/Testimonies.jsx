import TransitionCardProps from "../Components/TransitionCardProps";
import styled from "styled-components"
import Babajide from "../assets/images/babajide.svg"
import Adebambo from "../assets/images/adembambo.svg"
import Muhammed from "../assets/images/muhammed.svg"
import Realsoak from "../assets/images/realsoak.svg"

const Testimonies =()=>{
    return(

        <TSection>

            <THead>
                <h1>Don’t just take our word for it</h1>
            </THead>
            <Transitions>
                <TransitionCardProps Testimony="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!" Image={Babajide} Name="Babajide"/>
                <TransitionCardProps Testimony="This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends" Image={Adebambo} Name="Adebambo"/>
                <TransitionCardProps Testimony="I highly recommend this app, it does what it says The bank of the free I have received my kuda card" Image={Realsoak} Name="Realsoak"/>
                <TransitionCardProps Testimony="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!" Image={Muhammed} Name="Muhammed"/>
                <TransitionCardProps Testimony="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!" Image={Muhammed} Name="Muhammed"/>
            </Transitions>
        </TSection>

    )
}

export default Testimonies;

const TSection = styled.div`
 margin-top: 50px;

 @media (min-width: 350px){
            border: 1px solid;
}
`
const Transitions = styled.div`
     display: flex;
    gap: 20px;
    background-color: #f9f9f9;
    margin: 50px 0px;
    animation-name: transition;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    /* animation-timing-function: ease-in-out; */


   

    @keyframes transition{
       from{ transform: translateX(0px)}
       to{ transform: translateX(-600px)}

    }
`
const THead = styled.div`
    text-align: center;
    color: RGB(64, 25, 109);
    font-weight: 900;
`