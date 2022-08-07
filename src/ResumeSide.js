const ResumeSide = ({ personalInputValues }) => {
  return (
    <div className="resume-side-container flex-[1_1_30%] p-2 space-y-6">
      <div className="profile-pic-container relative">
        <img src={personalInputValues.photo} alt={personalInputValues.photo} className="rounded-full border border-gray-100 shadow-sm object-cover" style={{height: '180px', width: '180px', margin: 'auto'}} />
      </div>
      <h6>Personal Details</h6>
      <p>Address</p>
      <p>{personalInputValues.address}</p>
      <p>Phone Number</p>
      <p>{personalInputValues.phone}</p>
      <p>Email</p>
      <p>{personalInputValues.email}</p>
    </div>
  )
}

export default ResumeSide