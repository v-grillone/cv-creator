const ResumeHeader = ({ personalInputValues }) => {
  return (
    <div className="header-container flex flex-col w-full p-6 bg-blue-900 space-y-4">
        <h3 className="text-white text-5xl">{`${personalInputValues.firstName} ${personalInputValues.lastName}`}</h3>
        <h5 className="text-white text-3xl">{personalInputValues.title}</h5>
    </div>
  )
}

export default ResumeHeader