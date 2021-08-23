# NODE-API-MODEL

This project is a boilerplate of a basic node API model for you
if you want to start a new RESTFUL API with node and mongoose it's perfect for you if you just need a model to start
(with authentification (Bearer))
Node|express|MongoDB

## Installation

Use the package manager [npm](https://www.npmjs.com/)
you also need [nodejs](https://nodejs.org/en/)
and [mongodb](https://www.mongodb.com/try/download/community)
if you want to use the model.

but i think you already know that

## Usage

Install Node modules

```node
npm install
```

create and config .env File

```bash
    touch ./config/dev.env 
    touch ./config/test.env

    echo "PORT=value_port" >> ./config/dev.env
    echo "MONGODB_URL=mongodb://127.0.0.1:27017/database_name" >> ./config/dev.env
    echo "DEBUG_MODE=true" >> ./config/dev.env
    
```

launch the dev environment

```node
npm run dev
```

launch the Test environment

```node
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Unlicense](https://en.wikipedia.org/wiki/Unlicense)
