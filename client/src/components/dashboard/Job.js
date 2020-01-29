import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

// 'job' as a property used below is the array of jobs in the state

const Job = ({ job }) => {
  const jobs = job.map(job => (
    <tr key={job._id}>
      <td>{job.employer}</td>
      <td>{job.jobTitle}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{job.dateApplied}</Moment>
      </td>
      <td>{job.skillsPreferred}</td>
      <td>{job.jobDescription}</td>
      <td>{job.notes}</td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-s'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Date Applied</th>
            <th>Preferred Skills</th>
            <th>Job Description</th>
            <th>Notes</th>
            <th />
          </tr>
        </thead>
        <tbody>{jobs}</tbody>
      </table>
    </Fragment>
  );
};

Job.propTypes = {
  job: PropTypes.array.isRequired
};

export default connect()(Job);
