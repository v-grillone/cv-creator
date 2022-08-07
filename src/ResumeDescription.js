const ResumeDescription = ({ personalInputValues }) => {
  return (
    <div className="description-container">
        <h6 className="text-2xl">Description</h6>
        <span className="block border-b mr-4 mt-2"></span>
        <p className="mt-6">{personalInputValues.description}</p>
    </div>
  )
}

export default ResumeDescription