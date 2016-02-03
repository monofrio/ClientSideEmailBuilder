# Client Side Email Generator for Convio

[![Build Status](https://travis-ci.org/monofrio/ClientSideEmailBuilder.svg?branch=Master)](https://travis-ci
.org/monofrio/ClientSideEmailBuilder)

> This is in **Pre-alpha**

This is designed to create simple email development tool for users with no experience with HTML.
Also set up to create email templates using Jade, Sass, Ink and Grunt.

My challenge is to create an application that doesn't rely on a server but can be used on the client side browser.
 All they have to do is fill in the forms fields and click generate to have HTML email developed for clients.

Whats being used for this project:
* [Angular](https://angularjs.org/)
    * [Angular Wysiwyg](https://github.com/TerryMooreII/angular-wysiwyg)
    * [Angular Bootstrap Colorpicker](https://github.com/buberdds/angular-bootstrap-colorpicker)
* [Bootstrap](http://getbootstrap.com/)
* [Bower](http://bower.io/)
* [Git](https://git-scm.com/)
* [Grunt](http://gruntjs.com/)
* [Ink](http://foundation.zurb.com/emails.html)
* [Jade](http://jade-lang.com/)
* [jQuery](http://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Sass](http://sass-lang.com/)


## Getting the other Assets

### Node.js

You will need to install [Node.js](https://nodejs.org/en/) which will also install [NPM (Node Package Manager)](https://www.npmjs.com/) to run the commands below.

### Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install by running these command:

```shell
npm install -g grunt-cli
```
and then run:

```shell
npm install
```

This will install all of the node modules used in this project

### Bower

```shell
bower install
```

This will now install all of the bower components used in this project

### Grunt Commands

```shell
grunt body
```

this will pull the correct assets to the production folder if components have updates

```shell
grunt email
```
this will pull your email templet assets together so it can be inlined

```shell
grunt inline
```

this will inline your css 