import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/testimonial.css';
import img1 from './image/test/quotes.png';
import img2 from './image/test/testi.png';
import i1 from './image/test/1.svg';
import i2 from './image/test/2a.svg';
import i3 from './image/test/3.svg';
import i4 from './image/test/4.svg';
import i5 from './image/test/5.svg';
import i6 from './image/test/6.svg';
import devimg1 from './image/test/pic1.png';
import devimg2 from './image/test/pic2.png';
// import React, { Component } from 'react';
// import ReactCardCarousel from 'react-card-carousel';

function Test (){

    return(
        <>
       <Container fluid>
        <Row>
            <Col sm={5} className="clint">
                <h1 className="testimoni">Clint <br/>Testimonials</h1>
            <img src={img1} className="test1"  alt="img1"/> 
            </Col>
            <Col sm={7}>
            <img src={img2} className="test2"  alt="img1"/> 
                </Col>
        </Row>
        <Row>
            <Col sm={12} className="testpart">
               <Row>
                <Col sm={6}>
                    <div className="testpart1">
                        <div className="devpart">
                        <img src={devimg1} className="devimg1"  alt="devimg1"/> 
                        <p className="devpara">Dev  <br/><span className="devsubpara">Lead intranet Technician</span></p>

                        </div>
                    <p className="devellast">
                    Omnis totam molestiae delectus nemo alias nesciunt harum et.<br/> Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores<br/> repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores<br/> tempore illo accusantium est et voluptatem voluptas
                    </p>
                    </div>
                   
                </Col>
                 <Col sm={6}>
                    
                 <div className="testpart2">
                        <div className="devpart">
                        <img src={devimg2} className="devimg1"  alt="devimg1"/> 
                        <p className="devpara">Dev  <br/><span className="devsubpara">Lead intranet Technician</span></p>

                        </div>
                    <p className="devellast">
                    Omnis totam molestiae delectus nemo alias nesciunt harum et.<br/> Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores<br/> repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores<br/> tempore illo accusantium est et voluptatem voluptas
                    </p>
                    </div>
                 </Col>
               </Row>
     
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <h1 className="testbig">Over 5,26,000+ Sponsers being contact with us</h1>
                
                    
                
            </Col>
        </Row>
        <Row>
            <Col sm={2}>
               <div className="testcard">
               <img src={i1} className="i1"  alt="img1"/> 
                </div> 
            </Col>
            <Col sm={2}>
            <div className="testcard">
            <img src={i2} className="i2"  alt="img1"/> 
                </div> 
            </Col>
            <Col sm={2}>
            <div className="testcard">
            <img src={i3} className="i3"  alt="img1"/> 
                </div>   
            </Col>
            <Col sm={2}>
            <div className="testcard">
            <img src={i4} className="i4"  alt="img1"/> 
                </div> 
            </Col>
            <Col sm={2}>
            <div className="testcard">
            <img src={i5} className="i5"  alt="img1"/> 
                </div> 
               </Col>
            <Col sm={2}>
            <div className="testcard">
            <img src={i6} className="i6"  alt="img1"/> 
                </div> 
            </Col>
            
        </Row>
       </Container>
        </>
    )
}
export default Test;