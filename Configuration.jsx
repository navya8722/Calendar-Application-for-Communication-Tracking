import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
    { name: 'LinkedIn Message', description: 'Message via LinkedIn', sequence: 2, mandatory: false },
    { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
    { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
    { name: 'Other', description: 'Other communication', sequence: 5, mandatory: false }
  ]);

  const handleDeleteMethod = (index) => {
    const updatedMethods = methods.filter((_, i) => i !== index);
    setMethods(updatedMethods);
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} - {method.mandatory ? 'Mandatory' : 'Optional'}
            <button onClick={() => handleDeleteMethod(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;
