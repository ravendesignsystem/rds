# Raven Design System (RDS)

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

Let my heart be still a moment and this mystery explore...

## Getting Started

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

## Running RDS Locally

Both of the following commands need to running simultaneously in two terminal windows.

- `npm run sculpin` -- run sculpin static site generator, [read more](https://sculpin.io)
- `npm run watch` -- run the laravel mix watch task, [read more](https://laravel-mix.com)

## Deployment

To deploy, terminate the above scripts and run the scripts below consecutively:

- run `npm run sculpin-prod`, then stop the process
- run `npm run prod`

### Break down into end to end tests

TODO

## Technologies

RDS and its documentation are built with:

- [Love](https://i.redd.it/qh713wbo4r8y.jpg) - <3
- [Laravel Mix](https://laravel-mix.com)
- [SCSS](https://sass-lang.com) - CSS superpower provider used
- [read more](https://sculpin.io)
- [webpack](https://webpack.js.org)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

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
