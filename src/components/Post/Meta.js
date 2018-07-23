import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import config from "../../../content/meta/config";
import kebabCase from "lodash/kebabCase";

import FaCalendar from "react-icons/lib/fa/calendar";
import FaUser from "react-icons/lib/fa/user";
import FaTag from "react-icons/lib/fa/tag";
import FaClock from "react-icons/lib/fa/clock-o";

const Meta = props => {
  const { prefix, author: authorName, category, tags, theme, timeToRead } = props;

  const primaryMenu = config.primaryMenu;
  const idx = primaryMenu.findIndex(menuItem => menuItem.to == "/categories/");
  const categoryMenuEnabled = primaryMenu[idx].enabled;

  return (
    <div className="meta">
      <span>
        <FaCalendar size={18} /> {prefix}
      </span>
      {config.showAuthorName &&
        authorName && (
          <span>
            <FaUser size={18} /> {authorName}
          </span>
        )}
      {categoryMenuEnabled &&
        category && (
          <span>
            <FaTag size={18} />
            <Link to={`/categories/${category}`}>{category}</Link>
          </span>
        )}
      <span>
        <FaClock size={18} />
        {timeToRead} min. read
      </span>
      <ul>
        {tags &&
          tags.map((tag, i) => (
            <li key={kebabCase(tag)}>
              <FaTag size={18} />
              <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </li>
          ))}
      </ul>

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
          ul {
            display: inherit;
            list-style-type: none;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
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

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  tags: PropTypes.any,
  theme: PropTypes.object.isRequired,
  timeToRead: PropTypes.number
};

export default Meta;
