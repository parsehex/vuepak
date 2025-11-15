# Development

## Setup

```bash
git clone https://github.com/parsehex/vuepak
cd vuepak
npm install
```

## Publish New Version

0.

```bash
npm login
```

1. Make desired changes to the project.
2. Increment the version number in `/package.json`, manually or by using:

```bash
npm version <patch | minor | major>
```

3.

```bash
npm run build
```

4.

```bash
npm publish
```
