import React from 'react';
import { Link } from 'react-router';

class ReviewSessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      shortCode: this.props.params.shortCode,
      activeSession:0,
    };
  }

  getSessions(shortCode) {
    fetch(`/api/sessions/${shortCode}`, {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((sessions) => {
      this.setState({ sessions: sessions.data });
    });
  }

  updateSession(i) {
    this.setState({ activeSession: i });
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getSessions(shortCode);
  }

  render() {
    const sessions = this.state.sessions;
    const url = this.props.location.pathname;
    console.log('sessions', sessions)
    console.log('location', this.props.location)
    console.log('this.state.sessions',this.state.sessions)
    // console.log('The sessions', sessions);
    // console.log('props', this.props.children);
    // this.props.children.props.test = 'test'
    return (
      <div className="sessions-view">
        <div className="sessions-sidebar">
          <div className="info">
            <div className="title">Sessions</div>
            <div className="location">{window.location.host + url}</div>
          </div>
          {sessions.map((item, i) => (<div className="session" key={item.id} onClick={this.updateSession.bind(this, i)}><Link to={`/review/${this.props.params.shortCode}/${item.id}`}>{item.id}</Link></div>))}
        </div>
        {/*TODO: Have the active session come from the URL rather than props*/}
        {this.props.children && React.cloneElement(this.props.children, {
              activeSession: this.state.sessions[this.state.activeSession],
            })}
      </div>
    );
  }
}

module.exports = ReviewSessions;
