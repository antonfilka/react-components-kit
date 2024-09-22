### Conventional Commits

Lerna will use commits to detect how to bump a version and how to generate a `CHANGELOG.md`. Here is the list of commit types and lerna's output:

Update CHANGELOG:

-   `feat(scope)!: + BREAKING CHANGES:`: bump MAJOR version. CHANGELOG with changes and BREAKING CHANGES section
-   `feat(scope):`: bump MINOR version. CHANGELOG with changes
-   `fix(scope):`: PATCH. CHANGELOG with Bug Fixes section from commits
-   `perf(scope):`: PATCH. CHANGELOG with Performance Improvements section

Don't Update CHANGELOG:

-   `docs:`: PATCH
-   `style:`: PATCH
-   `refactor:`: PATCH
-   `test:`: PATCH
-   `chore:`: PATCH
-   `other:`: PATCH
