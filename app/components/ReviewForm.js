const ReviewForm = ({ nextStep, prevStep, formData }) => {
    const handleSubmit = async () => {
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await res.json();
        console.log(result);
        // Handle success - navigate to success page or show message
      } catch (error) {
        console.error('Error submitting form', error);
      }
    };
  
    return (
      <div>
        <h1>Review Your Details</h1>
        <div>
          <p>Name: {formData.name}</p>
          <p>Surname: {formData.surname}</p>
          <p>Cellphone Number: {formData.cellphone}</p>
          <div>
            <h2>Uploaded Images</h2>
            {Object.keys(formData.rooms).map((room) => (
              <div key={room}>
                <h3>{room}</h3>
                {formData.rooms[room].map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt={`Upload ${index}`} width="100" />
                ))}
              </div>
            ))}
          </div>
          <div>
            <h2>Items</h2>
            {formData.items.map((item, index) => (
              <div key={index}>
                <p>Description: {item.description}</p>
                <p>Brand: {item.brand}</p>
                <p>Serial No: {item.serialNo}</p>
                <p>Quality: {item.quality}</p>
                <p>Cover: {item.cover}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Value: {item.totalValue}</p>
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  
  export default ReviewForm;
  