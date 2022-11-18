import listEducation from '../../../data/listEducation';
import '../../../App.css'
import Institution from './Institution';
// import jobs from './Jobs/data.js'

// loop list in grid
function Inner() {
  return (
    <div className="Inner">
      {listEducation.map(j => <Institution data={j}/>)}
    </div>
  );
}

export default Inner;
