import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setResult, addType, addPrimary, addSubtype } from './actions';
import { getNumberOfAvailableModels, getNumberOfAvailableVendors } from './selectors';
import { vendorIds, type, primary, subtype } from './values';

const N_MODELS = 4000;

const mapStateToProps = state => ({
  result: state.result,
  numberOfAvailableModels: getNumberOfAvailableModels(state),
  numberOfAvailableVendors: getNumberOfAvailableVendors(state)
});

const mapDispatchToProps = dispatch => ({
  setResult: count => dispatch(setResult(fakeResult(count))),
  addType: type => dispatch(addType(type)),
  addPrimary: primary => dispatch(addPrimary(primary)),
  addSubtype: subtype => dispatch(addSubtype(subtype))
});

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const fakeResult = (count) => {
  let result = [];
  while (count > 0) {
    result = [
      ...result,
      {
        type: type[getRandomInt(type.length)],
        primary: primary[getRandomInt(primary.length)],
        subtype: subtype[getRandomInt(subtype.length)],
        vendor_id: vendorIds[getRandomInt(vendorIds.length)]
      }
    ];
    count -= 1;
  }
  return result;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.props.setResult(N_MODELS);
    this.props.addType(['PDX', 'cdx', 'txt']);
    this.props.addPrimary(['colon', 'skin', 'rectum']);
    this.props.addSubtype(['adenocarcinoma', 'moderately differenciated adenocarcinoma']);
  }
  
  componentWillMount() {
    window.performance.mark('App');
  }

  componentDidMount() {
    this.setState({ time: window.performance.now('App').toFixed(0)});
  }
  
  render() {
    return (
      <div>
        <div>
          Inventory: { N_MODELS } models
        </div>
        <div>
          State size: ~{ (JSON.stringify(this.props.result).length / 1024).toFixed(0) } KB
        </div>
        <div>
          Search obtained... { this.props.numberOfAvailableModels } models, { this.props.numberOfAvailableVendors } vendors
        </div>
        <div>
          Rendering time: { this.state.time } ms
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
