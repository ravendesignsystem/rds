# Raven Design System (RDS) Release Process

NPM and distribution release processes is documented below. This will be improved upon and further documented prior to the 1.0.0 release.

**Note**: before starting, make sure the webpack watch task has been stopped, and properly shut down the sculpin service, as noted in the readme file.

## Github Release
Using your preferred github gui, do the following:

- Make sure you are on the `dev` branch
- Create a `release` branch using the version number that you will be releasing
- Following the rest of the instructions below

### Update Version Numbers
The version number exists in several files and is required to be updated:

- `/app/config/sculpin_site.yml` - change version on line 4
- `/dist/package.json` - change version on line 3
- `/src/_core/scss/tools/_vars.scss` - change version variable on line 19
- `package.json` - change version on line 3
- `webpack.release.js` - change version on line 15

### Update the distribution CHANGELOG

- Update the `CHANGELOG.md` file in `/dist`

### Build Release for NPM and Prod Docs

- In a terminal window, run `npm run build ; npm run release`
- Go into the `/dist` folder and run `npm publish` to push the new release to npm

### Finish Release Branch

- Commit all the changes using a message similar to `Updating to version 0.XX.X`
- Merge release branch into `dev`
- Merge release branch into `master`
- Tag the latest commit to master with the version number being released
- Push changes from `dev` and `master` to remote
- Delete release branch from local, and remote if it was pushed