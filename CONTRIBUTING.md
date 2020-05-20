# Contributing to React Template Awesome (RTA)

Loving React Template Awesome and want to get involved? Thanks! The following guide is the first step in becoming a RTA contributor.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

## Our Objetive

Our main objective is to provide a starting point for creating applications quickly and safely.

## Code of Conduct

RTA has adopted a Code of Conduct to which we expect project participants to adhere. Read [the full text](./CODE_OF_CONDUCT.md) so you can understand what actions will and will not be tolerated.

## Our Development Process

We sync our internal repository with this github repository through regularly scheduled jobs. You can expect to see the updates we make in-house here soon after.

## Submitting an issue

There are some rules you need to abide by to speed up the process of reporting and triaging issues. For example, if you don’t follow the bug report template when reporting a bug, there’s a chance that it’s deprioritized or dismissed.

### Reporting a bug

If you’ve found a bug within the project, use the [Bug report]() template when submitting an issue on GitHub. Following the template helps contributors to identify the bug and fix it more easily.

### Requesting a feature

Is something missing from the project that you want to see added in the next version? Submit an issue using the [Request a feature]() template, and we’ll consider it.

## Pull Requests

We actively appreciate your pull requests. You should be aware that a problem should be submitted before a pull request.

The `master` branch contains the latest released version of the template and not used for development. Instead, it would be best if you targeted the `develop` branch. It holds the code for the next version.

We recommend creating a feature branch based on the development branch as per the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

Follow the following branching example:

* For a problem: `hotfix/[#issue]-[short-name-issue]`
* For a feature: `feature/[#issue]-[short-name-issue]`

The step by step

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## Coding Style

We are using Prettier to format our source code. The styles are enforced via eslint. Make sure everything is well formatted before creating a PR. Therefore, run `npm run lint`, `npm run lint:fix` and `npm run pretty` to apply formatting fixes.

## License

By contributing to RTA, you agree that your contributions will be licensed under the [LICENSE](./LICENSE) file.
