import React from 'react';

const DictationOptions = () => {

    return(
        <div id="dictation-options">
            <label>Play Count (0 = infinite)</label><br/>
            <input type="number" defaultValue="0" minimum="0" required/><br/>

            <label>dissable assignment score playback</label><br/>
            <input type="checkbox" checked />

        </div>
    )

}

export default DictationOptions;