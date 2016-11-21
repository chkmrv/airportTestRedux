import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import AirListItem from './AirListItem';
import AirOptionCarrier from './AirOptionCarrier';

export default class AirList extends Component {
  static propTypes = {
    air: PropTypes.object.isRequired,
    currentItem: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
  
  render () {
    let {openStatus} = this.state,
        {air, currentItem} = this.props,
        tempArr = [];
      let carrierList = air.flights.filter((item) => {
        if(!~tempArr.indexOf(item.carrier)) {
          tempArr.push(item.carrier);
          return item
        }
      });
    return (
      <div>
        <div className={["btn-group dropdown btnDropdownToggleWrap", (openStatus) ? ' open' : ''].join(' ')}>
          <button
            type="button"
            className="btnDropdownToggle"
            onClick={this.handleClick.bind(this)}
            title={currentItem}
          >
            <span>{currentItem}</span>
            <span className="caret"></span>
          </button>

          <ul className="dropdownMenu" onClick={this.handleClick.bind(this)}>
            {
              mapValues(carrierList, (carrierList) => {
                return (
                  <AirOptionCarrier
                    key={carrierList.id}
                    id={carrierList.id}
                    carrier={carrierList.carrier}
                    {...this.props.actions} />);
              })
            }
          </ul>
        </div>
        <div className="container tablelist">
          <div className="row tablehead">
            <div className="col-sm-2">
              Компания
            </div>
            <div className="col-sm-2">
              Откуда
            </div>
            <div className="col-sm-2">
              Куда
            </div>
            <div className="col-sm-3">
              Время вылета
            </div>
            <div className="col-sm-3">
              Время прилета
            </div>
          </div>
          {
            mapValues(air.flights, (flights) => {
              if (currentItem == "Все") {
                return (
                  <AirListItem
                    key={flights.id}
                    id={flights.id}
                    carrier={flights.carrier}
                    arrival={flights.arrival}
                    departure={flights.departure}
                    direction={flights.direction}/>)
              } else {
                if (currentItem == flights.carrier) {
                  return (
                    <AirListItem
                      key={flights.id}
                      id={flights.id}
                      carrier={flights.carrier}
                      arrival={flights.arrival}
                      departure={flights.departure}
                      direction={flights.direction}/> )
                }
              }
            })
          }
        </div>
      </div>
    );
  }
  constructor (props, context) {
    super(props, context);
    this.state = {
      openStatus: false
    };
  }
  handleClick () {
    this.setState({ openStatus: !this.state.openStatus});
  }
}
