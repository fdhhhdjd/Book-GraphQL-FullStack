import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AuthorForm from "../AuthorForms.js/index";
import BookForm from "../BookLists/BookForms/index";

const Forms = () => {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  );
};

export default Forms;
