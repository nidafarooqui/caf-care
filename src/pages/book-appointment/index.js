import React from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import moment from 'moment';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../scss/pages/book-appointment/react_dates_override.scss';

const blockedDates = [
  moment(),
  moment('2019-06-24'),
  moment('2019-06-25'),
  moment('2019-06-26'),
];
class Appointment extends React.Component {
  state = {
    date: null,
    focused: true,
  };


  onDateChange = (date) => {
    this.setState({ date });
    // show available times
  }

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  }

  isSameDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow
    return a.date() === b.date()
      && a.month() === b.month()
      && a.year() === b.year();
  }

  isDayBlocked = selectedDay => blockedDates.some(day => this.isSameDay(selectedDay, day))


  render() {
    const { date, focused } = this.state;
    return (
      <Layout bodyClass="page-contact">
        <SEO title="Contact" />
        <div className="intro intro-small">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Book an Appointment</h1>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <DayPickerSingleDateController
                      date={date} // momentPropTypes.momentObj or null
                      onDateChange={this.onDateChange}
                      focused={focused} // PropTypes.bool
                      onFocusChange={this.onFocusChange}
                      isDayBlocked={this.isDayBlocked}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>);
  }
}

export default Appointment;
