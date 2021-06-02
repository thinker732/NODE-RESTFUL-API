# NODE-API-MODEL

This project is a basic node API model for you
if you want to start a new RESTFUL API with node it's perfect for you 

## Installation

Use the package manager [npm](https://www.npmjs.com/) 
you also need [nodejs](https://nodejs.org/en/)
to install model.

but i think you already know that

## Usage

Install Noe mudules
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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Unlicense](https://en.wikipedia.org/wiki/Unlicense)