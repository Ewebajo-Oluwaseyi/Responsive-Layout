import React from 'react'
import {Container, Row, Col} from "reactstrap";

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
            <Container>
                    <Row>
                        <Col md={6}>
                            {new Date().getFullYear} @copyrights.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer
