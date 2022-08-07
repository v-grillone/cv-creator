import { useState } from "react"

const Experiance = ({ experianceAdd, experianceDelete, experianceExamples }) => {

  // Adding and removing experiance cards

    const [experianceList, setExperianceList] = useState(
      [
        {experiance: '', key: Math.floor(Math.random()*10000)+1}
      ]);

    const addExperiance = () => {
        setExperianceList([...experianceList, {experiance: '', key: Math.floor(Math.random()*10000)+1}]);
    }

    const deleteExperiance = (e, index) => {
      setExperianceList(experianceList.filter(experiance => experiance.key !== experianceList[index].key));
      experianceDelete(experianceList[index].key);
    }

    // Getting experiance values

    const experianceChange = (e) => {
      experianceList.forEach(list => {
        const targetForm = document.getElementById('experiance-'+list.key)
        const positionChange = targetForm.children[0].value;
        const companyChange = targetForm.children[1].value;
        const cityChange = targetForm.children[2].value;
        const toChange = targetForm.children[3].value;
        const fromChange = targetForm.children[4].value;
        const experianceObject = {id: list.key, position: positionChange, company: companyChange, city: cityChange, to: toChange, from: fromChange}
        experianceAdd(experianceObject)
      });
    }
    

  return (
    <div id="experiance-container" className='experiance-container flex flex-col space-y-4 p-6'>
      <h3 className='text-white text-2xl'>Experiance</h3>
      {experianceList.map((experiance, index) => (
        <div key={experiance.key} className='flex flex-col space-y-4'>
          <form id={`experiance-${experiance.key}`} className='experiance-form flex flex-col space-y-4 experiance-form'>
            <input className='py-1 pl-2 border rounded' id="experiance-position" type="text" placeholder='Position' onChange={experianceChange} />
            <input className='py-1 pl-2 border rounded' id="experiance-company" type="text" placeholder='Company' onChange={experianceChange} />
            <input className='py-1 pl-2 border rounded' id="experiance-city" type="text" placeholder='City' onChange={experianceChange} />
            <input className='py-1 pl-2 border rounded' id="experiance-from" type="text" placeholder='From' onChange={experianceChange} />
            <input className='py-1 pl-2 border rounded' id="experiance-to" type="text" placeholder='To' onChange={experianceChange} />
          </form>
          {experianceList.length > 1 ? <button className="border border-gray-300 p-2 text-white bg-gray-700 text-lg hover:bg-gray-900" onClick={e => deleteExperiance(e, index)}>Delete</button> : ''}
        </div>
      ))}
      {experianceList.length < 4 ? <button className="border border-gray-300 p-2 text-white bg-gray-700 text-lg hover:bg-gray-900" onClick={addExperiance}>Add</button> : ''}
    </div>
  )
}

export default Experiance