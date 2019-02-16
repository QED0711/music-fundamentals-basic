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
            <hr/>
            <h2>Grading Options:</h2>
            <p>
                All assignments are checked for correct pitches and rhythms. 
                You can select additional grading criteria from the list below (these will not be checked for by default)
            </p>
            <input id="slurs" value="slur" className="check-for" type="checkbox" />
            <label for="slurs" >Slurs/Phrase Marks</label><br/>
            
            <input id="rna" value="chordSymbol" className="check-for" type="checkbox" />
            <label for="rna">Roman Numeral & Chord Analysis</label><br/>
            
            <input id="text" value="performance" className="check-for" type="checkbox" />
            <label for="text">Other Text</label>
            <hr/>
        </div>
    )

}

export default CheckForOptions;