# re-geo

re: geocities component

## how to use

This app has no html.
For debug, should use storybook.

### storybook

build storybook

```
$ yarn run buildstorybook
```

start storybook

```
$ yarn run storybook
```

### deploy

Befor deploy you should do

- update version in `package.json`

```
$ yarn run build:prd

$ // ここにnpm publish cmd
```
