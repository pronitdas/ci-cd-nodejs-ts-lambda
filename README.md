# ci-cd-nodejs-ts-lambda ⚙️

KISS (kept it stupidly simple) boilerplate for starting with nodejs and typescript and lambda

## Project setup

### Development Environment

```bash
$ npm install
# Install all project dependencies
# Get all environment variables to setup.
```

#### Compiles and hot-reloads for development

```bash
$ npm run dev
# This is primarily for Development. DO NOT USE IN PRODUCTION!
```

### Production Deployment

Production deployment is done automatically by Github Actions and is driven by `build-deploy.yml` file.

###### Configuration Steps

* S3 bucket. folder structure for environment files should be like this.
  * ```${bucket_name}/${branch_name}/${branch_name}.json```
* Configure in github secrets bucket name `SECRETS_BUCKET`.
* Configure in github secrets access credentials for aws. `AWS_SECRET_ACCESS_KEY` `AWS_ACCESS_KEY_ID`.
* Voila. Thats it. When you push to master/dev/stage/test. Code will be auto deployed.
## Contributing 
_Note_: Commits & PRs should now be allowed only if they follow a particular commit format, read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/geospoc/apf-leasemanagement-rules-engine-backend/compare)
