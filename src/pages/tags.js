import React from "react";
import FaTag from "react-icons/lib/fa/tag";
import { ThemeContext } from "../layouts";
import Article from "../components/Article/";
import Headline from "../components/Article/Headline";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";

class CategoryPage extends React.Component {
  render() {
    const tags = this.props.data.allMarkdownRemark.group;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Article theme={theme}>
              <header>
                <Headline title="Posts by Tag" theme={theme} />
              </header>
              {tags.map(tag => (
                <section key={tag.fieldValue}>
                  <h2>
                    <FaTag />
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </h2>
                </section>
              ))}
              {/* --- STYLES --- */}
              <style jsx>{`
                h2 {
                  margin: 0 0 0.5em;
                }
                h2 :global(svg) {
                  height: 0.8em;
                  fill: ${theme.color.brand.primary};
                }
              `}</style>
            </Article>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

export default CategoryPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: {
        fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
