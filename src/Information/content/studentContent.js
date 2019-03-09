import React from 'react';
import {
    paragraph, 
    sectionHeading, 
    orderedList,
    link,
    // embededVideo,
} from './contentTags'

const studentContent = {
    title: "Student Tutorials",
    data: [

        sectionHeading("Introduction"),
        paragraph("If you received or found a link to an assignment on this site, welcome! The following tutorials well help you by:"),
        orderedList([
            "Showing how to interact with written and dictation assignments", 
            "Explaining how assignment are gradeds, and how incorrect errors are displayed",
            "Showing how to generate a unique token as proof of completion",
            "showing how to view the answer key to an assignment after it has been completed"
        ]),
        paragraph("Note: Assignments are built using Noteflight scores. If you are not familiar with the Noteflight platform, I suggest that you visit the link below for tutorials on how to use their product."),
        link("Noteflight User Guide", "https://www.noteflight.com/guide"),
        
        sectionHeading("Interacting With Assignments"),
        paragraph('For both written and dictation assignments, you can check your work at any time by pressing the "Check My Work" button below the score. If everything matches the answer template, you will be allowed to sign and submit your assignment. Otherwise, any incorrect answers will be shown on the score. '),
        paragraph('For dictation assignments, you can also play the dictation excerpt by pressing the "Play Dictation" button above the score. Depening on how the assignment was setup, you may have a limited number of playings available on any single attempt of the assignment.'),
        paragraph("NOTE: Interacting with assignments only works after they have been propery loaded from the noteflight server. Occasionally, there may be an issue connecting to the server, and neither of the previously mentioend buttons will do anything. If this is the case, simple refresh the page, and it should work after a few attempts."),
        // embededVideo("HaBQfSAVt0s"),

        sectionHeading("Assignment Grading & Error Display"),
        paragraph("All assignments are checked for correct notes and rhythms, plus any additional grading criteria that the assignment designer may have set."),
        paragraph('When you check your work, the program checks each measure individually against the answer template. If anything is found to be a mismatch, then the measure will be highlighted to indicate that there is an error.'),
        paragraph('If the assignment requires a chord/roman numeral analysis, upper case vs lower case letters will matter. Other text, like that which you might find above the staff, are not graded for case.'),
        paragraph('If there are errors when the assignment is graded, you can visually step through each measure to see where your errors are. As you step through the errors, you can see what you got right, what you got wrong, and make adjustments as needed.'),
        // embededVideo("Da8-QfGemgo"),

        sectionHeading("Signing & Submitting Your Work"),
        paragraph("If you are doing an assignment for a course, and need proof that you completed it, the application can generate a unique token as proof of your completion. Once an assignment has been completed, and there are no errors, you will be allowed to sign your name and submit. Upon submitting, a token, unique to your signature and time the assignment was completed, will be generated. You can then copy this token and provide it as proof to any instructor that you completed the assignment. They can then verify the token to ensure its authenticity."),
        paragraph("NOTE: Even if you are not completing the assignment for part of a course, you may still wish to generate a token and save it for later. This token will also allow you to view the answer template at a later date, without having to redo the assignment."),
        // embededVideo("nsnyl8llfH4"),

        sectionHeading("Viewing the Answer Key After Completion"),
        paragraph("After you have completed an assignment, signed your name, and generated a unique token, you can view the answer key. This is particularly helpful if you want to review the answers later to help you study."),
        paragraph('In the navigation menu of this site, go to the tab titled "Check Token". Here, you will be able to paste your token to authenticate it. Once authenticated, there will be an option to "View Answers". Click this link, and you will be taken to the answer template for the assignment.'),
        // embededVideo("OFt3SThGi7M"),
    ],

}

export default studentContent;