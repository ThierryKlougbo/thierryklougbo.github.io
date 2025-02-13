
import React, {useState, Component, useEffect} from 'react';
import {useIsPresent, AnimatePresence, motion} from 'framer-motion';
import "./Frontpage.css";
import InfiniteScroll from "react-infinite-scroller";
import Projectpage from "./Projectpage";
import anime from 'animejs/lib/anime.es.js';
import {Markup} from "interweave";
import {Box, Grid} from "grommet";
import {Cube, Keyboard} from 'grommet-icons'

const currentDate = new Date();
const birthDate = new Date('November 11, 1999')
const ageInMilliseconds = currentDate - birthDate;
const ageUnrounded = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
const age = Math.round(ageUnrounded)
const timesLived  = age - 7

const card1 = {
    "id": "card1",
    "class": "whoIAm",
    "title": "About Me",
    "subtitle": "Who Am I?",
    "text": `<p></br>I'm a <b>${age}-year-old junior software developer</b> with <b>two years of experience</b> in software development.</br>
Although originally I am from Togo (West-Africa) I have lived in Belgium for ${timesLived} years now and am fluent in Dutch, English and French.</br></br>
I have hands-on experience in <b>Android development</b> as well as <b>frontend Web development using React</b>. All in all, I am very passionate about both <b>front-end and back-end engineering</b>, and I’m always eager to expand my skills and take on new challenges to build efficient, user-friendly applications.</br></br>
Now beyond coding, I also enjoy <b>photography, cycling, gaming, and watching series</b>—I’m always looking for new ways to stay creative and inspired.</br></br>
Feel free to explore my work, and let’s connect!</p>`,
    "gap":"small"
};
const card2 = {
    "id": "card2",
    "title": "About This Portfolio",
    "class": "whatIsThis",
    "text": `<p></br>At first, I started making this portfolio by simply using HTML, CSS and JavaScript. 
    But after learning about <b>React</b> in school, I decided that would be way more interesting for this project. 
    So I built it with <b>React</b>, written in <b>JavaScript</b>.
    </br> It incorporates some libraries, including <a href="https://animejs.com/documentation/" target="_blank">Anime.js</a> for animations.
    </br></br> I originally created this portfolio as a way to experiment with new <b>JavaScript libraries</b> and I am planning on expanding and improving it as I continue to grow as a developer.
    </br></br> On the <b>Projects</b> page, I keep track of <b>relevant personal projects</b> that I’ve worked on, showcasing my progress and experience in SD.
    </br></br> Feel free to explore, and thanks for stopping by! 🚀</p>`,
    "gap": "none"
};
const cardContent = [card1, card2];

let colorRed = "rgba(168, 50, 80, 0.75)";
let colorOrange = "rgba(168, 105, 50, 0.85)";
let colorYellow = "rgba(168, 153, 50, 0.90)";
let colorBlack = "rgba(0, 0, 0, 0.20)"
let colorDarkGreen = "rgba(0, 100, 0, 0.90)"
let colorGreen = "rgba(0, 180, 0, 0.9)"



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
            delay: (el, i) => 1000 + 95 * i
        }).add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 10000 + 30 * i
    });


    anime.timeline({loop:false})
    .add({
        targets: '.expCubeRed',
        rotate: {value: -90},
    }).add({
        targets: '.expCubeRed',
        rotate: {value: -50, duration:1600},
    })

    anime.timeline({loop:false})
    .add({
        targets: '.expCubeOrange',
        translateX: {value: -6},
        rotate: {value: -90},
    }).add({
        delay:200,
        targets: '.expCubeOrange',
        rotate: {value: -55, duration:1400},
    })

    anime.timeline({loop:false})
    .add({
        targets: '.expCubeYellow',
        translateX: {value: -13},
        rotate: {value: -90},

    }).add({
        delay:400,
        targets: '.expCubeYellow',
        rotate: {value: -60, duration:1400},
    })

    anime.timeline({loop:false})
    .add({
        targets: '.expCubeGreen',
        translateX: {value: -20},
        rotate: {value: -90},

    }).add({
        delay:600,
        targets: '.expCubeGreen',
        rotate: {value: -70, duration:1600},
    })  
    
    anime.timeline({loop:false})
    .add({
        targets: '.expCubeDarkGreen',
        translateX: {value: -27},
        rotate: {value: -90},

    }).add({
        delay:800,
        targets: '.expCubeDarkGreen',
        // rotate: {value: -50, duration:1600},
    })

    
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
                        <Box key={item.id} gridArea={item.id}>
                            <motion.div
                                id={item.id}
                                layoutId={item.id + "layout"}
                                className={`card-body card ${item.class}`} 
                                onClick={() => {
                                    setTitle(item.title);
                                    setContent(item.text);
                                    setItemClass(item.class);
                                    setSelectedId(item.id);
                                }}
                                animate={{ opacity: 1 }}
                            >
                                <motion.div className="card-title">{item.title}</motion.div>
                            </motion.div>
                        </Box>
                    ))}
                    <Box gridArea={'myname'} gap={"small"}>
                        <h6 className={"introduction"}>Hello There, I am</h6>
                        <h1 className={"ml12"}>
                            <div className={"name_background"}>
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
                            </div>
                        </h1>
                    </Box>
                    <Box gridArea={'picMe'} className={"pictureMe"} idd={"picMegrid"} animation={{type: "fadeIn", duration: 4000}} gap={"none"}/>
                    <Box gridArea={'experties'} className={"card-body card"} id={"expertiesCard"}>
                        <p className="card-title">My Skills</p>
                        <div className='skillDivRow'>
                            <div className={'skillDivColumn'}>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>Java:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorBlack}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorBlack}/>
                                </div>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>JS & TS:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorGreen}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorBlack}/>
                                </div>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>HTML & CSS:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorGreen}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorDarkGreen}/>
                                </div>
                            </div>
                            <div className={'skillDivColumn'}>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>Python:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorBlack}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorBlack}/>
                                </div>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>PHP:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorBlack}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorBlack}/>
                                </div>
                                <div className={"skillDiv"}>
                                    <p className={"expTilte"}>Liquid:</p>
                                    <Keyboard className={"expCubeRed"} size={"medium"} color={colorRed}/>
                                    <Keyboard className={"expCubeOrange"} size={"medium"} color={colorOrange}/>
                                    <Keyboard className={"expCubeYellow"} size={"medium"} color={colorYellow}/>
                                    <Keyboard className={"expCubeGreen"} size={"medium"} color={colorGreen}/>
                                    <Keyboard className={"expCubeDarkGreen"} size={"medium"} color={colorDarkGreen}/>
                                </div>
                            </div>
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