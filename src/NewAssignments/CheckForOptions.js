import React from 'react';

const CheckForOptions = () => {

    return(
        <div id="check-for-options">
            <h5>Check For:</h5>
            <label>Text</label>
            <input id="text" className="check-for" type="checkbox" /><br/>

            <label>Slurs</label>
            <input id="slurs" className="check-for" type="checkbox" /><br/>
            
            <label>Roman Numeral Analysis</label>
            <input id="rna" className="check-for" type="checkbox" /><br/>
            
        </div>
    )

}

export default CheckForOptions;