# re-geo

react based geocities component.
Here is components. https://re-geo-storybook.netlify.com/

This is inspired by [geo-bootstrap](https://github.com/divshot/geo-bootstrap). Thanks.

## Usage

to install

```
$ npm i -S re-geo
```

to use

```js
import Button from "re-geo";

const GeoButton = () => {
  return <Button>geo cities!!</Button>;
};
```

## Customization

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

Befor deploy, you should update `package.json` version.

```
$ yarn run build:prd

$ npm publish
```
