import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
import NextPrev from "./NextPrev";
import TalkyardCommentsIframe from "@debiki/gatsby-plugin-talkyard";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const Post = props => {
  const {
    post,
    post: {
      html,
      timeToRead,
      fields: { prefix },
      frontmatter: { title, category, author, tags }
    },
    authornote,
    next: nextPost,
    prev: prevPost,
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta
          prefix={prefix}
          author={author}
          category={category}
          tags={tags}
          theme={theme}
          timeToRead={timeToRead}
        />
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
      </footer>
      <TalkyardCommentsIframe />
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
