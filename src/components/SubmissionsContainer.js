import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { SubmissionsAPI } from 'react-kinetic-core';

// eslint-disable-next-line
const SubmissionRow = ({ submission }) => (
  <div>
    <div className="col-xs-4">
      <dl>
        <dt>Label</dt>
        <dd>{submission.label}</dd>
      </dl>
    </div>
    <div className="col-xs-8">
      <div className="row">
        {Object.keys(submission.values).map(key =>
          <div className="col-xs-2">
            <strong>{key}</strong>
            <p>{submission.values[key]}</p>
          </div>,
        )}
      </div>
    </div>
  </div>
);

class Submissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: [],
      search: {},
    };
  }

  componentWillMount() {
    const searcher = new SubmissionsAPI.SubmissionSearch()
      .coreState('Draft')
      .includes(['details', 'values']);
    const search = searcher.build();
    SubmissionsAPI.searchSubmissions({ search })
      .then(({ submissions }) => this.setState({ submissions }));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.submissions.map(
             submission => <SubmissionRow key={submission.id} submission={submission} />,
           )}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ submissions }) => ({
  ...submissions,
});

export const SubmissionsContainer = compose(
  connect(mapStateToProps),
)(Submissions);
