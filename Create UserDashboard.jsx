import React, { useState } from 'react';

const Dashboard = ({ companies }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleCompanySelect = (companyId) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyId)
        ? prev.filter((id) => id !== companyId)
        : [...prev, companyId]
    );
  };

  const renderCompanyRow = (company) => {
    const { name, communications } = company;
    const recentCommunications = communications.slice(-5);
    const nextCommunication = communications[communications.length - 1];

    return (
      <tr key={company.id} className={getRowClass(nextCommunication)}>
        <td>
          <input
            type="checkbox"
            checked={selectedCompanies.includes(company.id)}
            onChange={() => handleCompanySelect(company.id)}
          />
        </td>
        <td>{name}</td>
        <td>
          {recentCommunications.map((com, index) => (
            <div key={index}>
              {com.type} on {com.date}
            </div>
          ))}
        </td>
        <td>{nextCommunication.type} on {nextCommunication.date}</td>
      </tr>
    );
  };

  const getRowClass = (nextCommunication) => {
    const today = new Date();
    const nextDate = new Date(nextCommunication.date);
    const timeDiff = nextDate - today;
    if (timeDiff < 0) return 'overdue';
    if (timeDiff <= 86400000) return 'due-today'; // Within 1 day
    return '';
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Company Name</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>{companies.map(renderCompanyRow)}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
