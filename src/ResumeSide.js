const ResumeSide = ({ personalInputValues }) => {
  return (
    <div className="resume-side-container flex-[1_1_30%] p-2 space-y-6">
      <div className="profile-pic-container relative">
        <img id="profile-img" src={personalInputValues.photo} alt={personalInputValues.photo} className="rounded-full border border-gray-100 shadow-sm object-cover" style={{height: '180px', width: '180px', margin: 'auto'}} />
      </div>
      <div className="resume-side-details space-y-4">
        <h6 className="font-bold text-xl">Personal Details</h6>
        <div className="address-container space-y-2">
          <p className="font-bold">Address</p>
          <p>{personalInputValues.address}</p>
        </div>
        <div className="phone-container space-y-2">
          <p className="font-bold">Phone Number</p>
          <p>{personalInputValues.phone}</p>
        </div>
        <div className="email-container space-y-2">
          <p className="font-bold">Email</p>
          <p>{personalInputValues.email}</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeSide