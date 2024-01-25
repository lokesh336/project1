import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "./image/banner/banner.png";
import "./css/navbar.css";
import Button from "react-bootstrap/Button";
// import image from './image/banner/bannerbg.png';

import SearchIcon from "@mui/icons-material/Search";

function Banner() {
  return (
    <>
      <Container fluid className="bgcolur">
        {/* <div className="bgbanner" style={{ backgroundImage:`url(${image})` }}> */}
        <Row>
          <Col sm={7}>
            <Button className="border" variant="secondary">
              Explore Top-Rated-Attractions
            </Button>
            <h1 className="bannerhead">
              {" "}
              Let Us help yor
              <br />
              <span className="find">Find,Buy</span>& Own Dreams
            </h1>
            <p className="para">
              Countrys most loved and trusted classifed ad listing webside
              classified ad.randomised
              <br />
              words which don't look even slightly Browse thousand of items near
              you
            </p>
            <div className="bannerform">
              <input
                className="form"
                type="text"
                placeholder="All catagories"
              />
              <input
                className="form1"
                type="text"
                placeholder="Chose Location"
              />
              <Button className="serchbtn" variant="danger">
                <SearchIcon />
                Search
              </Button>
            </div>
          </Col>
          <Col sm={5}>
            <img src={img3} className="imgbanner" alt="imgbanner" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Banner;
