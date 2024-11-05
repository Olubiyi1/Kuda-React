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
margin-top: 10px;
width: 350px;
height: 130px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

@media (max-width:700px){
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
    }


img{
    width: 30px;
}

img,p{
    margin: 20px 20px -5px 20px;
}

p{
    font-size: 12px;
    font-weight: 900;
    color: RGB(64, 25, 109);
}
`