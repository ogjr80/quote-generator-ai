const Summary = ({ formData }) => {
    const totalContentsValue = formData.items
      .filter(item => item.cover === 'Contents')
      .reduce((total, item) => total + parseFloat(item.totalValue.replace('R', '')), 0);
  
    const totalAllriskValue = formData.items
      .filter(item => item.cover === 'Allrisk')
      .reduce((total, item) => total + parseFloat(item.totalValue.replace('R', '')), 0);
  
    return (
      <div>
        <h1>Summary</h1>
        <div>
          <h2>Section</h2>
          <p>Contents: R {totalContentsValue}</p>
          <p>Allrisk: R {totalAllriskValue}</p>
        </div>
        <button type="button" onClick={() => window.location.href = '/'}>Get Quote</button>
      </div>
    );
  };
  
  export default Summary;
  