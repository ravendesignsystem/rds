# Raven Design System (RDS) Release Process

Temporary NPM and distribution release processes is documented below. This will be improved upon and further documented prior to the 1.0.0 release.

## File changes to version number 

The version string resides in several files within the project requiring manual updating for a new release, including:

- /app/config/sculpin_site.yml - change `version:`
- /src/_core/scss/tools/_vars.scss - change `$version:`
- /dist/package.json - change `"version":`
- /package.json - change `"version":`
- /webpack.release.js - change `const version`

## Update the distribution CHANGELOG

Update the CHANGELOG.md file in /dist/. 

## Run the npm Prod command

`npm run prod`

## Commit the changes

Commit the changes including the new dist folder files and files with version number changes.

Also, push the changes and setup a release on Github (not documented here)

## Move the CSS and JS files to CDN

Note: this should be made automated but we should create its own command for releases as we don't want the files moving every time the prod command is run. For now, move them manually.

In /dist/NEW VERSION NUMBER/ move the .css, .gz and .js files to both:

- http://cu-rds.s3.amazonaws.com/rds/CORRESPONDING Version number/ 
- http://cu-rds.s3.amazonaws.com/rds/latest/

## Publish the Dist folder to NPM

For now, I've set up a separate project with the `dist` folder as its root.

Open the project and run `npm publish`.

You will need the permissions to publish. Will note in internal docs.
