# Raven Design System (RDS)

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

**Note**: the instructions below are for building RDS and its documentation. For building projects with RDS, the latest documentation can be found at https://ravendesignsystem.github.io/rds/

## Setting Up Locally

1. Set up a project folder and navigate to it in the Terminal.
2. Make sure you have **node installed** to work in this directory.
3. Run `git init`.
4. Run `git remote add origin https://github.com/ravendesignsystem/rds.git`.
5. Run `git fetch`.
6. Checkout the **develop** branch.
7. Run `php composer.phar install` to install [Sculpin](https://sculpin.io).
8. Run `npm install`.
9. Run `cp ./.env-example ./.env`, rename it to .env and contact a core contributor to get code for this file.

## NPM Scripts

### Dev Commands

For local dev, run:

* `npm run watch` to build the static Sculpin files for dev, set a watch task and launch a browser/BrowserSync.

### Prod Ready Commands

When ready to push to prod, terminate any running tasks and run:

* `npm run prod` to prepare the static files for prod. **Important** run this before committing to the develop and master branches.

## Releases & Deployment

To create and deploy a new release, follow the steps outlined at [Release Doc](https://github.com/ravendesignsystem/rds/blob/master/RELEASE.md).
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors & Contributors

TODO ...list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

A hat tip to anyone who's code was used as we've stood on the backs of giants for sure.

Like this README, this project is a WIP. It is also built with [Love ❤️](https://i.redd.it/qh713wbo4r8y.jpg) 

Let my heart be still a moment and this [mystery explore...](https://i.pinimg.com/564x/cc/28/3e/cc283e217b5d6bc09c148b6edf2142c8.jpg)

