# TypeScript Template

This repo contains the structure for a simple TypeScript project.

## Components
- TypeScript configuration files.
- eslinting.
- README.
- CHANGELOG.
- src directory.
- Testing set up.
- Dockerfile.
- Linting, testing and vulnerability scanning pipelines.

## Usage

### Posix
```sh
cp -r src tests .eslintrc.js .github .gitignore CHANGELOG.md Dockerfile README.md package* tsconfig* /path/to/target/directory/
```

### Windows Powershell
```sh
Copy-Item -Path src, tests, .eslintrc.js, .github, .gitignore, CHANGELOG.md, Dockerfile, README.md, package*, tsconfig* -Destination "C:\path\to\target\directory" -Recurse
```
