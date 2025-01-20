import { useState } from "react";
import Navigation from "./navigation";

const Tickets = () => {

    const [adult, setAdult] = useState(0);
    const [youngperson, setYoungPerson] = useState(0);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [price, setPrice] = useState(0);


    return ( 
        <div>
            <Navigation></Navigation>
            <div>Tickets:</div>
            <div>
                <h2>Adult</h2>
                <p>price and that <button onClick={() => {setAdult(adult+1), setPrice(price+10)}}>{adult}</button></p>
            </div>
            <div>
                <h2>Young Person</h2>
                <p>price and that <button onClick={() => {setYoungPerson(youngperson+1), setPrice(price+8)}}>{youngperson}</button></p>
            </div>
            <div>
                <h2>Child</h2>
                <p>price and that <button onClick={() => {setChild(child+1), setPrice(price+5)}}>{child}</button></p>
            </div>
            <div>
                <h2>Infant</h2>
                <p>price and that <button onClick={() => {setInfant(infant+1)}}>{infant}</button></p>
            </div>
            <h2>Total Price: <h2>£{price}</h2></h2>
        </div>
     );
}
 
export default Tickets;