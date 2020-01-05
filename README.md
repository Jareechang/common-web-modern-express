# @common-web mordern express example 

An Example of running an express.js api using with @common-web utils. Leverage latest babel + typescript features in your api.


### Tech

- [@common-web/rollup](https://github.com/Jareechang/common-web/tree/master/packages/rollup) (bundler)
- [@common-web/babel](https://github.com/Jareechang/common-web/tree/master/packages/babel) (transpiler)
- [@common-web/ts-config](https://github.com/Jareechang/common-web/tree/master/packages/ts-config) (ts-config)
- [@common-web/prettier](https://github.com/Jareechang/common-web/tree/master/packages/prettier) (prettier)
- [@common-web/lint-staged](https://github.com/Jareechang/common-web/tree/master/packages/lint-staged) (lint-staged)
- nodemon (watch mode)

### Getting Started 

1. Installation

```
yarn install

```

2. Commands (run server static or in watch mode)

```sh

// Build src files (index.ts) into dist/index.js
yarn run build

// runs the server 
yarn run run-server

// runs the server in watch mode
yarn run watch-server
```

3. Test out API 

**Request:**

```
curl http://localhost:3000/api/test | jq

```

**Response:**

```json
{
  "data": [
    {
      "name": "Bob",
      "age": 32
    },
    {
      "name": "Judy",
      "age": 33
    },
    {
      "name": "Jill",
      "age": 28
    },
    {
      "name": "Sally",
      "age": 22
    }
  ]
}
```
