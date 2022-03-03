import React,{useState, useEffect} from 'react';

const Motivation = (props) => {
        
    const [shorts, setShorts] = useState([]);
    const [loading, isLoading] = useState(false);
    const mood = props.mood;
    let show;

    const getData = async () => {

        isLoading(true);

        const response = await fetch(`${mood}.json`);

        const data = await response.json();

        setShorts(data.motivation);
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
        <img src={short} width="410" height="315"/>
            
        

       
           
       )
       )}
    </div>
   
    </>
    )
}

export default Motivation;