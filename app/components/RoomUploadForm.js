'use client'; 

import { useState } from 'react';

const RoomUploadForm = ({ nextStep, prevStep, handleImageUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState({
    lounge: [],
    kitchen: [],
    bedroom: [],
    bathroom: []
  });

  const handleFilesChange = (room) => (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles({
      ...selectedFiles,
      [room]: files
    });
    handleImageUpload(room, files);
  };

  return (
    <div>
      <h1>Upload Room Images</h1>
      <form>
        <label>
          Lounge:
          <input type="file" multiple onChange={handleFilesChange('lounge')} />
        </label>
        <label>
          Kitchen:
          <input type="file" multiple onChange={handleFilesChange('kitchen')} />
        </label>
        <label>
          Bedroom:
          <input type="file" multiple onChange={handleFilesChange('bedroom')} />
        </label>
        <label>
          Bathroom:
          <input type="file" multiple onChange={handleFilesChange('bathroom')} />
        </label>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default RoomUploadForm;
