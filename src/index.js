import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
import rootReducer from './reducers/index'
import DemoRouter from './pages/Router'

const store = createStore(rootReducer);

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.route = [];
    this.link = [];

    for (let r in DemoRouter) {
      this.route.push(
        <Route path={r} key={r} component={DemoRouter[r]} />
      );
      this.link.push(
        <li><Link to={r}>{r}</Link></li>
      )
    }
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
  <Index store={store}/>,
  document.getElementById('root')
)
