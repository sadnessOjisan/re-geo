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

```tsx
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

```sh
$ yarn run buildstorybook
```

start storybook

```sh
$ yarn run storybook
```

### export

After make componend and before build, you should export component.

in `src/index.ts` just like do this

```ts
import Hoge from "./constants/hoge";

export { Hoge };
```

### deploy

Befor deploy, you should update `package.json` version.

```sh
$ yarn run build:prd

$ npm publish
```
