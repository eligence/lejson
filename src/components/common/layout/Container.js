import '../../../App.css'


function Container(props) {
  const { children } = props
  return (
    <section className='Container'>{children}</section>
  );
}

export default Container;
