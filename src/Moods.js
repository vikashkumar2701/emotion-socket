import React,{useState, useEffect} from 'react';

const Moods = (props) => {
        
    const [content, setContent] = useState([]);
    const mood = props.mood;
    let show;

    const getData = () => {
        fetch("Moods.json",{
            headers: {
                'Content-type':'application/json',
            }
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(mydata => {
            console.log(mydata);
            setContent(mydata);
        })
    }

    useEffect(()=>{
        getData()
    },[]);
    
    console.log(mood);
    if(mood == 'happy'){
        show = content.songs;
    }
    else if(mood == 'sad'){
        show = content.shorts;
    }
    else if(mood == 'angry'){
        console.log(content.songs);        
    }
    return <h1>{show}</h1>;
}

export default Moods;