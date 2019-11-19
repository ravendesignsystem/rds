# Raven Design System (RDS) Release Process

Temporary NPM and distribution release processes is documented below. This will be improved upon and further documented prior to the 1.0.0 release.

## File changes to version number 

The version string resides in several files within the project requiring manual updating for a new release, including:

- /app/config/sculpin_site.yml - change `version:`
- /src/_core/scss/tools/_vars.scss - change `$version:`
- /package.json - change `"version":`
- /webpack.build.js - change `const ver`
- /webpack.prod.js - change `const ver`

## Update the distribution CHANGELOG

Update the CHANGELOG.md file in /dist/. 

## Run the npm Prod command

`npm run prod`


## Commit the changes

Commit the changes
