import '../../../App.css'

// loop list in grid
function Inner() {

  const skills = [
    'OOP', 
    'SQL', 
    'REST APIs', 
    'DevOps', 
    'Unit Testing', 
    'ES6', 
    'VueJS',
    'ReactJS',
    'NPM',
    'Jest',
    'Linux',
    'Vagrant',
    'Docker',
    'Bash',
    'Terminal',
    'Laravel',
    'PHP7',
    'Git',
    'Scrum',
    'Agile'
  ]
  return (
    <div className="Inner grid grid-cols-5 gap-4">
       {skills.map(skill => <div>{skill}</div>)}
    </div>
  );
}

export default Inner;
