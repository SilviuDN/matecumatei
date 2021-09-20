import {useState} from 'react'
import { Col, Row} from "react-bootstrap";
import LectureModal from './LectureModal';


const LectureCard = ({lecture}) => {

    const [showLecture, setShowLecture] = useState(false)

    const toggleShowLecture = (prevState) => {
        setShowLecture(!showLecture)
    }


    return(

            <article className="courseCard">
                <Row className="justify-content-around">
                    <Col md={6}>
                        <h4>{lecture.sectionNumber}.{lecture.lectureNumber} - {lecture.name}</h4>
                    </Col>
                    <Col md={4}>
                        <button className="btn btn-dark" onClick={toggleShowLecture}>
                            {showLecture ? 'Ascunde lectia' : 'Arata lectia'}                        
                        </button>
                    </Col>
                </Row>

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