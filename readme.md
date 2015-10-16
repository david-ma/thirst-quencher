# Thirst Quencher
## A Simple, Satisfying Gulp/Bower Boilerplate That Is Pretty Handy

## Features
* Compiles HTML partials
* Compiles and autoprefixes SASS, and will include any `bower_components` CSS/SASS
* Concatenates JS files and any `bower_components` JS, and runs JSHint
* Live reload with `watch` task
* Deploys to S3 bucket with `deploy` task, and will maintain a cache to speed up subsequent deployments
* Sets production environment on `build` or `deploy` and will minify HTML/CSS and uglify CSS

## Installing Gulp/Bower

Make sure you have `npm` installed (see https://nodejs.org/) and then run

	npm install -g gulp
	npm install -g bower

## Adding Bower Components and Gulp Packages

You can search for `bower` components by running

	bower search <name>

and Bower will display search results.

To install a `bower` component, run

	bower install --save <name>

from your project directory. The `--save` flag will automatically add the `bower` component to your `bower.json` file.

`gulp` packages are searched for and installed like any other `node` package

	npm search <name>
	npm install --save <name>

All Gulp packages will have the prefix `gulp-`.

## Installation of packages and components

Run

	npm install
	bower install

from your project directory to install all the `node` packages and `bower` components.

## Customisation

Comments with the text *Editable* have been added in the `gulpfile.js`, and indicate where you can change/add things to suit your project. Brief comments detailing what can be changed have also been added.

## File/Folder Structure

A basic file/folder structure has been included to illustrate how to organise your `/src` directory.

## Setting Up Deployment

Rename the included `.env.example` file to `.env` and update it with your AWS credentials.

*Note: `.env` should be included in your project's `.gitignore` file so that your credentials will never be included in any commits you make.*

Also make sure to include your S3 bucket `region` and `name` in `gulpfile.js` (locations are marked with the above mentioned *Editable* comments).

## Gulp Tasks

`gulp build` - compiles to `/dist` (sets production environment and will minify HTML, JS, CSS, etc.)
`gulp watch` - compiles to `/dist` (without minification, and will update /dist when you edit files in `/src`)
`gulp clean` - deletes `/dist`
`gulp cacheclear` - clears gulp's cache (sometimes the `watch` task will have trouble with renamed static files such as images - running this after `gulp clean` and then re-running `gulp build` will fix this)
`gulp deploy` - will automatically run `gulp build` and then publish to your specified S3 bucket

### Thanks

Special thanks to *@jmoggach* for creating this boilerplate. It's been extremely useful to me, and I wanted to share it with others who wanted a quick kand easy way to setup Gulp/Bower for their project.