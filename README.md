# Raven Design System (RDS)

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

Let my heart be still a moment and this mystery explore...

## Design System Docs

**Note**: the instructions below are for working with and building the RDS and the system documentation. The latest RDS design systems documentation can be found at https://ravendesignsystem.github.io/rds/
## Getting Set Up Locally

### Clone Repo

Set up a project folder and clone this repo https://github.com/ravendesignsystem/rds.git into your project directory.

### Dependencies

* `node & npm` -- Make sure a recent stable version of node and npm are installed to work with your project.
* `composer` -- composer is required to install Sculpin. The appropriate version .phar file is included with the repo.

### Install packages

Run the commands below:

* `npm install` - install required packages.
* `php composer.phar install` - installs [Sculpin](https://sculpin.io) and its dependencies.
* `cp ./.env-example ./.env` - creates a local env file to be modified for deployment. **Note** talk to the core Carleton contributors for the required .env code.

## Local Run Commands

* `npm run watch` - deploys the Sculpin local static build, the WebPack watch task and BrowseSync.
* `npm run build` - build the Sculpin local static files and prepares them for production.
* `npm release` - prepares the files for a new release.

## Deployment

To deploy, terminate both the watch task as well as the sculpin services, and follow the steps outlined in the [Release Doc](https://github.com/ravendesignsystem/rds/blob/master/RELEASE.md)

## Full docs

Further documentation on how to build the RDS docs is available in the [wiki](https://github.com/ravendesignsystem/rds/wiki/RDS-Docs).

## Built With

RDS and its documentation are built with [Love ❤️](https://i.redd.it/qh713wbo4r8y.jpg) 

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

Like this README, this project is a WIP.
