// import '../../App.css'


function Heading(props) {
  const {headingText} = props;
  return (
    <div className='SectionHeading'><h1>{headingText}</h1></div>
  );
}

export default Heading;
