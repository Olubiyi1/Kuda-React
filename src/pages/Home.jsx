import styled from "styled-components";
import Hero from "./HeroOne.jsx";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";

const Homepage = () => {
    return ( 
        <Main>
            <Hero/>
            <HeroTwo/>
            <HeroThree />
        </Main>
     )
};
 
export default Homepage;

const Main = styled.div`
   
`