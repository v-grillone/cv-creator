import { useRef } from "react";

const PersonalInfo = ({ personalInfoValue }) => {
  const photoFile = useRef();

  const handlePhotoClick = (e) => {
    e.preventDefault()
    photoFile.current.click()
  }
  return (
    <div className='personal-container flex flex-col space-y-4 p-6'>
        <h3 className='text-white text-2xl'>Personal Information</h3>
        <form className='personal-form flex flex-col space-y-4'>
            <input className='py-1 pl-2 border rounded' type="text" id="first-name-input" placeholder='First name' onChange={personalInfoValue} />
            <input className='py-1 pl-2 border rounded' type="text" id="last-name-input" placeholder='Last name' onChange={personalInfoValue} />
            <input className='py-1 pl-2 border rounded' type="text" id='title-input' placeholder='Title' onChange={personalInfoValue} />
            <button className='py-1 pl-2 border rounded text-gray-400 text-left bg-white' onClick={handlePhotoClick}>Upload photo</button>
            <input type='file' id="photo-file" accept="image/png, image/jpeg" className='hidden' ref={photoFile} onChange={personalInfoValue} />
            <input className='py-1 pl-2 border rounded' type="text" id="address-input" placeholder='Address' onChange={personalInfoValue} />
            <input className='py-1 pl-2 border rounded' type="tel" id="phone-input" placeholder='Phone number' onChange={personalInfoValue} />
            <input className='py-1 pl-2 border rounded' type="email" id="email-input" placeholder='Email' onChange={personalInfoValue} />
            <textarea className='py-1 pl-2 border rounded' id="description-input" placeholder='Description' onChange={personalInfoValue} />
        </form>
    </div>
  )
}

export default PersonalInfo