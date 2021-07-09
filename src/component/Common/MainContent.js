import React, {useState} from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row, Media } from 'reactstrap'
import img1 from '../../assests/images/users/avatar-1.jpg'
import img2 from '../../assests/images/users/avatar-2.jpg'
import img3 from '../../assests/images/users/avatar-3.jpg'
import img4 from '../../assests/images/img-1.png'
import ReactApexChart from 'react-apexcharts';

function MainContent() {

    const reports = [
        { title: "Projects", iconClass: "fa-briefcase", description: "20" },
        { title: "Tickets", iconClass: "fas fa-ticket-alt", description: "4" },
        { title: "Activities", iconClass: "fas fa-chart-line", description: "2" }
    ];

    const[state, setState] = useState({
        series: [
            {type: "area", name: "work", data: [87,57,74,99,75,38,62,47,82,56,45,47]},
            {type: "area", name: "work", data: [28,41,52,42,13,18,29,18,36,51,55,35]}
        ],
        options: {chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2,dashArray:[0,0,3]},fill:{type:"solid",opacity:[.15,.05,1]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},colors:["#f1b44c","#3452e1","#50a5f1"]},
        series1: [40,32,12],
        options1: {
            labels:["series A","series B","series C"],
            colors:["#556ee6","#34c38f","#f46a6a"],
            legend:{show:!1},
            plotOption:{
                pie: {
                    donut: {
                        size:"70%"
                    }
                }
            }
        }
    })



    const option = [

    ]
    return (
        <React.Fragment>
        <div className="page-content">
            <Container fluid>

                    <Row>
                        <Col xl="8">
                            <Card className="mb-4">
                                <div>
                                    <Row>
                                        <Col lg="9" sm="8">
                                            <div className="p-4">
                                                <h5 className="text-primary">Welcome back!</h5>
                                                <p>Responsive Layout</p>

                                                <div className="text-muted">
                                                    <p className="mb-1"><i className="mdi mdi-circle-medium align-middle text-primary mr-1"></i>Lorem ipsum dolor sit amet</p>
                                                    <p className="mb-1"><i className="mdi mdi-circle-medium align-middle text-primary mr-1"></i>consectetur adipiscing elit</p>
                                                    <p className="mb-1"><i className="mdi mdi-circle-medium align-middle text-primary mr-1"></i>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="3" sm="4" className="align-self-center">
                                            <div>
                                                <img src={img4} alt="" className="img-fluid d-block"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                            <Row className="mt-2">
                                {
                                    reports.map((report, key) =>
                                    <Col sm="4" key={"_col_" + key} className="mb-3">
                                    <Card className="mini-stats-wid">
                                        <CardBody>
                                            <Media>
                                                <Media body>
                                                    <p className="text-muted font-weight-medium">{report.title}</p>
                                                    <h4 className="mb-0">{report.description}</h4>
                                                </Media>
                                                <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                    <span className="avatar-title">
                                                        <i className={`fas + ${report.iconClass} + font-size-24`}></i>
                                                    </span>
                                                </div>
                                            </Media>
                                        </CardBody>
                                    </Card>
                                </Col>
                                    )
                                }

                            </Row>
                        </Col>
                        <Col xl="4" className="mb-2">

                                    <Card className="mini-stats-wid">
                                    <CardBody>
                                    <div>
                                            <h4 className="mb-0">Project lorem</h4>

                                            <p className="text-muted font-weight-small">
                                            last updated Jan 23, 2020
                                            </p>
                                            <hr/>
                                            <p className="font-weight-large">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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


                                        {/*<hr className="mt-9"/>

                                        <div className="text-center">
                                            <span><i className="bx bx-copy mx-3"></i></span>
                                            <span><i className="bx bx-pen mx-3"></i></span>
                                            <span><i className="bx bx-star mx-3"></i></span>
                                            <span><i className="bx bx-trash mx-3"></i></span>
                            </div>*/}
                                    </CardBody>
                                    </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col xl="8" className="mb-2">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-3">Overview</h4>

                                    <div>
                                        <div id="overview-chart" className="apex-charts" dir="ltr">
                                            <ReactApexChart series={state.series} options={state.options} type="line" height={240}/>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" className="mt-2 mb-4">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-3">Project Anaytics</h4>

                                    <div>
                                        <div id="donut-chart" className="apex-charts">
                                            <ReactApexChart series={state.series1} options={state.options1} type="donut" height={240}/>
                                        </div>
                                    </div>

                                    <div className="text-center text-muted">
                                        <Row>
                                            <Col xs="4">
                                                <div className="mt-4">
                                                    <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary mr-1"></i>Project A</p>

                                                </div>
                                            </Col>
                                            <Col xs="4">
                                                <div className="mt-4">
                                                    <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary mr-1"></i>Project B</p>

                                                </div>
                                            </Col>
                                            <Col xs="4">
                                                <div className="mt-4">
                                                    <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary mr-1"></i>Project C</p>

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

            </Container>
        </div>
        </React.Fragment>
    )
}

export default MainContent
