
function MapList({data, ol = false}) {
  const items = data.map(
    (element, index) => <li key={`${element}-${index}`}>{element}</li>
  )
  if (ol) {
    return (
      <ol>{items}</ol>
    );
  }
  return (
    <ul>{items}</ul>
  );
}

export default MapList;
