import React from 'react';
import {paragraph, sectionHeading, orderedList} from './contentTags'

const studentContent = {
    title: "Student Tutorials",
    data: [
        sectionHeading("Getting Started"),
        paragraph("If you received or found a link to an assignment on this site, welcome! The following tutorials well help you by:"),
        orderedList([
            "Showing how to interact with written and dictation assignments", 
            "Explaining how assignment are gradeds, and how incorrect errors are displayed",
            "Showing how to sign and submit a completed assignemt to a course or instructor",
            "showing how to view the answer key to an assignment after it has been completed"
        ]),
    ],

}

export default studentContent;