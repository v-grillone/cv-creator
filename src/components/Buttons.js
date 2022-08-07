import GeneratePDF from "./GeneratePDF"
import LoadExample from "./LoadExample"
import Reset from "./Reset"

const Buttons = ({ btnReset, btnExample }) => {
  return (
    <div id='buttons-container' className='education-container flex flex-col space-y-4 p-6'>
        <GeneratePDF />
        <LoadExample btnExample={btnExample} />
        <Reset btnReset={btnReset} />
    </div>
  )
}

export default Buttons