import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class AirListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    chooseCarrier: PropTypes.func.isRequired
  }

  render () {
    
    return (
      <li className={`list ${'action'}`}
        onClick={
          () => this.props.chooseCarrier(this.props.carrier)
        }>
        <a className='airInfos'>
          <span>{this.props.carrier}</span>
        </a>
      </li>
    );
  }

}
