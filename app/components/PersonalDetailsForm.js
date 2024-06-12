'use client'
const PersonalDetailsForm = ({ nextStep, handleChange, formData }) => {
    return (
      <div>
        <h1>Personal Details</h1>
        <form>
          <label>
            Name:
            <input type="text" value={formData.name} onChange={handleChange('name')} />
          </label>
          <label>
            Surname:
            <input type="text" value={formData.surname} onChange={handleChange('surname')} />
          </label>
          <label>
            Cellphone Number:
            <input type="text" value={formData.cellphone} onChange={handleChange('cellphone')} />
          </label>
          <button type="button" onClick={nextStep}>Next</button>
        </form>
      </div>
    );
  };
  
  export default PersonalDetailsForm;
  