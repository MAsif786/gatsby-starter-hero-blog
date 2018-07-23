// Remember to add icons for any additional menus here.
const FaHome = require("react-icons/lib/fa/home");
const FaSearch = require("react-icons/lib/fa/search");
const FaEnvelope = require("react-icons/lib/fa/envelope");
const FaTag = require("react-icons/lib/fa/tag");

module.exports = {
  /*
  This is the site title you'll see on the home page. On a personal blog, this
  could be your name and job title, or whatever else you would like to see on the
  page title.
  */
  siteTitle: "Animal Tales - A Collection of Posts by Animals", // <title>
  /*
  This is appended to the end of page and post titles. E.g. if your post is titled
  Famous Short Stories, the title you will see in the browser's title bar will be
  Famous Short Stories - FirstName LastName.
  */
  shortSiteTitle: "Animal Tales",
  // This is shown on the hero image on the home page.
  siteDescription: "Life from the point of view of animals.",
  siteUrl: "https://example.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /*
  If showAuthorName is true, this is the name that will be shown in the Meta
  heading for posts. It is also read by the content creator script to copy the
  name to frontmatter for newly created posts.
  */
  authorName: "FirstName LastName",
  /*
  This controls whether the author's name should be shown in the Meta heading
  for each post. If this is a personal blog where there will only ever be one
  author, there is no point showing the author's name on every post.
  */
  showAuthorName: true,
  // This is used in Seo.js
  authorTwitterAccount: "yourTwitterIdGoesHere",

  // This is shown on the header of each page.
  headerTitle: "Animal Tales",
  headerSubTitle: "Some clever tagline goes here.",

  // manifest.json
  manifestName: "Animal Tales Blog",
  manifestShortName: "something", // max 12 characters
  manifestStartUrl: "/index.html",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone",

  // social
  authorSocialLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/in/yourLinkedInIdGoesHere/" },
    { name: "github", url: "https://github.com/yourGitHubIdGoesHere" },
    { name: "twitter", url: "https://twitter.com/yourTwitterIdGoesHere" }
  ],

  /*
  The object below represents the primary menu along the top on a high-resolution
  screen. To add a new menu item, insert the key/value pairs between the curly
  braces wherever you want that menu item to appear.

  You have control over whether the menu should be shown or not by setting "enabled"
  to true or false.

  The "to" field represents the URL of this menu item.

  The "label" is what is displayed in the browser in the primary menu.

  Pick a Font Awesome icon, require it at the top of this file, and enter the
  name of the icon for "icon".

  If the Contact menu is enabled, it will be shown after any menu items added by Pages
  added via Markdown in the content/pages directory.

  If you want to have a contact form on your site, set "enabled" for Contact to true.
  Any menu items corresponding to pages created via Markdown will come before the
  Contact menu.
  */
  primaryMenu: [
    {
      enabled: true,
      to: "/",
      label: "Home",
      icon: FaHome
    },
    {
      enabled: true,
      to: "/categories/",
      label: "Categories",
      icon: FaTag
    },
    {
      enabled: true,
      to: "/tags/",
      label: "Tags",
      icon: FaTag
    },
    {
      enabled: true,
      to: "/search/",
      label: "Search",
      icon: FaSearch
    },
    {
      enabled: true,
      to: "/contact/",
      label: "Contact",
      icon: FaEnvelope
    }
  ]
};
