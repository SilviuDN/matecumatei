import { Component } from "react";
import LecturesService from "../../../services/lectures.services";
import LectureCard from "./LectureCard";

import { Row } from 'react-bootstrap'

const LecturesList = ({lectures}) => {

    return(
        // <h1>LecturesList</h1>
        <>
        {lectures.map(lecture => <LectureCard lecture = {lecture}/>)}
        
        </>
    )

}

export default LecturesList