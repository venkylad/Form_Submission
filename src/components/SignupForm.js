import { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import FormFields from "./FormFields";

const FormContainer = () => {
  const [keys, setKeys] = useState("first");

  return (
    <>
      <Tab.Container
        id="controlled-tab-example"
        activeKey={keys}
        onSelect={(k) => setKeys(k)}
        defaultActiveKey="first"
      >
        <Row>
          <Col xs={12}>
            <Nav className="flex-row justify-content-center align-items-center tabs">
              <Nav.Item className={keys === "first" && "tab"}>
                <Nav.Link eventKey="first">Fan Signup</Nav.Link>
              </Nav.Item>
              <Nav.Item className={keys === "second" && "tab"}>
                <Nav.Link eventKey="second">Talent Signup</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h2 className="text-center py-3">Create Your Fan Account</h2>
                <FormFields keys={keys} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2 className="text-center py-3">Create Your Talent Account</h2>
                <FormFields keys={keys} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
export default FormContainer;

{
  /* <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#profile">
            Profile
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade show active" id="home">
          <p>
            Raw denim you probably haven't heard of them jean shorts Austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher
            voluptate nisi qui.
          </p>
        </div>
        <div className="tab-pane fade" id="profile">
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit, blog
            sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo
            enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
            mollit.
          </p>
        </div>
      </div> */
}
