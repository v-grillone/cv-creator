import { useState } from "react"

const Education = ({ educationAdd, educationDelete }) => {

  // Adding and removing education cards

  const [educationList, setEducationList] = useState(
    [
      {education: '', key: Math.floor(Math.random()*10000)+1}
  ]);

  const addEducation = () => {
      setEducationList([...educationList, {education: '', key: Math.floor(Math.random()*10000)+1}]);
  }

  const deleteEducation = (e, index) => {
    setEducationList(educationList.filter(education => education.key !== educationList[index].key));
    educationDelete(educationList[index].key);
  }

  // Getting education values

  const educationChange = (e) => {
    educationList.forEach(list => {
      const targetForm = document.getElementById('education-'+list.key)
      const institutionChange = targetForm.children[0].value;
      const cityChange = targetForm.children[1].value;
      const educationChange = targetForm.children[2].value;
      const subjectChange = targetForm.children[3].value;
      const fromChange = targetForm.children[4].value;
      const toChange = targetForm.children[5].value;
      const experianceObject = {id: list.key, institution: institutionChange, city: cityChange, education: educationChange, subject: subjectChange, from: fromChange, to: toChange}
      educationAdd(experianceObject)
    });
  }

  return (
    <div id="education-container" className='education-container flex flex-col space-y-4 p-6'>
      <h3 className='text-white text-2xl'>Education</h3>
      {educationList.map((education, index) => (
        <div key={education.key} className='flex flex-col space-y-4'>
          <form id={`education-${education.key}`} className='education-form flex flex-col space-y-4'>
            <input className='py-1 pl-2 border rounded' id="education-institution" type="text" placeholder='Institution name' onChange={educationChange} />
            <input className='py-1 pl-2 border rounded' id="education-city" type="text" placeholder='City' onChange={educationChange} />
            <input className='py-1 pl-2 border rounded' id="education-education" type="text" placeholder='Education type' onChange={educationChange} />
            <input className='py-1 pl-2 border rounded' id="education-subject" type="text" placeholder='Subject' onChange={educationChange} />
            <input className='py-1 pl-2 border rounded' id="education-from" type="text" placeholder='From' onChange={educationChange} />
            <input className='py-1 pl-2 border rounded' id="education-to" type="text" placeholder='To' onChange={educationChange} />
          </form>
          {educationList.length > 1 ? <button className="border border-gray-300 p-2 text-white bg-gray-700 text-lg hover:bg-gray-900" onClick={e => deleteEducation(e, index)}>Delete</button> : ''}
        </div>
      ))}
      {educationList.length < 4 ? <button className="border border-gray-300 p-2 text-white bg-gray-700 text-lg hover:bg-gray-900" onClick={addEducation}>Add</button> : ''}
    </div>
  )
}

export default Education