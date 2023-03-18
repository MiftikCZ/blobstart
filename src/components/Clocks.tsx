import { useState } from "preact/hooks";

function formatInt(input:number) {
    if(input < 9.9) {
        return `0${input}`
    }
    return `${input}`
}

export default function() {
    let [time,setTime] = useState("")
    function renderTime() {
        let d = new Date()
        
        setTime(`${d.getHours()}:${formatInt(d.getMinutes())}:${formatInt(d.getSeconds())}`)
    }
    setInterval(()=>{
        renderTime()
    },1000)
    renderTime()
    return <span class="clocks">
        {time}
    </span>
}