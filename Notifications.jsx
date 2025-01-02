import React from 'react';

const Notifications = ({ overdueCommunications, todaysCommunications }) => {
  return (
    <div>
      <h2>Notifications</h2>
      <h3>Overdue Communications</h3>
      <ul>
        {overdueCommunications.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
      <h3>Today's Communications</h3>
      <ul>
        {todaysCommunications.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
