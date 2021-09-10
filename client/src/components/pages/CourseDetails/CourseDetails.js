import { Component } from "react";
import CoursesService from "../../../services/courses.services";

import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class CourseDetails extends Component{

    constructor(){
        super()
        this.state = {
            course: undefined
        }
        this.courseService = new CoursesService()
    }

    componentDidMount(){
        const {course_id} = this.props.match.params
        this.courseService
            .getCourse(course_id)
            .then( res => this.setState({course: res.data}))
            .catch( err => console.log(err))
    }

    render(){


        return(
            !this.state.course
            ?
            <h4>waiting...</h4>
            :
            <Row className="justify-content-around">
            <Col md={6}>
                <h1>{this.state.course.name}</h1>
                <p>{this.state.course.description}</p>

                <hr></hr>

                <p>Pret: <s> {this.state.course.price}$  </s> <strong style={{ color : 'red' }}>  {this.state.course.discountedPrice}$ </strong></p>

                <hr></hr>

                <Link to="/courses" className="btn btn-dark">Lista de cursuri</Link>

            </Col>

            <Col md={4}>
                <img src={this.state.course.image} alt={this.state.course.name} style={{ width: '100%' }} />
            </Col>
        </Row>
        )
    }

}

export default CourseDetails