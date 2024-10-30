import styled from "styled-components";

const CardProps = ({Image,Texts}) => {
    return ( 
        <Cards>
            <img src={Image} alt="" />
            <p>{Texts}</p>
        </Cards>
     );
}
 
export default CardProps;

const Cards = styled.div`
margin-top: 50px;
width: 350px;
height: 130px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

img{
    width: 30px;
}

img,p{
    margin: 20px 20px -5px 20px;
}

p{
    font-size: 13.65px;
    font-weight: 900;
    color: RGB(64, 25, 109);
}
`