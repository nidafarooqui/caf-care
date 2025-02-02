import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8 pb-10">
          <h4 className="mt-4">Business Hours</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">2:30pm</td>
                <td>-</td>
                <td className="closes">4:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">2:30pm</td>
                <td>-</td>
                <td className="closes">4:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">2:30pm</td>
                <td>-</td>
                <td className="closes">4:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">2:30pm</td>
                <td>-</td>
                <td className="closes">4:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">2:30pm</td>
                <td>-</td>
                <td className="closes">4:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">9:00am</td>
                <td>-</td>
                <td className="closes">5:30pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Sunday</td>
                <td className="opens">9:00am</td>
                <td>-</td>
                <td className="closes">5:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
