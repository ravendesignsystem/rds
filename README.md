# Raven Design System (RDS)

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

**Note**: the instructions below are for developing RDS and its documentation. For building projects with RDS, the latest documentation can be found at https://ravendesignsystem.github.io/rds/

## Setting Up

1. Clone project:

    ```clone https://github.com/ravendesignsystem/rds.git```

1. Clone project:

    ```clone https://github.com/ravendesignsystem/rds.git```

2. Install [Sculpin](https://sculpin.io) with [Composer](https://getcomposer.org):
   
   ```php composer.phar install```

3. Install required packages with [npm](https://www.npmjs.com):
   
   ```php composer.phar install```

4. Add an example .env file:
   
   ```cp ./.env-example ./.env```
   
5. Rename the `env-example.env` file and contact a RDS core contributor to get the code for this file.

## Working Locally

1. Create a feature branch from the `develop` branch:
   
   ```git checkout -b feature_name develop```

2. Build the static files, set a watch task and launch BrowserSync by running the npm script:
   
   ```npm run watch```

3. Make small, single-purpose commits often with clear commit messages.
4. When ready, push your branch to Github

   ```git push origin $feature_name```
## NPM Scripts

2. Install [Sculpin](https://sculpin.io) with [Composer](https://getcomposer.org):
   
   ```php composer.phar install```

3. Install required packages with [npm](https://www.npmjs.com):
   
   ```php composer.phar install```
For local dev:

4. Add an example .env file:
   
   ```cp ./.env-example ./.env```
   
5. Rename the `env-example.env` file and contact a RDS core contributor to get the code for this file.

## Working Locally

1. Create a feature branch from the `develop` branch:
   
   ```git checkout -b feature_name develop```

2. Build the static files, set a watch task and launch BrowserSync by running the npm script:
   
   ```npm run watch```

3. Make small, single-purpose commits often with clear commit messages.
4. 🙏 make small, single-purpose commits often with clear messages. 

## Publishing Changes

1. Compile the static files for production by running the npm script:
   
   ```npm run prod```

2. Commit all changes:
   
   ```git commit -am "A clear message"```

3. Push branch to Github

   ```git push origin $feature_name```

4. Squash and merge your feature branch into the develop branch.
5. Delete the feature branch.
6. Merge the `develop` branch into `master`.
## Releases

To create and deploy a new release, follow the steps outlined in the [Release Doc](https://github.com/ravendesignsystem/rds/blob/master/RELEASE.md).
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors & Contributors

TODO...list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

A hat tip to anyone who's code was used as we've stood on the backs of giants for sure.

Like this README, this project is a WIP. It is also built with [Love ❤️](https://i.redd.it/qh713wbo4r8y.jpg) 

Let my heart be still a moment and this [mystery explore...](https://i.pinimg.com/564x/cc/28/3e/cc283e217b5d6bc09c148b6edf2142c8.jpg)