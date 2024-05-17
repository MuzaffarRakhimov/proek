import React, { useState ,useContext } from 'react'

const Malumot = () => {
    const [ism,setIsm]=useState('');
    const [famle,setFamle]=useState('')
    const [value, setValue] =useState('')
    const qabul=()=>{
        if(ism.length !== 0 && famle.length !== 0){
            return setValue(ism + famle)
        }
        else{
            return setValue('malumot xato..')
        }
        
    }

  return (
    <div>
       <br/> <br/> <br/> <br/>

       <input onChange={(e)=>setIsm(e.target.value)} value={ism} />
       <input onChange={(e)=>setFamle(e.target.value)} value={famle} />
       <button onClick={qabul }>submit</button>
         
         <h1>{value}</h1>
       
    </div>
  )
}

export default Malumot