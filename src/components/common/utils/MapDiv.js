
function MapDiv({data}) {
  return (
    <>
      <div>{
            data.map(
                (element, index) => <div key={`${element}-${index}`}>{element}</div>
            )
        }</div>
    </>
    
  );
}

export default MapDiv;
