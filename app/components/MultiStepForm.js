'use client'; 


import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import RoomUploadForm from './RoomUploadForm';
import AddItemForm from './AddItemForm';
import ReviewForm from './ReviewForm';
import Summary from './Summary';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cellphone: '',
    rooms: {
      lounge: [],
      kitchen: [],
      bedroom: [],
      bathroom: [],
    },
    items: []
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleImageUpload = (room, images) => {
    setFormData({ 
      ...formData, 
      rooms: { 
        ...formData.rooms, 
        [room]: images 
      } 
    });
  };

  const addItem = (item) => {
    setFormData({ 
      ...formData, 
      items: [...formData.items, item] 
    });
  };

  switch (step) {
    case 1:
      return <PersonalDetailsForm nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <RoomUploadForm nextStep={nextStep} prevStep={prevStep} handleImageUpload={handleImageUpload} />;
    case 3:
      return <AddItemForm nextStep={nextStep} prevStep={prevStep} addItem={addItem} />;
    case 4:
      return <ReviewForm nextStep={nextStep} prevStep={prevStep} formData={formData} />;
    case 5:
      return <Summary formData={formData} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default MultiStepForm;
