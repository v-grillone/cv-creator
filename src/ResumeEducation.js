const ResumeEducation = ({ educationValues}) => {
  return (
    <div className="edecation-container">
        <h6 className="text-2xl">Education</h6>
        <span className="block border-b mr-4 mt-2"></span>
        {educationValues.map(education => (
          <div key={education.id} className='flex flex-row space-x-10 mt-4'>
            <div className="education-dates">
              <p className="font-bold">{`${education.from} - ${education.to}`}</p>
            </div>
            <div className="education-information space-y-2">
              <p>{education.institution}</p>
              <p>{`${education.education} in ${education.subject}`}</p>
              <p className="italic">{education.city}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ResumeEducation