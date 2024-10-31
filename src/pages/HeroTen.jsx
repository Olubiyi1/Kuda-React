import styled from "styled-components";

const HeroTen = () => {
    return ( 
        <SectionTen>
            <SectionTenHead>
                Our Partners
            </SectionTenHead>
            <SectionTenImg>
                <img src="src\assets\images\Valar.svg" alt="" />
                <img src="src\assets\images\entre.svg" alt="" />
                <img src="src\assets\images\sbi.svg" alt="" />
                <img src="src\assets\images\target.svg" alt="" />
                <img src="src\assets\images\Visa.svg" alt="" />
            </SectionTenImg>
        </SectionTen>
     );
}
 
export default HeroTen;

const SectionTen = styled.div`
margin-top:50px;
height: 200px;
margin:auto;
background-color: #fbfbfb;

`
const SectionTenHead = styled.div`
text-align: center;
color: RGB(64, 25, 109);
font-size: 31.5px;
font-weight: 900;
padding-top: 50px;
`
const SectionTenImg = styled.image`
/* border: 1px solid; */
display: flex;
height: 100px;
align-items: center;
justify-content: center;
gap:50px;
`
