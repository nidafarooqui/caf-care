import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import MapContainer from '../components/Map';

import chooseSvg from '../images/undraw_choose_80qg.svg';
import mapSvg from '../images/undraw_map_1r69.svg';
import interviewSvg from '../images/undraw_interview_rmcf.svg';
import photoId from '../../static/features/noun_photo ID_2004204.svg';
import medicines from '../../static/features/noun_Medicine_10998.svg';
import glasses from '../../static/features/noun_Glasses_2442548.svg';
import urineSample from '../../static/features/noun_urine sample_695625.svg';
// import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="FULL DRIVERS MEDICAL FITNESS FROM £40 inc vat."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>FULL DRIVERS</h1>
          <h1>MEDICAL FITNESS </h1>
          <h2>FROM £40 inc vat.</h2>
        </div>
      </div>

      <div className="container pt-2">
        <div className="call-box-bottom">
          <a href="/book-appointmen" className="button">
            Book an Appointment Online
          </a>
        </div>
      </div>
      <div className="container pt-md-7 pb-md-7 mt-3">
        <div className="row justify-content-center bg-warning pl-1">
          <div className="col-12">
            <h2 className="title-3 text-dark pt-1 pb-1">Need an Urgent Appointment?</h2>
          </div>
          <div className="col-12">
            <div className="call-box-bottom pb-1">
              <a href="tel:+44-7447-595703" className="button-dark">
                Call us now
              </a>
            </div>
            <p className="font-italic">Note: Urgent appointments are charged an additional £10.</p>
          </div>
        </div>
      </div>
      <div className="container pt-md-3">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-6">How does it work?</h2>
          </div>

          <div className="col-12 col-md-4 mb-1">
            <div className="card service service-teaser">
              <div className="card-content chooseCard">
                <h2>Step 1</h2>
                <h6>
                  <Link to="/book-appointment">Select your own appointment date online</Link>
                  {' '}
                  and pay securely through PayPal.
                </h6>
              </div>
              <div className="align-self-center svg"><img className="svg" alt="Choose an option" src={chooseSvg} /></div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-1">
            <div className="card service service-teaser">
              <div className="card-content map">
                <h2>Step 2</h2>
                <h6>
                  Arrive at the given location.
                </h6>
              </div>
              <div className="align-self-center svg"><img className="svg" alt="Map" src={mapSvg} /></div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-1">
            <div className="card service service-teaser">
              <div className="card-content chooseCard">
                <h2>Step 3</h2>
                <h6>
                  Receive your medical assessment signed and stamped.
                </h6>
              </div>
              <div className="align-self-center"><img className="svg" alt="Interview" src={interviewSvg} /></div>
            </div>
          </div>

        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7 mt-3">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-6">Medical Examinations Offered</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2 mt-6">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-md-7 pb-md-7 mt-3">
        <div className="row justify-content-left">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-6">What to bring with you</h2>
          </div>
          <ul>
            <li>
              <div>
                <img className="checklist-image" alt="id" src={photoId} />
                Photo ID
              </div>
            </li>
            <li>
              <img className="checklist-image" alt="id" src={medicines} />
              Details of any ongoing medical conditions plus a list of your regular medicines.
            </li>
            <li>
              <img className="checklist-image" alt="id" src={glasses} />
              Your driving glasses/contact lenses & prescription
            </li>
            <li>
              <img className="checklist-image" alt="id" src={urineSample} />
              A urine sample
            </li>

          </ul>
        </div>
      </div>
      <div className="container pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-left">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-6">Where are we Located?</h2>

          </div>
          <div className="col-12 pb-20">
            <MapContainer />
          </div>
        </div>
      </div>

    </Layout >
  );
};


export const query = graphql`
  query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/services/" } }
      sort: {fields: [frontmatter___date], order: DESC }
    ) {
        edges {
      node {
        id
          frontmatter {
        path
            title
      date(formatString: "DD MMMM YYYY")
    }
    excerpt
  }
}
}
    allFeaturesJson {
        edges {
      node {
        id
          title
      description
      image
    }
  }
}
}
`;

export default Home;
