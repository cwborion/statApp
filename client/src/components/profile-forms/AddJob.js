import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJob } from '../../actions/profile';

const AddJob = ({ addJob, history }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    employer: '',
    jobDescription: '',
    skillsPreferred: '',
    dateApplied: '',
    notes: ''
  });

  const {
    jobTitle,
    employer,
    jobDescription,
    skillsPreferred,
    dateApplied,
    notes
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add A Job</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add related information to the
        job you applied to
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addJob(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Job Title'
            name='jobTitle'
            value={jobTitle}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Employer'
            name='employer'
            value={employer}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            name='jobDescription'
            value={jobDescription}
            onChange={e => onChange(e)}
            cols='30'
            rows='5'
            placeholder='* Job Description'
          ></textarea>
        </div>
        <div className='form-group'>
          <h4>Preferred Skills</h4>
          <input
            type='text'
            placeholder='* Skills'
            name='skillsPreferred'
            value={skillsPreferred}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <h4>Date Applied For Job *</h4>
          <input
            type='date'
            name='dateApplied'
            value={dateApplied}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='notes'
            value={notes}
            onChange={e => onChange(e)}
            cols='30'
            rows='5'
            placeholder='Notes'
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddJob.propTypes = {
  addJob: PropTypes.func.isRequired
};

export default connect(null, { addJob })(AddJob);
