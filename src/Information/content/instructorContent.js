import React from 'react';
import {
    paragraph, 
    sectionHeading, 
    orderedList,
    link,
    embededVideo,
} from './contentTags'

const instructorContent = {
    title: "Instructor Tutorials",
    data: [
        sectionHeading("Introduction"),
        paragraph("These tutorials will help instructors learn how to create and share assignments. They will cover:"),
        orderedList([
            "Creating basic written and dictation assignments",
            "Configuring your scores on Noteflight to allow auto-grading",
            "Optimizing your Noteflight scores for easy grading",
            "Additional grading configurations",
        ]),
        paragraph("Note: Assignments are built using Noteflight scores. If you are not familiar with the Noteflight platform, I suggest that you visit the link below for tutorials on how to use their product."),
        link("Noteflight User Guide", "https://www.noteflight.com/guide"),

        sectionHeading("Creating Assignments"),
        paragraph("To create a new assignment, go to the new assignment tab in the navigation at the top of the site. There, you will be presented with a number of options for how to configure your assignment."),
        paragraph("There are two required entries: both URLs linking to scores on Noteflight. The assignment score should be the score that displays to the user, without any of the answers marked. The answer score should be a copy of the assignment score, but with all the answers marked exactly as you would like them to be graded."),
        paragraph('Additionally, you may choose between "Written" and "Dictation" assignments. There is no difference in how the two are graded, but a "Dictation" assignment will allow users to play audio from the answer score, and a "Written" assignment will not. There are also a few other available options for dictations, such as setting a maximum play count, and disabling audio playback from the user score.'),
        embededVideo("naE7fK-gCPs"),

        sectionHeading("Configuring Scores on Noteflight"),
        paragraph("In order for users to be able to view the scores in your assignments, and for the auto-grading to work, you must share your scores on Noteflight correctly."),
        paragraph('Once your assignment and answer scores are set to your liking, you need to share them with individual people, groups, or all users. To do this, go to "Score Details" in the upper right hand corner of the screen, and then to the "Share" menu. If you intend for your assignment to only be viewed by a few people, you can choose to share your score with them directly, or with a group they are in. If you want you assignment to be usable by anyone, you should set sharing privileges to "Everyone".'),
        paragraph('To enable auto grading, you must also check the box in the share settings labled "Let people copy & export this score" at the bottom of the share window.'),
        embededVideo("d92ZQmSOWGE"),

        sectionHeading("Suggested Practices for Creating Assignment Scores"),
        
        
        sectionHeading("Additional Grading Options"),



    ]

}

export default instructorContent;