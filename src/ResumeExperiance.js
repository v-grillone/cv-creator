const ResumeExperiance = ({ experianceValues }) => {
  
  return (
    <div className="experiance-container">
        <h6 className="text-2xl">Experiance</h6>
        <span className="block border-b mr-4 mt-2"></span>
        {experianceValues.map((experiance) => (
          <div key={experiance.id} className='experiance flex flex-row space-x-10 mt-4'>
            <div className="experiance-dates">
              <p className="font-bold">{`${experiance.from} - ${experiance.to}`}</p>
            </div>
            <div className="experiance-data flex flex-col space-y-4">
              <p className="text-lg">{experiance.position}</p>
              <p className="italic">{`${experiance.company}, ${experiance.city}`}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ResumeExperiance