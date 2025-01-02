import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: 2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies([...companies, form]);
    setForm({
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: 2
    });
  };

  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  return (
    <div>
      <h2>Manage Companies</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Company Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input type="text" name="linkedInProfile" placeholder="LinkedIn Profile" value={form.linkedInProfile} onChange={handleChange} />
        <input type="email" name="emails" placeholder="Emails" value={form.emails} onChange={handleChange} />
        <input type="text" name="phoneNumbers" placeholder="Phone Numbers" value={form.phoneNumbers} onChange={handleChange} />
        <textarea name="comments" placeholder="Comments" value={form.comments} onChange={handleChange}></textarea>
        <input type="number" name="communicationPeriodicity" placeholder="Communication Periodicity (weeks)" value={form.communicationPeriodicity} onChange={handleChange} min="1" />
        <button type="submit">Add Company</button>
      </form>
      
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name} - {company.location} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
