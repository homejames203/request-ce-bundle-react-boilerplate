import React from 'react';

const filterProps = props => props;

const Field = (props) =>
  <div>
    <input type={props.type} { ...filterProps(props.controls) } />
  </div>;

export default (props) =>
  <form onSubmit={props.handleSubmit} noValidate>
    <div>
      <label htmlFor="username">Username</label>
      <Field type="text" id="username" controls={props.fields.username} />
    </div>
    <div>
      <label htmlFor="displayName">Display Name</label>
      <Field type="text" id="displayName" controls={props.fields.displayName} />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field type="email" id="email" controls={props.fields.email} />
    </div>
    <button type="submit">Submit</button>
  </form>;