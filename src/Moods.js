import React,{useState, useEffect} from 'react';

const Moods = (props) => {
        
    const [content, setContent] = useState([]);
    const [loading, isLoading] = useState(false);
    const mood = props.mood;
    let show;

    const getData = async () => {

        isLoading(true);

        const response = await fetch(`${mood}.json`);

        const data = await response.json();

        setContent(data);
        isLoading(false);
    }

    useEffect(()=>{
        getData()
    },[]);
    
    console.log("songs = "+content.songs);

    if(content.songs)
        show = content.songs[1];
    console.log("show = "+show);

    return(
    <>
        {loading && <div>loading...</div>}

        {!loading &&
            <iframe width="420" height="315"
                src={show}>
            </iframe>
        }
    </>)
}

export default Moods;