import styled from "styled-components";
const TransitionCardProps = ({Testimony,Image,Name}) => {
    return ( 
        <Tcards>
            <p id="testi">{Testimony}</p>
            <ImgName>
                <img src={Image} alt="" />
                <b>{Name}</b>
            </ImgName>
        </Tcards>
     );
}
 
export default TransitionCardProps;

const Tcards =styled.div`
    height: 200px;
    width: 500px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    #testi{
        font-size:12px;
        padding: 20px;
    }

    img{
        border-radius: 50%;
        width: 40px;
        margin:0px 10px;
    }

    b{
        font-weight: 900;
        font-size: 12px;
    }

`
const ImgName= styled.div`
display: flex;
align-items:center;
`
