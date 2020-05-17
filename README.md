# Accounting Notebook Project

## Server

The server is bootstrapped using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) on the provided swagger definition file using the following command:

    java -jar swagger-codegen-cli.jar generate -i swagger.json -l nodejs-server -o server/

You can check the project docs for details on other available generation options.

Note that running the command again will cause the server code to be overwritten. If yu want a file not to be overwritten, you can add it to `.swagger-codegen-ignore`.

The only files that should be edited manually after bootstrapping are the ones under the "service" directory and the data storage abstraction on `data/database.js`. They have all been added to the ignore file, so their changes should persist.

### Starting the Server

To start the Account Notebook server you need to run the following command in the "server" directory:

    npm start

### Testing the server manually

There are a few requests targeting the different server endpoints in `test-requests.http`. They can be used directly from Visual Studio Code using the REST Client extension. This file is also safe to edit for adding new request templates.
