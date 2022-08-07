const ResumeExperiance = ({ experianceValues }) => {
  // experianceValues.map(experiance => console.log(experiance));
  return (
    <div className="experiance-container">
        <h6 className="text-2xl">Experiance</h6>
        <span className="block border-b mr-4 mt-2"></span>
        {experianceValues.map((experiance) => (
          <div key={experiance.id} className='experiance flex flex-row space-x-10 mt-4'>
            <div className="experiance-dates">
              <p>{`${experiance.from} - ${experiance.to}`}</p>
            </div>
            <div className="experiance-data flex flex-col">
              <p>{experiance.position}</p>
              <p>{`${experiance.company}, ${experiance.city}`}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ResumeExperiance