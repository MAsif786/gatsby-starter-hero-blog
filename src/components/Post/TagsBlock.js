import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";
import FaTag from "react-icons/lib/fa/tag";

const TagsBlock = props => {
  const { tags, theme } = props;

  return (
    <div className="tags-block">
      <ul>
        {tags &&
          tags.map((tag, i) => (
            <li key={kebabCase(tag)}>
              <FaTag size={16} />
              <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </li>
          ))}
      </ul>

      {/* --- STYLES --- */}
      <style jsx>{`
        .tags-block {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          ul {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
            list-style-type: none;
          }
          li {
            padding: 0px 5px;
            text-transform: uppercase;
          }
        }
        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </div>
  );
};

TagsBlock.propTypes = {
  tags: PropTypes.any,
  theme: PropTypes.object.isRequired
};

export default TagsBlock;
