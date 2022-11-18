// import '../../../App.css'
import MapList from "../../common/utils/MapList";
// loop list in grid
function Job({data}) {
  const { 
    company,
    title,
    dates,
    location,
    responsibilities 
  } = data;


    /**
     * company / title
     * date.start - date.end
     */
  return (
    <div className="Inner grid grid-cols-5 gap-4">
      <h3>
        <span>{company}</span>
        <span>/</span>
        <span>{title}</span>
      </h3>
      <h4>
        <span>{dates.start}</span>
        <span>-</span>
        <span>{dates.end},</span>
        <span>{location}</span>
      </h4>
      <MapList data={responsibilities}/>
    </div>
  );
}

export default Job;
