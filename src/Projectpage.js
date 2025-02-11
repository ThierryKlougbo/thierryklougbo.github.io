
import React, {useEffect, useState} from 'react';
import {Box, Grid} from 'grommet';
import "./Projectpage.css";
import {AnimatePresence, motion} from "framer-motion";
import {Markup} from "interweave";
import { Github } from 'grommet-icons';
import {VscGithub} from "react-icons/vsc";

const cardCoursetimer = {
    "id": "cardCoursetimer",
    "class": "projCard",
    "title": "CourseTimer",
    "subtitle": "A timer app made entirely to my linking",
    "text": `<p><br/>CourseTimer is an app with an essential simple goal, making it possible to track the time I spend for any specific course.  
    <br/><br/> Although it is still deep in production, it is already possible to make an account and start timing.<br/>  
    Later on, I'd also like to add features such as: graphs on which users can see how much they've studied per day, week, month, etc.
    <br/><br/><b>Technologies used:</b>  
    <br/> CourseTimer is made in <b>Native Android</b> with <b>Java</b> for the BE and good old <b>XML</b> for the layout  
    (I promise I’ll remake it in Kotlin Compose one day 😉).  
    <br/>Furthermore, I use Firebase as a means to store user data in the cloud. This also includes login data.  
    There is a possibility that I will move this to a SQL database though, as they seem better for more complex data.  
    <br/><br/> <b>Download the CourseTimer apk from my GitHub page and try it for yourself.</b> <br/>  
    <a href='https://github.com/Theirry/Course-Timer-apk/releases' target='_blank'>CourseTimer</a>  
    </p>`

};//<a href='https://github.com/Theirry/CoursTimer/releases' target='_blank'>CourseTimer</a>
const cardUltimata = {
    "id": "cardUltimata",
    "class": "projCard",
    "title": "Discord bot: Ultimata",
    "subtitle": "My ultimate Discord bot",
    "text": `<p><br/><b>What is Ultimata?</b>
    <br/><br/>Utimatly it is a conjoined version of all the Discord bots I had made till now.
    <br/>Ultimata thereby has numerous different functions, and almost all of them have one sing goal; making my day just that little bit better.
    <br/><br/> I started making this bot during the Covid pandemic. As you may know, this was a very lonely time for a lot of people. Me being a software developer student / hermit at the time… I was thriving! I was practically stuck at home for most days, and thus I did as any like me would. Make a discord channel with my friends and inserting a very irritating, jet funny and quirky bot in it. 
    <br/><br/> - In need of a joke or a funny GIF? Ultimata has got you!
    <br/> - Are the server members using vulgar language? Let Ultimata handle them by giving them a taste of their own medicine!
    <br/> - Just bored and in need of some randomness? Ask Ultimata to tell you random (factless) facts generated using <b>GPT2</b> based on the YouTube scripts of the YouTuber VSauce!
    <br/><br/><b>Technologies used:</b>
    <br/>Ultimata is made in <b>Java</b> and hosted on my own server at home, using <b>docker</b>.
    <br/>So don’t be alarmed if it seems down at the moment, since at times I shut the server down.
    <br/><br/> Why don’t you try it out for yourself in the Discord embedded window and see! (You may need to log in to Discord to do so)</p>`
};
const cardContent = [cardCoursetimer, cardUltimata];

function Projectpage(){

    const [selectedId, setSelectedId] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [itemClass, setItemClass] = useState("");
    const [content, setContent] = useState("");

    let stillPresent = false;

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


    return(
        <div className={"projectpage"}>

            <div id={'outer_container'}
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
                    {name: 'cardCoursetimer', start: [0, 0], end: [0, 0]},
                    {name: 'cardUltimata', start: [0, 1], end: [0, 1]},
                    {name: 'coursetimerPic', start:[1, 0], end: [1,0]},
                    {name: 'discordFrame', start: [1, 1], end: [2, 1]}
                    ]}
                    columns={['flex', 'flex', 'flex']}
                    rows={['flex', 'medium']}
                    gap='medium'
                    >

                    {cardContent.map(item => (
                        <Box gridArea={item.id} >
                            <motion.div  id={item.id} layoutId={item.id+"layout"} className={"card-body card " + item.class}
                                         onClick={() => {
                                             setTitle(item.title);
                                             setContent(item.text);
                                             setItemClass(item.class);
                                             setSubtitle(item.subtitle);
                                             document.getElementById(item.id).setAttribute("animate", "{{opacity: 0}}")
                                             setSelectedId(item.id);

                                         }}
                            >
                                <motion.div className="card-title">{item.title}</motion.div>
                                <motion.div id={item.id + `_backim`} />
                            </motion.div>
                        </Box>
                    ))}

                    <Box gridArea={'coursetimerPic'} id={'coursePic'} animation={{type: "fadeIn", duration: 2000}}/>
                    <Box gridArea={'discordFrame'} animation={{type: "fadeIn", duration: 2000}}>
                        <iframe src="https://e.widgetbot.io/channels/963175225032339540/963175225569189982" height="600" width="100%"></iframe>
                    </Box>

                </Grid>
            </div>

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
                        <motion.div id={selectedId+"hoveredTitle"} className="card-title">{subtitle}</motion.div>
                        <motion.p id={selectedId+"hoveredContent"} className="card-text"><Markup className={'content_markup'} content={content}/></motion.p>
                        {stillPresent = true}
                        {/*<motion.button onClick={() => setSelectedId(null)} >Close</motion.button>*/}
                    </motion.div>

                )}
            </AnimatePresence>

        </div>

    )
}

export default Projectpage;