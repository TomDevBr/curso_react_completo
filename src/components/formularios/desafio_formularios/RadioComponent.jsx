import React from "react";
const Radio = ({pergunta, options, onChange, value, active, id}) => {

    if (active === false) return null;
    return (
      <>   
             <fieldset style={{
                padding:'2rem',
                marginBottom:'1rem',
                border: '2px solid #eee'
             }}>
             <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
             {options.map(option => (
                 <label key={option} style={{display: 'flex', flexDirection: 'row', marginBottom: '1rem', fontFamily: 'monospace'}}>
                    <input
                    style={{width: 'min-content'}}
                    type="radio"  
                     id={id} 
                     checked={value === option} 
                     value={option} onChange={onChange}/>
                     {option}
                 </label>
             ))}
         </fieldset>
      </>
    );
  };

  export default Radio;