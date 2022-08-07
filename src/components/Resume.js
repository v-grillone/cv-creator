import ResumeMain from "../ResumeMain";
import ResumeSide from "../ResumeSide";
import ResumeHeader from "./ResumeHeader";

const Resume = ({ personalInputValues, experianceValues, educationValues }) => {
  return (
    <div id="resume-container" className="resume-container relative m-auto w-pw mt-16 h-ph border border-gray-700">
      <div className="header-section">
        <ResumeHeader personalInputValues={personalInputValues} />
      </div>
      <div className="content-section flex flex-row p-4">
        <ResumeMain personalInputValues={personalInputValues} experianceValues={experianceValues} educationValues={educationValues} />
        <ResumeSide personalInputValues={personalInputValues} />
      </div>
    </div>
  )
}

export default Resume