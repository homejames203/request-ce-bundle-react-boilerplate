import React from 'react';

// TODO: Currently redux form is passing props that are not valid for react elememts,
// react has since started to complain about these props when they are added to things
// like <input />.  filterProps should filter out the props that are not valid to be
// spread onto the <input /> element.

const filterProps = props => props;

const Field = (props) =>
  <div>
    <input type={props.type} { ...filterProps(props.controls) } />
  </div>;

export const Profile = (props) =>
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