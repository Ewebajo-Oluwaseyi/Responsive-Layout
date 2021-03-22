import React from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row, Media } from 'reactstrap'
import img1 from '../../assests/images/users/avatar-1.jpg'
import img2 from '../../assests/images/users/avatar-2.jpg'
import img3 from '../../assests/images/users/avatar-3.jpg'
import img4 from '../../assests/images/users/avatar-4.jpg'
import img5 from '../../assests/images/users/avatar-5.jpg'
import img6 from '../../assests/images/users/avatar-6.jpg'
import img7 from '../../assests/images/users/avatar-7.jpg'
import img8 from '../../assests/images/users/avatar-8.jpg'

function MainContent() {
    return (
        <React.Fragment>
        <div className="page-content">
            <Container fluid>

                    <Row>
                        <Col xl="12">
                            <Row>
                                <Col md="4">
                                    <Card className="mini-stats-wid">
                                    <CardBody>
                                    <div>
                                            <h4 className="mb-0">Project lorem</h4>

                                            <p className="text-muted font-weight-small">
                                            last updated Jan 23, 2020
                                            </p>
                                            <hr/>
                                            <p className="font-weight-large">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                            </p>
                                            <h5 className="text-muted font-weight-medium">Progress</h5>
                                            <div class="progress mt-3">
                                            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h5 className="text-muted font-weight-medium mt-4">Team</h5>
                                            <div className="d-flex mt-4">
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img1} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img2} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img3} alt="" height="50"/>
                                                </span>
                                            </div>
                                            </div>
                                    </div>


                                        <hr className="mt-9"/>

                                        <div className="text-center">
                                            <span><i className="bx bx-copy mx-3"></i></span>
                                            <span><i className="bx bx-pen mx-3"></i></span>
                                            <span><i className="bx bx-star mx-3"></i></span>
                                            <span><i className="bx bx-trash mx-3"></i></span>
                                        </div>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                <Card className="mini-stats-wid">
                                    <CardBody>
                                    <div>
                                            <h4 className="mb-0">Mobile app for Duis aute irure dolor</h4>

                                            <p className="text-muted font-weight-small">
                                            last updated 3 days ago
                                            </p>
                                            <hr/>
                                            <p className="font-weight-large">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                            <h5 className="text-muted font-weight-medium">Progress</h5>
                                            <div class="progress mt-3">
                                            <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h5 className="text-muted font-weight-medium mt-4">Team</h5>
                                            <div className="d-flex mt-4">
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img4} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img5} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img6} alt="" height="50"/>
                                                </span>
                                            </div>
                                            </div>
                                    </div>


                                        <hr className="mt-9"/>

                                        <div className="text-center">
                                            <span><i className="bx bx-copy mx-3"></i></span>
                                            <span><i className="bx bx-pen mx-3"></i></span>
                                            <span><i className="bx bx-star mx-3"></i></span>
                                            <span><i className="bx bx-trash mx-3"></i></span>
                                        </div>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                <Card className="mini-stats-wid">
                                    <CardBody>
                                    <div>
                                            <h4 className="mb-0">Vel pharetra vel turpis nunc</h4>

                                            <p className="text-muted font-weight-small">
                                            last updated 19 days ago
                                            </p>
                                            <hr/>
                                            <p className="font-weight-large">
                                            Facilisis leo vel fringilla est ullamcorper. Id neque aliquam vestibulum morbi. Morbi enim nunc faucibus a pellentesque. Tortor id aliquet lectus proin nibh nisl. Massa tempor nec feugiat nisl pretium. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Integer malesuada nunc vel risus commodo viverra
                                            </p>
                                            <h5 className="text-muted font-weight-medium">Progress</h5>
                                            <div class="progress mt-3">
                                            <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h5 className="text-muted font-weight-medium mt-4">Team</h5>
                                            <div className="d-flex mt-4">
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img7} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img8} alt="" height="50"/>
                                                </span>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center mx-3">
                                                <span>
                                                    <img src={img3} alt="" height="50"/>
                                                </span>
                                            </div>
                                            </div>
                                    </div>


                                        <hr className="mt-9"/>

                                        <div className="text-center">
                                            <span><i className="bx bx-copy mx-3"></i></span>
                                            <span><i className="bx bx-pen mx-3"></i></span>
                                            <span><i className="bx bx-star mx-3"></i></span>
                                            <span><i className="bx bx-trash mx-3"></i></span>
                                        </div>
                                    </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

            </Container>
        </div>
        </React.Fragment>
    )
}

export default MainContent
