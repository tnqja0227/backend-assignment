## Node-Express-Mongoose-with-Typescript

A node-express-mongoose-with-typescript boilerplate for beginners.

## Usage

You should write your own mongodb URL on .env.

```sh
git clone https://github.com/Byunk/node-express-mongoose-with-typescript.git
cd node-express-mongoose-with-typescript
npm install
cp .env.example .env
npm dev
```

## Code Architecture

```sh
src
├── app
│   ├── application.ts
│   ├── controllers
│   │   ├── index.ts
│   │   └── user.controller.ts
│   ├── index.ts
│   ├── routes
│   │   ├── application.router.ts
│   │   ├── index.ts
│   │   └── users.router.ts
│   ├── schemas
│   │   ├── index.ts
│   │   └── user.schema.ts
│   └── util
│       └── logger.ts
└── index.ts
```

### Logger

It provides the [Winston logger](https://github.com/winstonjs/winston) util by default.

You don't have to use `console.log`. Instead, import logger util and use `logger`

```ts
logger.
```

## License

MIT
