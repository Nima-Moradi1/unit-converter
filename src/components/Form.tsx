import { useEffect, useState } from "react";

const unitConversions: { [key: string]: number } = {
    miles: 1609.34,
    kilometers: 1000,
    inches: 0.0254,
    centimeters: 0.01,
    feet: 0.3048,
    meters: 1,
    milimeters : 0.001,
    yards : 0.9144 ,
    nauticalMiles: 1852,        
    micrometers: 1e-6,          
    nanometers: 1e-9,           
    lightYears: 9.461e15,       
    astronomicalUnits: 1.496e11 
  };


const Form = () => {
    const [amount, setAmount] = useState<number | string>("");
    const [from, setFrom] = useState("miles");
    const [to, setTo] = useState("miles");
    const [result, setResult] = useState<number | null>(null);
  
    useEffect(() => {
        if (amount === "" || isNaN(Number(amount))) {
          setResult(null);
          return;
        }
    
        const amountInMeters = Number(amount) * unitConversions[from];
        const convertedValue = amountInMeters / unitConversions[to];
        setResult(convertedValue);
      }, [amount, from, to]); 
    
     const formattedNum = result !== null && result < 0.01 ? result.toFixed(10) : result?.toLocaleString()

  return (
    <div>
      <form className="flex flex-col m-10">
        <label htmlFor="amount">Amount</label>
        <input
        className="bg-white my-2 bg-opacity-10 rounded-lg p-2 px-3"
        type="number" id="amount" name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}/>
        <div className="flex justify-between mt-10 gap-20">
       <div>
       <label htmlFor="from">From</label>
        <select
        className="bg-white mx-2 bg-opacity-10 rounded-lg p-2"
        name="from" id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}>
            <option value="miles">Miles</option>
            <option value="kilometers">Kilometers</option>
            <option value="inches">Inches</option>
            <option value="centimeters">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="meters">Meters</option>
            <option value="yards">Yards</option>
            <option value="millimeters">Millimeters</option>
            <option value="nauticalMiles">Nautical Miles</option>
            <option value="micrometers">Micrometers</option>
            <option value="nanometers">Nanometers</option>
            <option value="lightYears">Light Years</option>
            <option value="astronomicalUnits">Astronomical Units</option>
        </select>
       </div>
       <div>
       <label htmlFor="to">To</label>
        <select name="to" id="to"
         value={to}
         onChange={(e) => setTo(e.target.value)}
        className="bg-white mx-2 bg-opacity-10 rounded-lg p-2">
        <option value="miles">Miles</option>
            <option value="kilometers">Kilometers</option>
            <option value="inches">Inches</option>
            <option value="centimeters">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="meters">Meters</option>
            <option value="yards">Yards</option>
            <option value="millimeters">Millimeters</option>
            <option value="nauticalMiles">Nautical Miles</option>
            <option value="micrometers">Micrometers</option>
            <option value="nanometers">Nanometers</option>
            <option value="lightYears">Light Years</option>
            <option value="astronomicalUnits">Astronomical Units</option>
        </select>
       </div>
        </div>
      </form>
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-2xl text-center">{result !== null ? `Result : ` : ""} </h2>
        <p className="text-center text-2xl">
        {result !== null ? `${formattedNum} ${to}` : ""}
        </p>
      </div>
    </div>
  )
}

export default Form