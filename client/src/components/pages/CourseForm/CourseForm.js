import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import CoursesService from '../../../services/courses.services'

class CourseForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            typeOfCourse: '',
            position: '',
            price: '',
            discountedPrice: '',
            image: ''
        }
        this.coursesService = new CoursesService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.coursesService
            .saveCourse(this.state)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshCoasters()
                this.setState({             
                    name: '',
                    description: '',
                    typeOfCourse: '',
                    position: '',
                    price: '',
                    discountedPrice: '',
                    image: ''
                })
                this.props.history.push('/courses')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="inve">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" value={this.state.typeOfCourse} onChange={this.handleInputChange} name="typeOfCourse" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Position</Form.Label>
                        <Form.Control type="text" value={this.state.position} onChange={this.handleInputChange} name="position" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={this.state.price} onChange={this.handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Discounted Price</Form.Label>
                        <Form.Control type="text" value={this.state.discountedPrice} onChange={this.handleInputChange} name="discountedPrice" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create course</Button>

                </Form>

            </Container>
        )
    }
}

export default CourseForm