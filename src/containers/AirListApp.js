import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AirActions from '../actions/airActions';
import { AirList} from '../components';

@connect(state => ({
  airlist: state.airlist
}))
export default class AirListApp extends Component {

  static propTypes = {
    air: PropTypes.object.isRequired,
    currentItem: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { airlist: {air}, airlist: {currentItem}, dispatch } = this.props;
    const actions = bindActionCreators(AirActions, dispatch);

    return (
      <div className='airListApp'>
        <h1>Airport</h1>
        <AirList air={air} currentItem={currentItem} actions={actions}/>
      </div>
    );
  }
}
