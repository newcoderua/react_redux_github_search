import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import ResultItem from './result_item';
import $ from "jquery";

export default class InputResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      client_id: 9d668700929a909ff984,
      client_secret: e48f108e21653a542de563191a65edfd95810b5e,
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchingUsers = this.fetchingUsers.bind(this);
  }

  componentDidMount() {
    //here I manage all events with arrow move up and down, plus when you hit enter
    document.addEventListener("keydown", keyDownTextField, false);
    function keyDownTextField(e) {
    var keyCode = e.keyCode;
      if(keyCode === 40) {
        //key down
        if (parseInt($('#button-results-picked').attr('class')) >= 5) {
          return;
        } else {
          var classId = parseInt($('#button-results-picked').attr('class')) + 1;
          $('#button-results-picked').attr('id', 'button-results');
          $(`.${classId}`).attr('id', 'button-results-picked');
          $('#search-input')['0'].value = $('#button-results-picked')['0'].innerText;
        }
      } else if (keyCode === 38) {
        // key up
        if (parseInt($('#button-results-picked').attr('class')) === 0) {
          return;
        } else {
          var classId = parseInt($('#button-results-picked').attr('class')) - 1;
          $('#button-results-picked').attr('id', 'button-results');
          $(`.${classId}`).attr('id', 'button-results-picked');
          $('#search-input')['0'].value = $('#button-results-picked')['0'].innerText;
        }
      } else if ((keyCode === 13) && (document.getElementById('search-results').style.display === 'block')) {
        //hit enter
        location.href = $('#button-results-picked img').attr('id');
      }
    }
  }

  fetchingUsers() {
    var inputValue = document.getElementById('search-input').value;
    // I can use window.fetch due to React
    // also I used client_id and client_secret from github to increase number of requests
    // per minute, from 10 to 30
    var results = fetch(`https://api.github.com/search/users?q=${inputValue}&client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`)
      .then(res =>  res.json())
      .then(result => result.items)

    return results;
  }

  handleChange() {
    if (document.getElementById('search-input').value === '') {
      document.getElementById('search-results').style.display = 'none';
      return;
    }
    this.fetchingUsers().then(function(res) {
      if (res) {
        this.props.addUsers(res)
      }

    }.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      document.getElementById('search-results').style.display = 'block';
    }
    this.setState({ users: nextProps.users});
  }

  render() {
    // debugger
    if (Object.keys(this.state.users).length === 0) {
      return(
        <div className="inner-input-results">
          <div>
            <FaSearch />
            <input id="search-input" onChange={this.handleChange} placeholder="type a github username" />
          </div>
            <div id="search-results" className="search-results">GITHUB USERS
          </div>
        </div>
      )
    } else {
      return(
        <div className="inner-input-results">
          <div>
            <FaSearch />
            <input id="search-input" onChange={this.handleChange} placeholder="type a github username" />
          </div>
          <div id="search-results" className="search-results">
            <div id='github-users'>GITHUB USERS</div>
            <div className="search-results-items">
              {(this.state.users).map((user, id) => {
                if (id < 6) {
                  return <ResultItem
                    key={id}
                    user={user}
                    id={id}
                    />
                } else {
                  return;
                }
              })}
              </div>
          </div>
        </div>
      )
    }
  }
}
