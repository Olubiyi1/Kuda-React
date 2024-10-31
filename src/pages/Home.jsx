import styled from "styled-components";
import Hero from "./HeroOne.jsx";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import HeroFour from "./HeroFour.jsx";
import HeroFive from "./HeroFive.jsx";
import HeroSix from "./HeroSix.jsx";
import HeroSeven from "./HeroSeven.jsx";
import HeroEight from "./HeroEight.jsx";

const Homepage = () => {
    return ( 
        <Main>
            <Hero/>
            <HeroTwo/>
            <HeroThree />
            <HeroFour/>
            <HeroFive/>
            <HeroSix/>
            <HeroSeven/>
            <HeroEight/>
        </Main>
     )
};
 
export default Homepage;

const Main = styled.div`
   
`