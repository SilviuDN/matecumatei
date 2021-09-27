import {useState} from 'react'
import { Col, Row, Container} from "react-bootstrap"
import LectureModal from './LectureModal'
import classes from './LecturePage.module.css';


const LectureCard = ({lecture}) => {

    const [showLecture, setShowLecture] = useState(false)

    const toggleShowLecture = (prevState) => {
        setShowLecture(!showLecture)
    }


    return(

            <article className="courseCard">
                <Container className={classes.container}>
                    <div className={classes.block}>
                        <h5 style={{ marginBottom: '0px'}}>{lecture.sectionNumber}.{lecture.lectureNumber} - {lecture.name}</h5 >
                    </div>
                    
                    <div>
                       <button className="btn btn-dark" onClick={toggleShowLecture}>
                            {showLecture ? 'Ascunde lectia' : 'Arata lectia'}                        
                        </button>                    
                    </div>

                </Container>

                {/* <Row className="justify-content-around align-center">
                    <Col md={6}>
                        <h4>{lecture.sectionNumber}.{lecture.lectureNumber} - {lecture.name}</h4>
                    </Col>
                    <Col md={4}>
                        <button className="btn btn-dark" onClick={toggleShowLecture}>
                            {showLecture ? 'Ascunde lectia' : 'Arata lectia'}                        
                        </button>
                    </Col>
                </Row> */}

                {
                    showLecture
                    &&
                    <LectureModal videoUrl = {lecture.videoUrl} toggleShowLecture={toggleShowLecture} showLecture={showLecture}/>

                    // <iframe width="560" height="315" src={lecture.videoUrl}
                    //     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    //     allowfullscreen="allowfullscreen">
                    // </iframe>
                }
            </article>




    )

}

export default LectureCard