# SETUP Guide

## Installation

- Clone this repository:

```shell
git clone git@github.com:enesdir/docstore.git
```

- Install dependencies:

```shell
cd docstore
yarn
```

- Before beginning, please make sure you have the following enviroment variable set.

  - copy to ".env.example" to ".env.local". you don't need to set variables Next.js has built-in support for loading environment variables.

    ```shell
    cp .env.example .env.local
    ```

## npm scripts

- `dev` - start development server on <http://localhost:3000>
- `build` - create a production build
- `start` - start serving production build
- `type-check` - run Typescript checks
- `lint` - run lint checks
- `lint:fix` - runs lint and format files
