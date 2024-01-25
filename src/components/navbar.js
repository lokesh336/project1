import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/nav/logos.png";
import "./css/navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Nav() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <img src={logo} className="logo" alt="navimg" />
          </Col>
          <Col sm={6}>
            <div className="list">
              <ul className="ullist">
                <li>
                  Home <KeyboardArrowDownIcon />
                </li>
                <li>
                  Listings
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  Blogs
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  Pages
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  Shop
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  Contact us
                  <KeyboardArrowDownIcon />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={3}>
            <div className="reglog">
              <p className="reg">Register</p>
              <button className="loginbtn">Login</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nav;
