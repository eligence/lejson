import '../../../App.css'
import MapDiv from '../../common/utils/MapDiv';
import listSkills from '../../../data/listSkills'
// loop list in grid
function Inner() {
  return (
    <div className="Inner grid grid-cols-5 gap-4">
     <MapDiv data={listSkills}/>
    </div>
  );
}

export default Inner;
