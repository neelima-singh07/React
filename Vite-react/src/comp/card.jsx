



function StudentCard(props) {
    {/*add css to card*/}
    const cardStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#ee',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '200px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    };
    return (
      <div style={cardStyle}>
        
        <p>Student Name: {props.student}</p>
        <p>Age: {props.age}</p>
        
      </div>
    )

    

}
export default StudentCard;
  
  