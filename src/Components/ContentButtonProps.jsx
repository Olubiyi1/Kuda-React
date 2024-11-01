import styled from "styled-components"

const ContentButtonProps = ({Image,Step,AppName,Style}) => {
    return ( 
        <Button className={`${Style}`}>
            <div id="img">{Image}</div>
            <div className="Content">
                <p>{Step}</p>
                <h1>{AppName}</h1>
            </div>
        </Button>
     );
}
 
export default ContentButtonProps;

const Button = styled.button`
background-color: black;
color: white;
border: none;
display: flex;
align-items: center;
width:140px;
border-radius: 5px;
text-align: start;

.Content{
    padding: 5px;
}

#img{

    margin: 5px 5px 0px ;
    font-size:25px;
}

h1{
    font-size: 14px;
    font-weight: 100;
}

p{
    font-size: 9px;
}
`