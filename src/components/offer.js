import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/offer.css';
import Button from 'react-bootstrap/Button';
import img1 from './image/offer/whitebg.png';
import img2 from './image/offer/offer.png';


function Offer(){
    return(
        <>
        <Container fluid className="offimg" style={{ backgroundImage:`url(${img1})` }}> 
          <Row>
            <Col sm={7}>
             <h1 className="offhead">Earn Cash by Selling or Find<br/>Anything You desire</h1>
             <p className="offpara">There are Variations of Passages of Lorem Ipsum avaliable ,but the majority have<br/>
              suffered alterrationin some form,by injected humo or randomised words which don't <br/>look your slightlys</p>
              <Button  className="btnadd"variant="danger">Post your Ads</Button>
              <Button  className="btnbrowse "variant="outline-secondary">Browse Ads</Button>

            </Col>
            <Col sm={5}>
            <img src={img2} className="imgoffer"  alt="img1"/> 
            </Col>
          </Row>

        </Container>
        </>
    )
}

export default Offer;