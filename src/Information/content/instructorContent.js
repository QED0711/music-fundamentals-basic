import React from 'react';
import {
    paragraph, 
    sectionHeading, 
    orderedList,
    unorderedList,
    link,
    // embededVideo,
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
        // embededVideo("naE7fK-gCPs"),

        sectionHeading("Configuring Scores on Noteflight"),
        paragraph("In order for users to be able to view the scores in your assignments, and for the auto-grading to work, you must share your scores on Noteflight correctly."),
        paragraph('Once your assignment and answer scores are set to your liking, you need to share them with individual people, groups, or all users. To do this, go to "Score Details" in the upper right hand corner of the screen, and then to the "Share" menu. If you intend for your assignment to only be viewed by a few people, you can choose to share your score with them directly, or with a group they are in. If you want you assignment to be usable by anyone, you should set sharing privileges to "Everyone".'),
        paragraph('To enable auto grading, you must also check the box in the share settings labled "Let people copy & export this score" at the bottom of the share window.'),
        // embededVideo("d92ZQmSOWGE"),
        
        sectionHeading("Additional Grading Options"),
        paragraph("You can optionally specify other musical elements that you want the program to grade. None of these elements are graded by default. These elements are detaild below:"),
        unorderedList([
            "Slurs & Phrase Marks: this checks slur marks between two notes. It does not check the exact positioning of te slurs, but only that they start and end on the correct note.",
            'Roman Numeral & Chord Analysis: This will check for any text made with the "Chord" text tool. For these, upper vs lower case does matter, and an answer will read as incorrect if it does not match the exact capitalization.',
            'Other Text: This would be anything created with the "Text" tool. For this, spelling will matter, but capitalization will not. This is best used for simple text answers, like indicating intervals, cadence types, etc.',
        ]),

        sectionHeading("Suggested Practices for Creating Assignment Scores"),
        paragraph("When creating your assignments, it is important to keep in mind that users must know exactly what to enter and where to enter it in order to pass the assignments. Therefore, I recommend the following as general guidlines for creating well structured music assignments:"),
        unorderedList([
            "Include written instructions when able, either in the document that links to the assignment, or the assignment itself.",
            "Use colors to highlight where users should place their answers. As an example, if they need to add notes, highlight the rests where their notes should go. If they need to add text, create a text object where you would like it, and higlhight it (requires Noteflight premium to add colors).",
            "Avoid requiring overly specific answers. This could be something like requiring full sentences for text answers, or precise rhythms that require an exact sequence of notes and rests.",
            "Avoid ambiguous questions. Make sure there is a single answer to the questions you ask.",
            "Keep assignments simple, and focus on just one or two things. If an assingment has too many elements in it, it can be challenging for users to remember everything they are supposed to enter.",
            "Always do your own assignments after you make them to ensure they can be completed as you designed."
        ]),
        paragraph("Example assignments can be found at the links below:"),
        link("Name the Note", "https://bit.ly/2XyFt8J"),
        link("Writing Major Scales", "https://bit.ly/2GWV1hs"),
        link("Simple Melodic Dictation", "https://bit.ly/2EwLQkq"),

        sectionHeading("Editing Assignments After They Have Been Created"),
        paragraph("This program does not save any information you enter when you create an assignment. Rather, the link that is generated when you create your assignment contains everytning needed to recreate it when a user follows that link. While this allows for an unlimited number of assignments, you cannot edit any assignment parameters after you generate a link because any edits to the parameters would cause the link to change."),
        paragraph("However, you can still edit the assignment and answer scores on Noteflight, and those changes will be reflected in you assignment. So if you want to add a few more examples, or change the answer to an existing example, you can do this on Noteflight in the linked scores.")
        
    ]

}

export default instructorContent;