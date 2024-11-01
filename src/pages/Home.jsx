import styled from "styled-components";
import Hero from "./HeroOne.jsx";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import HeroFour from "./HeroFour.jsx";
import HeroFive from "./HeroFive.jsx";
import HeroSix from "./HeroSix.jsx";
import HeroSeven from "./HeroSeven.jsx";
import HeroEight from "./HeroEight.jsx";
import Testimonies from "./Testimonies.jsx";
import HeroNine from "./HeroNine.jsx"
import HeroTen from "./HeroTen.jsx";
import HeroEleven from "./HeroEleven.jsx";
import HeroTwelve from "./HeroTwelve.jsx";
import HeroThirteen from "./HeroThirteen.jsx";
import HeroFourteen from "./HeroFourteen.jsx";

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
            <Testimonies/>
            <HeroNine/>
            <HeroTen/>
            <HeroEleven/>
            <HeroTwelve/>
            <HeroThirteen/>
            <HeroFourteen/>
        </Main>
     )
};
 
export default Homepage;

const Main = styled.div`
   
`