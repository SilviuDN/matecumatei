import {Container, Button} from 'react-bootstrap'
import CoursesList from './CoursesList'

import { Link } from 'react-router-dom'

const CoastersPage = () => {

    return(
        <Container>
            <h1>Courses list goes here</h1>
            <CoursesList/>
            <Link to={`/courses/new`}>
                <Button className="btnBlock">New Course</Button>
            </Link>
        </Container>
    )
}

export default CoastersPage