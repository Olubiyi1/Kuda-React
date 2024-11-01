import styled from "styled-components";



const HeroNine = () => {
    return ( 
        <SectionNine>
            <img src="src\assets\images\tc.svg" alt="" />
            <img src="src\assets\images\downloa.svg" alt="" />
            <img src="src\assets\images\fintech.svg" alt="" />
            <img src="src\assets\images\download.svg" alt="" />
            <img src="src\assets\images\cnbc.svg" alt="" />
            <img src="src\assets\images\euromoney.svg" alt="" />
        </SectionNine>
     );
}
 
export default HeroNine;

const SectionNine = styled.div`


display: flex;
align-items: center;
justify-content: center;
gap: 100px;
height: 150px;
margin: auto;
margin-top: 50px;

img{
    width: 90px;
}
`