import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>About Us</h1>
              <p>
                We are experts in providing medical examination services to professional drivers, whether that be for a Taxi, Lorry, Bus or Fork Lift Operator. All the doctors hold registration with the General Medical Council of United Kingdom and have a licence to practice in the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="team-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
          }
        }
      }
    }
  }
`;

export default Team;
