# Raven Design System (RDS)

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

Let my heart be still a moment and this mystery explore...

## Getting started

**Note**: instructions below are for working with the RDS Docs package. RDS design systems documentation can be found at https://ravendesignsystem.github.io/rds/

### Clone repo

Clone this repo https://github.com/ravendesignsystem/rds.git into your project directory.

### Install Dependencies

Make sure you have composer, node and npm installed.

Check if they are installed and what version is installed. If either is not installed, use the links below to learn how.

* `composer --version` -- Read more about [Composer](https://getcomposer.org)
* `node --version` -- Read more about [Node.js](https://nodejs.org/en/)
* `npm --version` -- NPM is install as a part of Node.js

#### Install packages

Once the dependencies above are installed, run the commands below to install the required packages.

* `npm install` -- installs all the dependencies set in the package.json file
* `composer install` -- installs all the dependencies set in the composer.json file
* `cp ./.env-example ./.env` - creates a local env file

**Note**: items in the `.env` file require manual changes, these are only available to a member of Carleton Web Services.

The above commands assume you have composer installed globally. If you have composer install at the project level, you would need to run `php composer.phar`.

## Running RDS Locally for dev

The above command runs both the sculpin static site generator, [read more](https://sculpin.io) and the webpack watch task, [read more](https://webpack.js.org) concurrently.

- `npm run watch`

In order to fully stop the watch task and sculpin server, you need to do more than stop webpack. Once that is stopped, to the following:

- `sudo lsof -i tcp:8000` - get the PID of the sculpin task and make note of it
- `kill -9 PID` - replace PID with the number from the step above

## Deployment

To deploy, terminate both the watch task as well as the sculpin services, and follow the steps outlined in the [Release Doc](https://github.com/ravendesignsystem/rds/blob/master/RELEASE.md)

## Full docs

Further documentation on how to build the RDS docs is available in the [wiki](https://github.com/ravendesignsystem/rds/wiki/RDS-Docs).

### Break down into end to end tests

TODO

## Technologies

RDS and its documentation are built with:

- [Love ❤️](https://i.redd.it/qh713wbo4r8y.jpg) 
- [PostCSS](https://postcss.org)
- [SCSS](https://sass-lang.com)
- [Sculpin](https://sculpin.io)
- [webpack](https://webpack.js.org)

## Contributing

- TODO

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- TODO

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone who's code was used.
- We've stood on the backs of giants for sure.
- Inspiration
- TODO
