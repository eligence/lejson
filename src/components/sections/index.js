import React from "react";
// import Education from './Education'
// import Experience from './Experience'
import Nameplate from './Nameplate'
import Skills from './Skills'

const sections = [
    {
      name: 'nameplate',
      component: Nameplate
    },
    {
      name: 'skills',
      component: Skills
    },
    // {
    //    // Education,
    //     // Experience,
    //     Nameplate,
    //     Skills
    // }
];
 
function Section (section) {
  if (typeof section.component !== "undefined") {
    return React.createElement(section.component);
  }
}

function RenderSections () {
    sections.map(section => Section(section))
}

export default RenderSections;