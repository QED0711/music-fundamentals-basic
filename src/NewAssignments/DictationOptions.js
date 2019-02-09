import React from 'react';

const DictationOptions = () => {

    return(
        <div id="dictation-options">
            <label>Play Count (0 = infinite)</label><br/>
            <input id="play-count" type="number" defaultValue="0" min="0" required/><br/>

            <label>Prevent Student Score Playback</label><br/>
            <input id="prevent-playback" type="checkbox"/>

        </div>
    )

}

export default DictationOptions;