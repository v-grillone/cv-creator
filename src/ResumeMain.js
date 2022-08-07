import ResumeDescription from "./ResumeDescription"
import ResumeEducation from "./ResumeEducation"
import ResumeExperiance from "./ResumeExperiance"

const ResumeMain = ({ personalInputValues, experianceValues, educationValues }) => {
  return (
    <div className="resume-main-container flex-[1_1_70%] p-2">
        <ResumeDescription personalInputValues={personalInputValues} />
        <ResumeExperiance experianceValues={experianceValues} />
        <ResumeEducation educationValues={educationValues} />
    </div>
  )
}

export default ResumeMain