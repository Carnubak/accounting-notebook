# Accounting Notebook Project

## Server

The server is bootstrapped using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) on the provided swagger definition file using the following command:

    java -jar swagger-codegen-cli.jar generate -i swagger.json -l nodejs-server -o server/

You can check the project docs for details on other available generation options.
