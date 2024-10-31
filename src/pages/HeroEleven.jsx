import styled from "styled-components";
import { HiMiniMinusCircle } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
const HeroEleven = () => {
    return ( 
        <SectionEleven>
            <SectionElevenHead>
            Choose the freedom you need.
            </SectionElevenHead>

            <SectionElevenTable>
                    <tr>
                        <th></th>
                        <th>Other Banks</th>
                        <th><img src="src\assets\images\LogoKuda.png" alt="" /></th>
                    </tr>
                    <tr>
                        <th>Transfer Fee</th>
                        <td><HiMiniMinusCircle id="minus"/>Up to ₦50 plus V.A.T.</td>
                        <td><FaCircleCheck id="checked"/>25 free transfers every month</td>
                    </tr>
                    <tr>
                        <th>Card Delivery</th>
                        <td><HiMiniMinusCircle id="minus"/>🤨</td>
                        <td><FaCircleCheck id="checked"/>Yes</td>
                    </tr>
                    <tr>
                        <th>Card Maintenance Fee</th>
                        <td><HiMiniMinusCircle id="minus"/>Up to ₦50 per quarter</td>
                        <td><FaCircleCheck id="checked"/>No</td>
                    </tr>
                    <tr>
                        <th>Alerts</th>
                        <td><HiMiniMinusCircle id="minus"/>Charge for SMS alerts</td>
                        <td><FaCircleCheck id="checked"/>Free instant notifications</td>
                    </tr>
                    <tr>
                        <th>Annual Interest</th>
                        <td><HiMiniMinusCircle id="minus"/>4%</td>
                        <td><FaCircleCheck id="checked"/>Up to 15%</td>
                    </tr>
                    <tr>
                        <th>Bill Payment Fee</th>
                        <td><HiMiniMinusCircle id="minus"/>Up to ₦100 per bill</td>
                        <td><FaCircleCheck id="checked"/>No</td>
                    </tr>
                    <tr>
                        <th>Instant Reversals</th>
                        <td><HiMiniMinusCircle id="minus"/>😔</td>
                        <td><FaCircleCheck id="checked"/>Yes</td>
                    </tr>
                    <tr>
                        <th>Maintenance</th>
                        <td><HiMiniMinusCircle id="minus"/>Yes</td>
                        <td><FaCircleCheck id="checked"/>No</td>
                    </tr>
            </SectionElevenTable>
        </SectionEleven>
     );
}
 
export default HeroEleven;

const SectionEleven = styled.div`
    /* border: 1px solid; */
    width: 80%;
    margin: auto;
    margin-top: 50px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
`
const SectionElevenHead = styled.div`
    text-align: center;
color: RGB(64, 25, 109);
font-size: 31.5px;
font-weight: 900;
margin-bottom: 50px;
padding-top: 50px;

`
const SectionElevenTable = styled.table`
    img{
        width: 100px;
    
    }
    width: 100%;
    font-size: 14px;
    text-align:left;
    /* margin-left: 100px; */

    th,td,tr{
        border-bottom:1px dashed lightgray;
        padding: 10px;
    }
    tr{
        margin-left: 50px;
    }

    #minus{
        margin-right: 5px;
        color: rgb(151,151,151);
    }
    #checked{
        color: rgb(123,101,164);
        margin-right: 5px;
    }
`
