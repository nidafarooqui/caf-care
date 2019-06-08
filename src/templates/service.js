import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Service = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-service">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <h1 className="title">{title}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
                <div className="row justify-content-center bg-warning pl-1 mt-2 mb-2">
                  <div className="col-12">
                    <h2 className="title-3 text-dark pt-1 pb-1">Book Your Appointment</h2>
                  </div>
                  <div className="col-12">
                    <div className="call-box-bottom pb-1">
                      <Link to="/book-appointment" className="button-dark">
                        Book Online
                      </Link>
                      <a href="tel:+44-7447-595703" className="button-dark ml-2">
                        Call us
                      </a>
                    </div>
                    <p className="font-italic">Note: Urgent appointments are charged an additional £10.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default Service;
