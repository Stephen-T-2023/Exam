import { useState } from "react";
import Navigation from "../component/navigation";

const Tickets = () => {

    const [adult, setAdult] = useState(0);
    const [youngperson, setYoungPerson] = useState(0);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [price, setPrice] = useState(0);


    return ( 
        <div className="flex flex-wrap flex-col w-screen h-screen bg-lime-300">
            <Navigation></Navigation>
            <div className="flex justify-center text-3xl font-bold text-green-600 mb-6">
                Tickets:
            </div>
            <div className="w-full h-1/5 place-items-center content-center border-black border-2 text-2xl font-body">
                <h2>Adult Tickets</h2>
                <p>Age 16 and over: £20.00 <button className="border-2 border-black" onClick={() => {setAdult(adult+1), setPrice(price+10)}}>{adult}</button></p>
            </div>
            <div className="w-full h-1/5 place-items-center content-center border-black border-2 text-2xl font-body">
                <h2>Young Person Tickets</h2>
                <p>Between Ages 12 and 15: £15.00 <button className="border-2 border-black" onClick={() => {setYoungPerson(youngperson+1), setPrice(price+8)}}>{youngperson}</button></p>
            </div>
            <div className="w-full h-1/5 place-items-center content-center border-black border-2 text-2xl font-body">
                <h2>Child Tickets</h2>
                <p>Between Ages 3 and 12: £10.00 <button className="border-2 border-black" onClick={() => {setChild(child+1), setPrice(price+5)}}>{child}</button></p>
            </div>
            <div className="w-full h-1/5 place-items-center content-center border-black border-2 text-2xl font-body">
                <h2>Infant Tickets</h2>
                <p>Age 2 and under: Free <button className="border-2 border-black" onClick={() => {setInfant(infant+1)}}>{infant}</button></p>
            </div>
            <h2 className="w-full h-auto place-items-center border-black border-2 text-2xl font-body">Total Price: <h2>£{price}</h2></h2>
        </div>
    );
}

export default Tickets;