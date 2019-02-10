import React from 'react';

const DictationOptions = () => {

    return(
        <div id="dictation-options">
            <label>Play Count (0 = Unlimited)</label><br/>
            <input id="play-count" type="number" defaultValue="0" min="0" required/><br/>

            <input id="prevent-playback" type="checkbox"/>
            <label for="prevent-playback">Prevent Student Score Playback</label>

        </div>
    )

}

export default DictationOptions;