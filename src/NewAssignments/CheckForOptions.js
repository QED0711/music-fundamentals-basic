import React from 'react';

/* 
IMPORTANT:

Any new options you add here must also be added to the ignoreKeys file
This is so the comparison method will default to ignoring those items
Checking them here will then switch them off in ignoreKeys, and they will be graded when comparing scores

*/

const CheckForOptions = () => {

    return(
        <div id="check-for-options">
            <h5>Check For:</h5>

            <label>Slurs/Phrase Marks</label>
            <input id="slurs" value="slur" className="check-for" type="checkbox" /><br/>
            
            <label>Roman Numeral & Chord Analysis</label>
            <input id="rna" value="chordSymbol" className="check-for" type="checkbox" /><br/>
            
            <label>Other Text</label>
            <input id="text" value="performance" className="check-for" type="checkbox" /><br/>
            
        </div>
    )

}

export default CheckForOptions;