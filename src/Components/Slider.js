import React,  { useState } from "react"
import '../slider.scss'
import ImgComp from './ImgComp'
import i1 from "../pics/1.jpg"
import i2 from "../pics/2.jpg"
import i3 from "../pics/3.jpg"
import i4 from "../pics/4.jpg"
import i5 from "../pics/5.jpg"


const Slider = () => {
    //Array for component to show inside slider
    let sliderArr = [<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>,<ImgComp src={i5}/>]; //numbers for testing
    const [x, setX] = useState(0);
    const goLeft  = () => {
        console.log(x)
        x=== 0 ? setX(-100 * (sliderArr.length-1)) : setX(x+100);
    }
    const goRight = () => {
        console.log(x)
        x=== -100* (sliderArr.length-1) ? setX(0) : setX (x-100);
    }

    return (
        <div className="slider">
            {
                //map is listing over each item in array and displaying it
                sliderArr.map((item, index) => {
                    return(
                        <div className='slide' key={index} style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            {/* //to navigate between array items */}
            <button id="goLeft" onClick={goLeft}>
                left
            </button>
            <button id="goRight" onClick={goRight}>
                right
            </button>
        </div>
    )
}

export default Slider
