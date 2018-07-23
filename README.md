# HeroBlog - Modified

This is a ready to use, easy to customize [GatsbyJS](https://www.gatsbyjs.org/) static site starter based on [a fork](https://github.com/cilkay/gatsby-starter-hero-blog) of the [Gatsby hero blog starter by Greg Lobinski](https://github.com/greglobinski/gatsby-starter-hero-blog) with a 'Hero' section on the home page. <br /><br />

![](static/screens/gatsby-starter-hero-blog.gif) <br /><br />

## Summary of Differences From the Original

* [Talkyard comments](https://www.talkyard.io/) has replaced Facebook comments.
* The primary menu can be changed by editing a configuration file.
* Tagging of posts is supported. Categories remain in the starter but are not especially useful if tagging is used.
* A "time to read" header has been added for all posts.
* The post author's name in the post header has been hidden by default. It's still available if you want it but if this starter is being used as a personal blog where there will only ever be one author, it makes no sense to have the author's name on every post header and again in the post footer.
* A script that makes it convenient to generate new blog posts or pages is provided.
* All the directories contained within the `content` directory have been excluded from this repository and a script has been provided to bootstrap the site and optionally, create test content. This is intended to make it easier to separate content you create from the code that generates the final pages that will eventually be deployed.
* The site assets in `./src/images` has been moved to `./content/images` to isolate site-specific data from the code that generates the final pages.

## Features

* Easily editable content in Markdown files (blog posts, pages, and parts)
* CSS with `styled-jsx` and `PostCSS`
* SEO (sitemap generation, robot.txt, meta and OpenGraph Tags)
* Social sharing (Twitter, Facebook, Google, LinkedIn)
* Comments (Talkyard)
* Images - lazy loading and `webp` support (gatsby-image)
* Post categories (category based post list)
* Post tags (tag based post list)
* Post "time to read" implementation
* Draft or published status of posts controlled by `draft` being set to `true` or `false` in frontmatter of posts
* Draft posts excluded from previous/next navigation
* Full text searching (Algolia)
* Contact form (Netlify form handling)
* Form elements and validation with `ant-design`
* RSS feed
* 100% Progressive Web App (manifest.webmanifest, offline support, favicons)
* Google Analytics
* App favicons generator (node script)
* Easily customizable base styles via `theme` object generated from `yaml` file (fonts, colors, sizes)
* Easily customizable primary menu
* React v.16.3 (gatsby-plugin-react-next)
* Components lazy loading (social sharing)
* ESLint (Google config)
* Prettier code styling
* Webpack `BundleAnalyzerPlugin`

## Prerequisites

 1. [Git](https://gitforwindows.org/)
 1. [Node.js](https://nodejs.org/en/download/)
 1. Gatsby - install by typing `npm install --global gatsby-cli` if you don't already have it.
 1. The BASH shell for some of the helper scripts specific to this starter. If you are running Windows, the [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or [Git BASH](https://gitforwindows.org/) are viable options.
 1. A text editor that supports syntax highlighting. [Visual Studio Code](https://code.visualstudio.com/) is an excellent option. There are many others. VS Code has syntax highlighting extensions for Markdown, JavaScript, and styled JSX, all of which are used in this project.

## Quick Start

Type the command that you see below in the highlighted code segments into your shell.

### Create Blog

Create blog based on this starter wherever you want. Substitute whatever you want your blog directory to be called for `/path/to/your/new/blog` below.

```bash
gatsby new /path/to/your/new/blog https://github.com/cilkay/gatsby-starter-hero-blog.git
```

### Go to New Blog Directory

Go to the directory of the newly created blog.

```bash
cd /path/to/your/new/blog
```

### Install Node.js Packages

Install all Node.js package dependencies.

```bash
yarn install
```

### Bootstrap Site

Run the bootstrap script.

```bash
yarn bootstrap-site
```

#### No Starter Content

If you did not copy any starter content, you must create some some before you go any further. This starter requires a cover image per blog post so at the very least, have some placeholder images before you start creating content.

Run the content creation script and follow the prompts to create one or more posts and pages.

```bash
yarn new-content
```

### Start Gatbsy Server

Start the Gatsby development web server.

```bash
gatsby develop
```

Congratulations! In a few easy steps, you now have a running site with some content that you can see by going to http://localhost:8000.

## Revision Control

Before you start customizing the site to fit your needs, you should give some thought to how you are going to manage changes. In [the original starter](https://github.com/greglobinski/gatsby-starter-hero-blog), the Markdown content, the configuration files, images that are site assets, that is, images that are not related to posts that you create, and the code that generates the pages and posts from the Markdown content are stored in the same git repository. The moment you delete the sample content that starter provided and replaced it with your own content, you will have created a changeset and if you wanted to track updates in the code for that starter, you will have to deal with potential merge conflicts.

This fork deliberately treats content as something that should be kept under revision control in a different repository. That is done by putting the `content` directory in `./.gitignore` and adding `./content/.keep-content-dir` to the git repo for this starter to ensure that the `content` directory will remain in the source tree. (Git ignores empty directories.)

Above, you either copied starter content or created your own content. The starter content is just that, something you can use to get the site up to see how it works. If you are using this as your blog, you'll delete that starter content, create your own Markdown content, and eventually publish the content generated from the Markdown you created in some manner.

Everything in `./content` should be stored in a separate git repository. Strictly speaking, you could use any revision control system hosted anywhere so if you prefer Mercurial or something else, feel free to use that. The concepts are the same regardless of which revision control system you use.

To put the `content` directory under revision control, create a new repo on GitHub, for example, and do the following.

```bash
cd content
git init
git add .
git commit -m "Initial commit of blog content."
git remote add origin /url/to/remote/repo
git push origin master
```

If you do not like that approach, you are free to use the monolithic repository approach that the original starter used.

## Customizing the Site

Most of the customizations can be performed by changing things contained in `./content`. By modifying the following, you can make the site your own.

### Configuration

Edit the extensively commented `./content/meta/config.js` as necessary to customize it for your needs.

### Environment Variables

Open `./.env` and substitute all the occurrences of `XXXX` with values that are appropriate for you. During development, this is not strictly necessary but you must do this before deploying into production. This file will contain sensitive information that you must not check into a revision control system, like git. It is excluded by design in `.gitignore`. Do not change that.

### Theme File

You do not have to edit anything in `./content/meta/theme.yaml` right now, if ever. It is complete as it is and it will provide a nicely styled site for you. That file provides variables that are used throughout various files in `./src`. The site uses [styled-jsx](https://github.com/zeit/styled-jsx) and [PostCSS](https://github.com/postcss/postcss) for CSS styling. If you need to make more extensive changes than what would be possible through changing only `theme.yaml`, you will have to modify the source in `./src`.

## Deploying Your Site

The Gatsby site has directions on [how to deploy](https://www.gatsbyjs.org/docs/deploy-gatsby/) to various hosting providers.

To create a static site that is ready to deploy, do the following.

```bash
gatsby build
```

That will put all the build artefacts that are necessary to deploy in `./public`.

You can see the starter in action at the [demo site](https://gatsby-starter-hero-blog-modified.cliffordilkay.com/).

## Contributing

* Fork the repo
* Create your feature branch (git checkout -b feature/fooBar)
* Commit your changes (git commit -am 'Add some fooBar')
* Push to the branch (git push origin feature/fooBar)
* Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
