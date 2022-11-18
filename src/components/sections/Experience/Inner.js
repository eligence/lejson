import listJobs from '../../../data/listJobs';
import '../../../App.css'
import Job from './Job';
// import jobs from './Jobs/data.js'

// loop list in grid
function Inner() {
  return (
    <div className="Inner">
      {listJobs.map(j => <Job data={j}/>)}
    </div>
  );
}

export default Inner;
