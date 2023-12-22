import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css';
import foot from './image/footer/foots.jpeg';
// import image from './image/footer/foot.png';
import Button from 'react-bootstrap/Button';



function Fotter(){

    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={12}  className="footimg" style={{ backgroundImage:`url(${foot})` }}>
                    
                    <h1 className="foothead">Stay Tuned With Us</h1>
                    <p className="foottitle">Subcribe to our newletter and never miss our latest news and promotions .our <br/>
                    <span className="">newsletter is send once a week,every thursday</span></p>
                     <div className="formfoot">
                    <input
                        
                       type="email"
                    //   style={{ backgroundImage:`url(${image})` }}
                       placeholder="Enter Email Address" 
        
                    />
                     <Button className="footerbtn" variant="outline-light">Subscribe</Button>
                     </div>
                    
                </Col>
            </Row>

            
            
                 <Row className="footbar">
                <Col sm={6}>

                <p className="copywrite">&#169;2023ampacy.All rights reserved.</p>
                </Col>
                <Col sm={6}>
                <p className="condition">PrivacyPolicy | Teams &Conditions</p>

                </Col>
               
                </Row>
            
            
        </Container>
        </>
    )
}
export default Fotter;