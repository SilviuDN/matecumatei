import SectionCard from "./SectionCard";

const SectionsList = ({sections, loggedUser}) => {

    return(
        // <h1>LecturesList</h1>
        <>
        {sections.map(sectionId => <SectionCard sectionId = {sectionId}  loggedUser={loggedUser}/>)}
        
        </>
    )
}

export default SectionsList