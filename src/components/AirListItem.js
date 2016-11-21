import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import moment from 'moment';

export default class AirListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    direction: PropTypes.object.isRequired,
    chooseCarrier: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='row'>
        <div className='col-sm-2'>
          {this.props.carrier}
        </div>
        <div className='col-sm-2'>
          {this.props.direction.from}
        </div>
        <div className='col-sm-2'>
          {this.props.direction.to}
        </div>
        <div className='col-sm-3'>
          {moment(this.props.arrival).format("DD/MM/YYYY")}
        </div>
        <div className='col-sm-3'>
          {moment(this.props.departure).format("DD/MM/YYYY")}
        </div>
      </div>
    );
  }
}
