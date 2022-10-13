
import React, {useState, Component, useEffect} from 'react';
import {useIsPresent, AnimatePresence, motion} from 'framer-motion';
import "./Frontpage.css";
import InfiniteScroll from "react-infinite-scroller";
import Projectpage from "./Projectpage";
import anime from 'animejs/lib/anime.es.js';
import {Markup} from "interweave";
import {Box, Grid} from "grommet";
import {Cube, Keyboard} from 'grommet-icons'


const card1 = {
    "id": "card1",
    "class": "whoIAm",
    "title": "Who am I?",
    "text": "<br/>As you may have noticed, my name is Thierry Klougbo. " +
        "<br/>I I am currently 22 years old, and originate from Togo (Africa) even though I have lived in Belgium for 13 years now." +
       "<br/>Currently I am an Applied Informatics student at the university college of Erasmus in Brussels. " +
        "<br/>This goes to show that I am an aspiring Software Developer."+
       "<br/><br/>After graduating -in 2023- I am planning on working and meanwhile study for another bachelor.",
    "gap":"small"
};
const card2 = {
    "id": "card2",
    "title": "So, what is this?",
    "class": "whatIsThis",
    "text": "At first I started making this portfolio by simply using HTML, CSS and JavaScript. After learning PHP in school\n" +
        "                        I made another version using that too. But after realising how much React JS is asced on the jobmarket, I decided to make the final version using\n" +
        "                            that." +
        " Not lightweight, since made this to try out Reactjs and many other js libraries for myself.",
    "gap": "none"
};
const cardContent = [card1, card2];

let colorRed = "rgba(168, 50, 80, 0.75)";
let colorOrange = "rgba(168, 105, 50, 0.85)";
let colorYellow = "rgba(168, 153, 50, 0.90)";
let colorBlack = "rgba(0, 0, 0, 0.20)"



function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}



function Frontpage(){

    const [selectedId, setSelectedId] = useState("");
    const [title, setTitle] = useState("");
    const [itemClass, setItemClass] = useState("");
    const [content, setContent] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [loaded, setLoaded] = useState(false);

    let stillPresent = false;
    //&& e.target !== document.getElementById("card1")
    //                     && e.target !== document.getElementById("card2")

    //Window resizing
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    //Infinite scroll
    let pageAt = 0;
    let items = [];
    // items.push(Frontpage);
    items.push(Projectpage);
    function loadFunc(){
        pageAt += 1;
        if (pageAt === 1)
            setHasMore(false);
        console.log(hasMore)
    }

    /**
     * THIERRY KLOUGBO animation
     */
    anime.timeline({loop: true})
        .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeInExpo",
            duration: 500,
            delay: (el, i) => 1000 + 30 * i
        }).add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 10000 + 30 * i
    });

    anime({
        targets: '.expCube',
        translateX: anime.stagger(-10, {grid: [5, 3], from: 'center', axis: 'x'}),
        translateY: anime.stagger(15, {grid: [5, 3], from: 'center', axis: 'y'}),
        rotateZ: anime.stagger([0, 90], {grid: [5, 3], from: 'center', axis: 'x'}),
        delay: anime.stagger(200, {grid: [5, 3], from: 'center'}),
        easing: 'easeInOutQuad'
    });

    return(
        <div className="frontPage">

            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<div className={"loader"} key={0}>Loading ...</div>}
            >
                {items}
            </InfiniteScroll>

            <div id={'outer_container'} className="grid-container1"
            onClick={(e) => {
                if(e.target !== document.getElementById(selectedId+"hovered")
                    && e.target !== document.getElementById(selectedId+"hoveredTitle")
                    && e.target !== document.getElementById(selectedId+"hoveredContent")
                    && stillPresent){
                    stillPresent = false
                    setSelectedId(null)
                }

            }}>

                <Grid className={"gromGrid"}
                      areas={[
                          {name: 'myname', start: [0, 0], end: [0, 0]},
                          {name: 'picMe', start: [2, 0], end: [2, 0]},
                          {name: 'card1', start:[0, 1], end: [1, 1]},
                          {name: 'card2', start: [2, 1], end: [2, 1]},
                          {name: 'experties', start:[0, 2], end: [2, 2]}
                      ]}
                      columns={['flex', 'small', 'flex']}
                      rows={['medium', 'small', 'medium']}
                      gap={"medium"}
                >

                    {cardContent.map(item => (
                        <Box gridArea={item.id} >
                            <motion.div  id={item.id} layoutId={item.id+"layout"} className={"card-body card " + item.class}
                                         onClick={() => {
                                             setTitle(item.title);
                                             setContent(item.text);
                                             setItemClass(item.class);
                                             document.getElementById(item.id).setAttribute("animate", "{{opacity: 0}}")
                                             setSelectedId(item.id);
                                         }}
                            >
                                <motion.div className="card-title">{item.title}</motion.div>
                            </motion.div>
                        </Box>
                    ))}

                    <Box gridArea={'myname'} gap={"small"}>
                        <h6 className={"introduction"}>Hello, I am</h6>
                        <h1 className={"ml12"}>
                            <span className='letter'>T</span>
                            <span className='letter'>H</span>
                            <span className='letter'>I</span>
                            <span className='letter'>E</span>
                            <span className='letter'>R</span>
                            <span className='letter'>R</span>
                            <span className='letter'>Y</span>
                            <span className='letter'> </span>
                            <span className='letter'>K</span>
                            <span className='letter'>L</span>
                            <span className='letter'>O</span>
                            <span className='letter'>U</span>
                            <span className='letter'>G</span>
                            <span className='letter'>B</span>
                            <span className='letter'>O</span>
                        </h1>

                    </Box>
                    <Box gridArea={'picMe'} className={"pictureMe"} animation={{type: "fadeIn", duration: 4000}} gap={"none"}/>

                    <Box gridArea={'experties'} className={"card-body card"} id={"expertiesCard"}>
                        <p className="card-title">My experties?</p>
                        <div className={"skillDiv"}>
                            <p className={"expTilte"}>Java:</p>
                            <Keyboard className={"expCube"} size={"large"} color={colorRed}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorOrange}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorYellow}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                        </div>
                        <div className={"skillDiv"}>
                            <p className={"expTilte"}>JS: </p>
                            <Keyboard className={"expCube"} size={"large"} color={colorRed}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorOrange}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorYellow}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                        </div>
                        <div className={"skillDiv"}>
                            <p className={"expTilte"}>HTML && CSS: </p>
                            <Keyboard className={"expCube"} size={"large"} color={colorRed}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorOrange}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorYellow}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                            <Keyboard className={"expCube"} size={"large"} color={colorBlack}/>
                        </div>


                    </Box>

                </Grid>

                {/*animate={{x: [0,100,0]}} transition={{ease: "easeOut", duration:1}}*/}
                <AnimatePresence>
                    {/*{const isPresent = useIsPresent()}*/}
                    {selectedId && (
                        <motion.div  id={selectedId+"hovered"} layoutId={selectedId+"layout"} className={"card-body card hoveredCard"}
                                     key={selectedId}
                                     initial={{ opacity: 0}}
                                     animate={{ opacity: 1, height: 'fit-content'}}
                                     transition={{delay: 0.25}}
                                     exit={{ opacity: 0, height: '100%'}}
                        >
                            <motion.div id={selectedId+"hoveredTitle"} className="card-title">{title}</motion.div>
                            <motion.p id={selectedId+"hoveredContent"} className="card-text"><Markup className={'content_markup'} content={content}/></motion.p>
                            {stillPresent = true}
                            {/*<motion.button onClick={() => setSelectedId(null)} >Close</motion.button>*/}
                        </motion.div>

                    )}
                </AnimatePresence>
            </div>
        </div>

    )
}

export default Frontpage;