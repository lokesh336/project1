import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/location.css';
import Button from 'react-bootstrap/Button';
import img1 from './image/location/01.jpg';
import img2 from './image/location/02.jpg';
import img3 from './image/location/03.jpg';
import img4 from './image/location/04.jpg';
import img5 from './image/location/05.jpg';
import img6 from './image/location/06.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Location (){

    return(
        <>
         <Container fluid className="loc">
            <Row>
                <Col sm={12} className="loc">
                  <h1 className="loctitles">Popular <span className="locround">Loc</span>ations</h1>
                  <Button className="locbtn" variant="outline-danger">View All<ArrowCircleRightIcon/></Button>
                  <p className="locpara">Stay by selecting your favuorite location and explore the goods</p>
                </Col>
                <Row>
                    <Col sm={4}>
                        <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img1} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">Australia</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img2} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">Canada</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img3} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">China</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}> <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img4} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">France</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div></Col>
                    <Col sm={4}>
                    <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img5} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">United Kingdom</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col sm={4}> <div className="tourcard">
                        <Row>
                        <Col sm={5}>
                        <img src={img6} className="imgloc"  alt="imgloc"/> 
                        </Col>
                        <Col sm={7}>
                            <h6 className="locplc">USA</h6>
                            <p className="locad">1 Ad posted</p>
                            <p className="viewcard">View Details</p>
                            
                        </Col>
                        </Row>
                        </div></Col>
                </Row>
            </Row>
         </Container>
        
        
        </>
    )
}
export default Location;