import React,{useState, useEffect} from 'react';

const Moods = (props) => {
        
    const [shorts, setShorts] = useState([]);
    const [loading, isLoading] = useState(false);
    const mood = props.mood;
    let show;

    const getData = async () => {

        isLoading(true);

        const response = await fetch(`${mood}.json`);

        const data = await response.json();

        setShorts(data.songs);
        isLoading(false);
    }

    useEffect(()=>{
        getData()
        console.log(shorts)
        
        
    },[props.mood]);

    
    
    

    return(
    <>
    <div className="scroll">
    {shorts.map( (short)=>
       (
        <iframe width="420" frameborder="0" wmode="Opaque" height="315"
        src={short}>
            
        </iframe>

       
           
       )
       )}
    </div>
   
    </>
    )
}

export default Moods;