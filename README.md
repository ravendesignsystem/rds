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
* `php composer.phar install` -- installs all the dependencies set in the composer.json file

## Running RDS Locally

To run RDS locally and watch all relevant files for changes use `npm run dev`.

The above command runs both the sculpin static site generator, [read more](https://sculpin.io) and the laravel mix watch task, [read more](https://laravel-mix.com) concurrently.

## Deployment

To deploy, terminate the above script and use `npm run prod`.

## Full docs
Further documentation on how to build the RDS docs is available in the [wiki](https://github.com/ravendesignsystem/rds/wiki/RDS-Docs).
### Break down into end to end tests

TODO

## Technologies

RDS and its documentation are built with:

- [Love](https://i.redd.it/qh713wbo4r8y.jpg) - <3
- [Laravel Mix](https://laravel-mix.com)
- [SCSS](https://sass-lang.com) - CSS superpower provider used
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
