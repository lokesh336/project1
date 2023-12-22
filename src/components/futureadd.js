import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/presentads.css';
import Button from 'react-bootstrap/Button';
import img1 from './image/ad1/1.jpg';
import img2 from './image/ad1/2.jpg';
import img3 from './image/ad1/3.jpg';
import img4 from './image/ad1/4.jpg';
import av  from './image/ad1/av1.png';

import AdjustIcon from '@mui/icons-material/Adjust';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



function Ad2 (){
    return(
        <>
        <Container fluid className="adscol" >
         <Row>
            <Col sm={6}>
            
            <h1 className="adshead">Lat<span className="adsround">est</span>  Ads </h1>
             <p className="">Checkout these lattest Coo Ads From our members</p>
            </Col>
            <Col sm={6}>
            <Button className="adsbtn" variant="outline-danger">View All<ArrowCircleRightIcon/></Button>

            </Col>
            
         </Row>
         <Row>
           <Col sm={3}>
              <div className="adscard2">
            
              <img src={img1} className="adimg"  alt="img1"/> 
             
              <img src={av} className="av"  alt="img1"/>
              <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead2">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p>
              </div>

           </Col>
           <Col sm={3}>
           <div className="adscard2">
           <img src={img2} className="adimg"  alt="img2"/>
           <img src={av} className="av"  alt="img1"/> 
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p> 
           </div>
           </Col>
           <Col sm={3}>
           <div className="adscard2">
              <Button className="addbtn" variant="primary">Featured</Button>
           <img src={img3} className="adimg"  alt="img3"/>
           <img src={av} className="av"  alt="img1"/>
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p>  
           </div>
           </Col>
           <Col sm={3}>
           <div className="adscard2">
           <Button className="addbtn" variant="primary">Featured</Button>
           <img src={img4} className="adimg"  alt="img3"/> 
           <img src={av} className="av"  alt="img1"/>
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p> 
           </div>
           </Col>

         </Row>
         <Row>
         <Col sm={3}>
              <div className="adscard">
              <Button className="addbtn" variant="primary">Featured</Button>
              <img src={img1} className="adimg"  alt="img1"/> 
              <img src={av} className="av"  alt="img1"/>
              <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p>
              </div>

           </Col>
           <Col sm={3}>
           <div className="adscard">
           <Button className="addbtn" variant="primary">Featured</Button>
           <img src={img2} className="adimg"  alt="img2"/>
           <img src={av} className="av"  alt="img1"/> 
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p> 
           </div>
           </Col>
           <Col sm={3}>
           <div className="adscard">
           <Button className="addbtn" variant="primary">Featured</Button>
           <img src={img3} className="adimg"  alt="img3"/>
           <img src={av} className="av"  alt="img1"/>
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p>  
           </div>
           </Col>
           <Col sm={3}>
           <div className="adscard">
           <Button className="addbtn" variant="primary">Featured</Button>
           <img src={img4} className="adimg"  alt="img3"/> 
           <img src={av} className="av"  alt="img1"/>
           <p className="roundicon"><AdjustIcon style={{ fontSize:25, color: 'gray' }}/>Electronics</p>
              
              <h5 className="addhead">HP Gaming 15.6 Touch...</h5>
              <p className="addloc"><LocationOnIcon style={{ fontSize:25, color: 'gray' }} />New York USA     <span className="addcal"><CalendarMonthIcon/>04 Apr,2023</span></p>
              <p className="money">$250<span className="star"><StarBorderIcon style={{ fontSize:25, color: 'white' }} /> &nbsp;4</span><b className="one">&nbsp;(1)</b></p> 
           </div>
           </Col>


         </Row>

        </Container>
        </>
    )
}
export default Ad2;

