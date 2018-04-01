import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  HashRouter as Router, Route, Link, Redirect
} from 'react-router-dom';
import rootReducer from './reducers/index'
import DemoRouter from './pages/Router'
import LoginPage from './pages/LoginPage'


const store = createStore(rootReducer);

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.route = [];
    this.link = [];


    this.route.push(
      <Route path="/LoginPage" component={LoginPage} />
    );
    for (let r in DemoRouter) {
      this.route.push(
        <Route path={r} key={`${r}_route`} component={DemoRouter[r]} />
      );
      this.link.push(
        <li><Link key={`${r}_link`} to={r}>{r}</Link></li>
      )
    }
    this.route.push(
      <Route path="/" component={() => <Redirect to="/LoginPage" />} />
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <ul>
              {this.link}
            </ul>
            {this.route}
          </div>
        </Router>
      </Provider>
    )
  }

}

ReactDOM.render(
  <Index store={store} />,
  document.getElementById('root')
)
