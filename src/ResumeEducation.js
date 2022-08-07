const ResumeEducation = ({ educationValues}) => {
  return (
    <div className="edecation-container">
        <h6 className="text-2xl">Education</h6>
        <span className="block border-b mr-4 mt-2"></span>
        {educationValues.map(education => (
          <div key={education.id} className=''>
            <p>{education.institution}</p>
            <p>{education.city}</p>
            <p>{education.education}</p>
            <p>{education.subject}</p>
            <p>{education.from}</p>
            <p>{education.to}</p>
          </div>
        ))}
    </div>
  )
}

export default ResumeEducation