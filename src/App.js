import { useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import Resume from './components/Resume';

function App() {

  // Personal info functionality state section

  const [personalInfoValues, setPersonalInputValues] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: null,
    address: '',
    phone: '',
    email: '',
    description: ''
  })

  const personalInfoValue = (e) => {
    const firstNameValue = document.getElementById('first-name-input').value;
    const lastNameValue = document.getElementById('last-name-input').value;
    const titleValue = document.getElementById('title-input').value;
    const photoValue = document.getElementById('photo-file').files[0];
    const addressValue = document.getElementById('address-input').value;
    const phoneValue = document.getElementById('phone-input').value;
    const emailValue = document.getElementById('email-input').value;
    const descriptionValue = document.getElementById('description-input').value;

    const formData = new FormData()
    formData.append('profile-pic', photoValue);

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(data => setPersonalInputValues({
      firstName: firstNameValue,
      lastName: lastNameValue,
      title: titleValue,
      photo: data.files['profile-pic'],
      address: addressValue,
      phone: phoneValue,
      email: emailValue,
      description: descriptionValue
    }))
    .catch(err => console.log(err));
  }

// Experiance functionality state section

  const [experiances, setExperiances] = useState([])

  const experianceDelete = (id) => {
    setExperiances(experiances.filter(experiance => (experiance.id !== id)));
  }

  const experianceAdd = (experiance) => {
    const filteredExperiances = experiances.filter(oldExperiance => oldExperiance.id !== experiance.id);
    setExperiances([...filteredExperiances, experiance]);
  }

  // Education functionality state section

  const [educations, setEducations] = useState([])

  const educationDelete = (id) => {
    setEducations(educations.filter(education => (education.id !== id)));
  }

  const educationAdd = (education) => {
    const filteredEducations = educations.filter(oldEducation => oldEducation.id !== education.id);
    setEducations([...filteredEducations, education]);
  }

  // Reset button functinality
  const btnReset = () => {
    // clearing states
    setPersonalInputValues({
      firstName: '',
      lastName: '',
      title: '',
      photo: null,
      address: '',
      phone: '',
      email: '',
      description: ''
    });
    setExperiances([]);
    setEducations([]);
    // clearing input fields
    const personalData = document.getElementsByClassName('personal-form')[0];
    Array.from(personalData).forEach(input => input.value = '');
    const experianceData = document.getElementsByClassName('experiance-form');
    Array.from(experianceData).forEach(experiance => Array.from(experiance.children).forEach(input => input.value = ''));
    const educationData = document.getElementsByClassName('education-form');
    Array.from(educationData).forEach(education => Array.from(education.children).forEach(input => input.value = ''));
  }

  // Example button functionality
  const btnExample = () => {
    const personalTemplate = {
      firstName: 'Bob',
      lastName: 'Smith',
      title: 'Software Developer',
      photo: require('./assets/fake-profile-pic.jpg'),
      address: '123 Any Street',
      phone: '123-456-7890',
      email: 'bob-smith02@gmail.com',
      description: 'Diligent software engineer with 5+ years experience in commercial application development. Eager to join Company. to build innovative and cutting edge business solutions for the impressive suite of clients within its global reach. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion. Also identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.'
    }

    // Adding personal values to input text fields

    document.getElementById('first-name-input').value = personalTemplate.firstName;
    document.getElementById('last-name-input').value = personalTemplate.lastName;
    document.getElementById('title-input').value = personalTemplate.title ;
    document.getElementById('address-input').value = personalTemplate.address;
    document.getElementById('phone-input').value = personalTemplate.phone;
    document.getElementById('email-input').value = personalTemplate.email;
    document.getElementById('description-input').value = personalTemplate.description;

    const experianceTemplate = [
      {
        id: '1',
        position: 'jr Software Developer',
        company: 'Google',
        city: 'San Francisco',
        from: '2015',
        to: '2017'}
    ]

    // Adding experiance values to input text fields

    document.getElementById('experiance-position').value = experianceTemplate[0].position;
    document.getElementById('experiance-company').value = experianceTemplate[0].company;
    document.getElementById('experiance-city').value = experianceTemplate[0].city;
    document.getElementById('experiance-from').value = experianceTemplate[0].from;
    document.getElementById('experiance-to').value = experianceTemplate[0].to;

    const educationTemplate = [
      {
        id: '1',
        institution: 'University of Toronto',
        city: 'Toronto',
        education: 'Degree',
        subject: 'Computer Science',
        from: '2010',
        to: '2014'
      }
    ]

        // Adding education values to input text fields

        document.getElementById('education-institution').value = educationTemplate[0].institution;
        document.getElementById('education-city').value = educationTemplate[0].city;
        document.getElementById('education-education').value = experianceTemplate[0].education;
        document.getElementById('education-subject').value = educationTemplate[0].subject;
        document.getElementById('education-from').value = educationTemplate[0].from;
        document.getElementById('education-to').value = educationTemplate[0].to;

    setPersonalInputValues(personalTemplate);
    setExperiances(experianceTemplate);
    setEducations(educationTemplate);
  }

  return (
    <div className="App">
      <Header />
      <InputBox personalInfoValue={personalInfoValue} experianceAdd={experianceAdd} experianceDelete={experianceDelete} educationAdd={educationAdd} educationDelete={educationDelete} btnReset={btnReset} btnExample={btnExample} />
      <Resume personalInputValues={personalInfoValues} experianceValues={experiances} educationValues={educations} />     
    </div>
  );
}

export default App;
