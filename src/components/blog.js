import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './css/blog.css';
import img1 from './image/blog/img1.jpg';
import img2 from './image/blog/img2.jpg';
import img3 from './image/blog/img3.jpg';
import girl from './image/blog/girl.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';




function Blog (){
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <h1 className="bloghead">Lat<span className="est">est</span> Blog</h1>
                    <p className="blogpara">People are giving these goods for free so check them out </p>
                </Col>
                <Col sm={6}>
                <Button className="btnblog" variant="outline-danger">View All<ArrowCircleRightIcon/></Button>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                <div className="adsblog">
           
              <img src={img1} className="blogimg"  alt="blogimg"/> 
              <Button className="blogbtn1" variant="secondary">Electronics</Button>
              <Button  className="blogbtn2"variant="secondary">Health</Button>
              <Row>
                <Col sm={6} className="girlblog">
                <img src={girl} className="avgirl"  alt="imggirl"/><span className="admin">Admin</span>  
                </Col>
              
              <Col sm={6} className="calpart">
              <CalendarMonthIcon className="calan"/>
              <span className="dat">March 8,2023</span>
              </Col>
              </Row>
                 <h4 className="blogsubhead">The Best Spa Saloons For Your <br/>relaxations?</h4>
                <p className="blogsubpara">Loren Ipsum dolor sit amrt, consectetur adipiscing<br/>elite.Maecenas vehicula sapien nec nisi aliquam, vitae <br/>finibus purus sodales. Mauris at...</p>
                <p className="blogview">View Details <ArrowForwardIcon  style={{ fontSize:18, color: 'hsl(342.9deg 100% 37.84%) ' }}/> </p>
              
              </div>
                </Col>
                <Col sm={4}>
                <div className="adsblog">
           
            <img src={img2} className="blogimg"  alt="img1"/> 
            <Button className="blogbtn1" variant="secondary">Electronics</Button>
              <Button  className="blogbtn2"variant="secondary">Health</Button>
              <Row>
                <Col sm={6} className="girlblog">
                <img src={girl} className="avgirl"  alt="imggirl"/><span className="admin">Admin</span>  
                </Col>
              
              <Col sm={6} className="calpart">
              <CalendarMonthIcon className="calan"/>
              <span className="dat">March 9,2023</span>
              </Col>
              </Row>
                 <h4 className="blogsubhead">Three Powerful Tricks For Online <br/>Advertising</h4>
                <p className="blogsubpara">Loren Ipsum dolor sit amrt, consectetur adipiscing<br/>elite.Maecenas vehicula sapien nec nisi aliquam, vitae <br/>finibus purus sodales. Mauris at...</p>
                <p className="blogview">View Details <ArrowForwardIcon  style={{ fontSize:18, color: 'hsl(342.9deg 100% 37.84%) ' }}/> </p>
         
           </div>
                </Col>
                <Col sm={4}>
                <div className="adsblog">
           
            <img src={img3} className="adimg"  alt="img1"/> 
            <Button className="blogbtn1" variant="secondary">Electronics</Button>
              <Button  className="blogbtn2"variant="secondary">Health</Button>
              <Row>
                <Col sm={6} className="girlblog">
                <img src={girl} className="avgirl"  alt="imggirl"/><span className="admin">Admin</span>  
                </Col>
              
              <Col sm={6} className="calpart">
              <CalendarMonthIcon className="calan"/>
              <span className="dat">March 10,2023</span>
              </Col>
              </Row>
                 <h4 className="blogsubhead">Competitive Analysics For <br/>Enterprerneurs in 2023</h4>
                <p className="blogsubpara">Loren Ipsum dolor sit amrt, consectetur adipiscing<br/>elite.Maecenas vehicula sapien nec nisi aliquam, vitae <br/>finibus purus sodales. Mauris at...</p>
                <p className="blogview">View Details <ArrowForwardIcon  style={{ fontSize:18, color: 'hsl(342.9deg 100% 37.84%) ' }}/> </p>
          
           
           
          
           </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Blog;