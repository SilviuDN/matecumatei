import { Component } from "react";
import CoursesService from "../../../services/courses.services";

class CoursesList extends Component{

    constructor(){
        super()
        this.state = {
            courses: undefined
        }
        this.coursesService = new CoursesService()
    }

    componentDidMount = () => {
        this.coursesService
            .getAllCourses()
            .then( res => this.setState({courses: res.data}))
            .catch( err => console.log(err))
    }

    render(){
        return(
            !this.state.courses
            ?
            <h1>waiting...</h1>
            :
            this.state.courses?.map( elm => <p key={ elm._id }>{elm.name}</p>)
        )
    }
}

export default CoursesList