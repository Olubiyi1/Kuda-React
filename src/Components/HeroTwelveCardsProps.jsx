import styled from "styled-components"

const HeroTwelveProps = ({Image,Title,Paragraph,Link,Arrow}) => {
    return ( 
        <Props>
        <img src={Image} alt="" />
        <h3>{Title}</h3>
        <p id="parag">{Paragraph}</p>
        <div id="bottom">
            <p id="combined">{Link}</p>
            {Arrow}
        </div>
        </Props>
     );
}
 
export default HeroTwelveProps;

const Props = styled.div`
width: 300px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 10px;
background-color: white;

h3{
    font-size: 24px;
    font-weight: 900;
    color: 
    RGB(64, 25, 109);
    margin-bottom: 20px;
}

#parag{
    /* margin-bottom: 20px; */
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 20px;
}

#bottom{
    display: flex;
    align-items: center;
}
#combined{
    font-size: 14px;
    font-weight: 700;
    color: 
    RGB(64, 25, 109);
    margin-right: 5px;
    text-decoration: underline;

}
img{
    margin-bottom: 10px;
}
`