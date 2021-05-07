import { Col, Form, Row } from "react-bootstrap";
import Logo from "../Fanconvo-header-logo.png";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={8}>
          <img width="300" src={Logo} className="py-4" alt="" />
          <h5>A marketplace for conversations, mentorship and performance</h5>
        </Col>
        <Col xs={12} sm={4}>
          <span className="d-flex d-row justify-content-end">
            <h6 className="mr-3">Sign up</h6>
            <h6 className="ml-3 mr-0">Login In</h6>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12}>
          <span className="d-flex flex-row my-4">
            <h4>Search New Talent</h4>
            <Form.Group>
              <Form.Control
                type="text"
                className="search_box ml-4 bg-dark text-white"
              />
            </Form.Group>
            <strong>
              <SearchIcon className="search_icon" />{" "}
            </strong>
          </span>
        </Col>
      </Row>
    </>
  );
};
export default Header;
