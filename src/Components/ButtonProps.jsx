import styled from "styled-components";

const ButtonProps = ({Title}) => {
    return ( 
        <Button>
           {Title}
        </Button>
     );
}
 
export default ButtonProps;

const Button = styled.button`
    background-color: #40196d;
    border: none;
    /* padding: 10px; */
    height: 40px;
    color:white;
    width: 120px;
    border-radius: 10px;

`