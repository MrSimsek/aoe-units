import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";

import Home from "../pages/Home";
import Units from "../pages/Units";
import UnitDetails from "../pages/UnitDetails";

import { loadUnits } from "../../redux/actions";

import "../../styles.scss";
import "./index.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.loadUnits();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path="/units/:unitId" component={UnitDetails} />
            <Route path="/units" component={Units} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ isLoading, units, error }) => ({
  isLoading,
  units,
  error
});

const mapDispatchToProps = dispatch => ({
  loadUnits: () => dispatch(loadUnits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
