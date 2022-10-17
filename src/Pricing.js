
import React, {useRef, useState} from 'react';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdEuro} from "react-icons/md"
import {motion, AnimatePresence} from 'framer-motion';
import "./Pricing.css"

// Freelance front-end dev: https://sanderlangendoen.nl/tarieven-freelance-frontend-ontwikkelaar/
//https://www.nationaleberoepengids.nl/android-developer#:~:text=Een%20Android%20Developer%20kan%20rekenen,van%20zijn%20leeftijd%20en%20ervaring.

let priceR1 = {
    "id": "pr1",
    "title": "Web front-end",
    "price1": 40,
    "price2": 60,
    "selected": false
}
let priceR2 = {
    "id": "pr2",
    "title": "Web back-end",
    "price1": 0,
    "price2": 0,
    "selected": true
}
let priceR3 = {
    "id": "pr3",
    "title": "Android application backend",
    "price1": 17,
    "price2": 25,
    "selected": false
}

const cardArray = [priceR1, priceR2, priceR3];


const setSelected = (valueProp) => {
    const el = document.getElementById(`pr${valueProp}`)
    el.style.transform = "scale(1.05, 1.05)"

  /*  el.setAttribute( "text-shadow", "0 0 3px #FF0000")
    el.setAttribute( "animate", "scale: 1.05")
    el.setAttribute( "transition", "duration: 2")*/

}

const resetSelected = () => {
    document.getElementById(`pr1`).style.transform = "scale(1, 1)"
    document.getElementById(`pr2`).style.transform = "scale(1, 1)"
    document.getElementById(`pr3`).style.transform = "scale(1, 1)"
}

function Pricing(){
    const [_selected, _setSelected] = useState(1)

    return(
        <div className={"pricing"}>
            <div className={"grid-container2"}>
                <div className={"arrowLeft"} onClick={() => {
                    // var pri = document.getElementById("pricelist");
                    // if (_selected === 2) {
                    //     pri.setAttribute("margin", "0 5em 0 0")
                    //     pri.setAttribute( "overflow", "hidden")
                    // }
                    console.log(`pr${_selected}`)
                    if (_selected === 1) {
                        resetSelected()
                        setSelected(_selected)
                    }
                    else if (_selected === 2 || _selected === 3 ) {
                        resetSelected()
                        _setSelected(_selected - 1)
                        setSelected(_selected)
                    }
                }}>
                    <MdOutlineArrowBackIosNew size={70} className={"arrBack"}/>
                </div>

                <div id="prices" className={"prices"}>
                    <h1 style={{margin: "0.5em 0 1.25em 0"}}>Standard Pricing</h1>
                    <p></p>

                    <motion.ul
                        id="pricelist" className={"grid-container3"} style={{height:"80%"}}
                    >
                        {
                            cardArray.map(item =>
                            <motion.li id={item.id} key={item.id} class={"listitem"}>
                                <motion.div className={"pricerange"} id={"pricerange"+item.id}>
                                    <motion.div className={"class-title ct"}>{item.title}</motion.div>
                                    <motion.h4 className={"h4cards"}>{<MdEuro/>}{item.price1} - {<MdEuro/>}{item.price2}/ hour</motion.h4>
                                </motion.div>
                            </motion.li>
                        )
                        }
                    </motion.ul>
                </div>

                <div className={"arrowRight"} onClick={() => {
                    if (_selected === 3 ){
                        resetSelected()
                        setSelected(_selected)
                    }
                    else if (_selected === 1 || _selected === 2){
                        _setSelected(_selected + 1)
                        resetSelected()
                        setSelected(_selected)
                    }
                }}>
                    <MdOutlineArrowForwardIos size={70} className={"arrNext"}/>
                </div>
            </div>

           {/* <AnimatePresence>
                {_selected && (
                    cardArray.map(item => (
                        <motion.li
                            id={item.id}
                            class={"listitem"}

                            key={item.id}
                            initial={{scale: 1}}
                            animate={{scale: 1.05}}
                            transition={{duration: 0.5}}
                            exit={{scale: 1}}
                        >
                            <motion.div className={"pricerange"} id={"pricerange"+item.id}>
                                <motion.div className={"class-title ct"}>{item.title}</motion.div>
                                <motion.h4 className={"h4cards"}>{<MdEuro/>}{item.price1} - {<MdEuro/>}{item.price2}/ hour</motion.h4>
                            </motion.div>
                        </motion.li>
                        )
                    ))}
            </AnimatePresence>*/}
        </div>
    )
}


export default Pricing