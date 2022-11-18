function Institution({data}) {
  const { 
    school,
    degree,
    date,
    location
  } = data;

  return (
    <div className="Inner grid grid-cols-5 gap-4">
      <h3>
        <span>{school}</span>
        <span>/</span>
        <span>{degree}</span>
      </h3>
      <h4>
        <span>{date.start}</span>
        <span>-</span>
        <span>{date.end},</span>
        <span>{location}</span>
      </h4>
    </div>
  );
}

export default Institution;
