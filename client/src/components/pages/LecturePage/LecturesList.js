import LectureCard from "./LectureCard";

const LecturesList = ({lectures, loggedUser, hideForm, renderList}) => {

    return(
        // <h1>LecturesList</h1>
        <>
        {lectures.map(lecture => <LectureCard lecture = {lecture}  loggedUser={loggedUser}  
            hideForm={hideForm} renderList={renderList}/>)}
        
        </>
    )

}

export default LecturesList