# Client Side Email Generator

[![Build Status](https://travis-ci.org/monofrio/ClientSideEmailBuilder.svg?branch=Master)](https://travis-ci
.org/monofrio/ClientSideEmailBuilder)

> This is in **Pre-alpha**

First challenge is to build a way to create an easy and fast responsive HTML email template.
By using [Jade](http://jade-lang.com/) to davelope the HTML structure and [Foundation Ink](http://foundation.zurb.com/emails.html) as the base CSS structure and having Gulp bring it all together.

The second challenge is to create an application that doesn't rely on a server but can create HTML emails be used that have no experience with HTML.
Also this application will need to work on the clientside without using a server.  The user will beable to fill out a form to build this email and have the end result output the HTML.

Whats being used for this project:

* [Bootstrap](http://getbootstrap.com/)
* [Grunt](http://gruntjs.com/)
* [Ink](http://foundation.zurb.com/emails.html)
* [Jade](http://jade-lang.com/)
* [jQuery](http://jquery.com/)
* [React](https://facebook.github.io/react/index.html)
* [Sass](http://sass-lang.com/)

## Getting Started

### Node.js
You will need to install [Node.js](https://nodejs.org/en/) which will also install [NPM (Node Package Manager)](https://www.npmjs.com/).

Also need to have bower installed:
```
$ npm install -g bower
```

This will install the dependencys from NPM
```
$ npm install
```

This will install the dependencys from Bower
```
$ bower install
```

This will start the projects by setting up the developemt folder for testing
```
$ grunt start
```
