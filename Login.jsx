import React, { useState } from 'react';

const CommunicationModal = ({ isOpen, onClose, company, onLogCommunication }) => {
  const [communication, setCommunication] = useState({
    type: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogCommunication(company.id, communication);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Log Communication for {company.name}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Communication Type:
            <select
              value={communication.type}
              onChange={(e) => setCommunication({ ...communication, type: e.target.value })}
            >
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              value={communication.date}
              onChange={(e) => setCommunication({ ...communication, date: e.target.value })}
            />
          </label>
          <label>
            Notes:
            <textarea
              value={communication.notes}
              onChange={(e) => setCommunication({ ...communication, notes: e.target.value })}
            />
          </label>
          <button type="submit">Log Communication</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CommunicationModal;
