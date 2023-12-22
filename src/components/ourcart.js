import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './image/product/1.jpeg';
import img2 from './image/product/02.png';
import img3 from './image/product/3.jpeg';
import img4 from './image/product/4.jpeg';
import img5 from './image/product/5.jpeg';
import img6 from './image/product/6.jpeg';
import img7 from './image/product/7.jpeg';
import img8 from './image/product/8.jpeg';
import img9 from './image/product/09.png';
import img10 from './image/product/010.png';
import img11 from './image/product/11.jpeg';
import img12 from './image/product/12.jpeg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


import './css/ourcart.css';

function Ourcart (){
    return(
        <>
         <Container fluid className="catpadd">
          <Row>
            <Col sm={6}>
            <h1 className="carthead">Our<span className="cat">Cat</span>egory</h1>
            
            <p className="cartpara">Buy and sell everything from used Our Top catagories</p>
            </Col>
            <Col sm={6}>
            <Button className="cardsbtn" variant="outline-danger">View All<ArrowCircleRightIcon/>
            </Button>
             </Col>
            

          </Row>

         </Container>
         <Container fluid className="catpadd">
            <Row>
              <Col sm={2}>
                <div className="menucard">
               
                    <p className="cardtitle">Automotive</p>
                    <p className="">14 Ads</p>
                    <img src={img1} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Education</p>
                    <p className="">7 Ads</p>
                    <img src={img2} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Electronics</p>
                    <p className="">8 Ads</p>
                    <img src={img3} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              
              <div className="menucard">
              <p className="cardtitle">House Hold</p>
                    <p className="">1 Ads</p>
                    <img src={img4} className="imgcart"  alt="imgcart"/> 
                </div>
                
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Fashion Style</p>
                    <p className="">1 Ads</p>
                    <img src={img5} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Health Care</p>
                    <p className="">1 Ads</p>
                    <img src={img6} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
            
            </Row> 
            <Row>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Job Board</p>
                    <p className="">1 Ads</p>
                    <img src={img7} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Magazines</p>
                    <p className="">1 Ads</p>
                    <img src={img8} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Pet&Animal</p>
                    <p className="">1 Ads</p>
                    <img src={img9} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Real Estate</p>
                    <p className="">1 Ads</p>
                    <img src={img10} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Sports&Game</p>
                    <p className="">1 Ads</p>
                    <img src={img11} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
              <Col sm={2}>
              <div className="menucard">
              <p className="cardtitle">Travel</p>
                    <p className="">1 Ads</p>
                    <img src={img12} className="imgcart"  alt="imgcart"/> 
                </div>
              </Col>
            
            </Row> 
         </Container>
        </>
    )
}
export default Ourcart;