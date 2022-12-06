import React from 'react';

function Customer({ name, id, job, gender, img }) {
  return (
    <div>
      <CustomerProfile id={id} name={name} img={img} />
      <CustomerInfo name={name} gender={gender} job={job} />
    </div>
  );
}

function CustomerProfile({ img, name, id }) {
  return (
    <div>
      <img src={img} alt="profile" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}

function CustomerInfo({ name, gender, job }) {
  return (
    <div>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}

export default Customer;
