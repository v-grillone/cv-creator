import PersonalInfo from "./PersonalInfo"
import Experiance from "./Experiance"
import Education from "./Education"
import Buttons from "./Buttons"

const InputBox = ({ personalInfoValue, experianceAdd, experianceDelete, educationAdd, educationDelete, btnReset, btnExample}) => {
  return (
    <div className='flex flex-col w-fw bg-gray-500 m-auto mt-10 border border-gray-500 rounded-lg drop-shadow-xl'>
        <PersonalInfo personalInfoValue={personalInfoValue} />        
        <Experiance experianceAdd={experianceAdd} experianceDelete={experianceDelete} />
        <Education educationAdd={educationAdd} educationDelete={educationDelete} />
        <Buttons btnReset={btnReset} btnExample={btnExample} />
    </div>
  )
}

export default InputBox