## Express boilerplate

> Typescript, express, typeorm 을 기본으로 사용하는 express boilerplate 입니다. 



- Node version: v14.17.5

- App Structure

  ``` 
  .
  ├── README.md
  ├── nodemon.json
  ├── ormconfig.json
  ├── package-lock.json
  ├── package.json
  ├── src
  │   ├── app.ts
  │   ├── controllers
  │   │   └── index.controller.ts
  │   ├── databases
  │   │   └── index.ts
  │   ├── dtos
  │   │   └── index.dto.ts
  │   ├── entity
  │   │   └── test.entity.ts
  │   ├── exceptions
  │   │   └── HttpException.ts
  │   ├── interfaces
  │   │   ├── routes.interface.ts
  │   │   └── tests.interface.ts
  │   ├── middlewares
  │   │   └── error.middleware.ts
  │   ├── models
  │   │   └── index.model.ts
  │   ├── routes
  │   │   └── index.route.ts
  │   ├── server.ts
  │   ├── services
  │   │   └── index.service.ts
  │   └── utils
  │       ├── env.ts
  │       └── util.ts
  ├── tsconfig.json
  └── tsconfig.paths.json
  ```



### Setting

- ormconfig.json

``` json
[
  {
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "124578", 
    "database": "localtest", 
    "synchronize": false,
    "logging": false,
    "timezone": "+00:00",
    "entities": [
      "src/entity/**/*.ts"
    ],
    "cli": {
      "entitiesDir": "src/entity"
    }
  }, 
  {
    "name": "production",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "124578", 
    "database": "localtest", 
    "synchronize": false,
    "logging": false,
    "timezone": "+00:00",
    "entities": [
      "dist/entity/**/*.js"
    ],
    "cli": {
      "entitiesDir": "src/entity"
    }
  }
]
```





