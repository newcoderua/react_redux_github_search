import React from 'react';

export default class ResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: this.props.user.html_url,
      img: this.props.user.avatar_url,
      username: this.props.user.login,
      id: this.props.id,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      link: nextProps.user.html_url,
      img: nextProps.user.avatar_url,
      username: nextProps.user.login
    })
  }

  handleClick() {
    location.href = this.state.link;
  }

  render() {
    var id;
    if (this.state.id === 0) {
      id = "button-results-picked"
    } else {
      id = 'button-results';
    }

    return(
      <div className="result-item-class">
        <button className={this.state.id} id={id} onClick={this.handleClick}>
          <img id={this.state.link} src={this.state.img} />
          {this.state.username}
        </button>
      </div>
    )
  }
}
