import '../../../App.css'
import Container from '../../common/Section/Container';
import NameplateHeading from './Heading.js'
import NameplateInner from './Inner.js'
/**
 * Eli Jayson
3063 NW 9st Ave
Coral Springs, FL 33065
386.451.3843 eligence@gmail.com
 * @returns 
 */

function Nameplate() {
  return (
    <>
      <Container>
        <NameplateHeading/>
        <NameplateInner/>
      </Container>
    </>
    
  );
}

export default Nameplate;
