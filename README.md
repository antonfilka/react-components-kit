### Conventional Commits

Lerna will use commits to detect how to bump a version and how to generate a `CHANGELOG.md`. Here is the list of commit types and lerna's output:

Update CHANGELOG:

-   `feat(scope)!: + BREAKING CHANGES:`: bump MAJOR version. CHANGELOG with changes and BREAKING CHANGES section
-   `feat(scope):`: bump MINOR version. CHANGELOG with changes
-   `fix(scope):`: PATCH. CHANGELOG with Bug Fixes section from commits

Don't Update CHANGELOG:

-   `docs:`: PATCH. Nothing in CHANGELOG
-   `style:`: PATCH. Nothing in CHANGELOG
-   `refactor:`: PATCH. Nothing in CHANGELOG
-   `test:`: PATCH. Nothing in CHANGELOG
-   `chore:`: PATCH. Nothing in CHANGELOG
-   `perf:`: PATCH. CHANGELOG with Performance Improvements section
-   `other:`: PATCH. Nothing in CHANGELOG
