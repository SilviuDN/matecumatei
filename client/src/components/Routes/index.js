import { Switch, Route } from 'react-router';

import IndexPage from './../pages/IndexPage/IndexPage';
import CoursesPage from './../pages/CoursesPage/CoursesPage';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import CourseForm from '../pages/CourseForm/CourseForm';
import Signup from '../pages/SignUp/SignUp';

const Routes = () => {

    return(
        <>
            <Switch>
                <Route path = '/' exact render = { () => <IndexPage/> } />
                <Route path = '/courses' exact render = { () => <CoursesPage/> } />
                <Route path = '/courses/details/:course_id' render = { props => <CourseDetails {...props}/> } />
                <Route path = '/courses/new' render = { (props) => <CourseForm {...props}/> } />
                <Route path = '/signUp' render = { (props) => <Signup {...props}/> } />
            </Switch>
        </>        
    )
}

export default Routes