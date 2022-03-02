import React,{useState, useEffect} from 'react';

const Shorts = (props) => {
        
    const [shorts, setShorts] = useState([]);
    const [loading, isLoading] = useState(false);
    const mood = props.mood;
    let show;

    const getData = async () => {

        isLoading(true);

        const response = await fetch(`${mood}.json`);

        const data = await response.json();

        setShorts(data.meme);
        isLoading(false);
    }

    useEffect(()=>{
        getData()
        console.log(shorts)
        console.log(shorts)
        
    },[props.mood]);

    
    
    
    

    return(
    <>
    <div className="scroll">
    {shorts.map( (item)=>
       (
          
        <img src={item} width="420" height="315"/>
           
       )
       )}
    </div>
   
    </>
    )
}

export default Shorts;