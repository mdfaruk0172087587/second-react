import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [single, setSingle] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [four, setFour] = useState(0);
    const handleSingle = () =>{
        const updateRuns= runs +1;
        const updateSingle = single + 1;
        setSingle(updateSingle)
        setRuns(updateRuns);
    }
    const handleFour = () =>{
        const updateRuns = runs +4;
        const updateFour = four + 1;
        setFour(updateFour)
        setRuns(updateRuns)
    }
    const handleSix = () =>{
        const updateRuns = runs +6;
        const updateSixes = sixes +1;
        setSixes(updateSixes)
        setRuns(updateRuns)
    }
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
                runs > 50 && <p>Congation Your Scour : {runs}</p>
            }
            <p><small>Single: {single}</small></p>
           <p><small>Six : {sixes}</small></p>
           <p><small>Four: {four}</small></p>
            <h1>Scour: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}