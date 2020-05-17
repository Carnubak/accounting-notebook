# Accounting Notebook Project

## Server

The application server code lives in the "server" directory as a Node.js project.

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

## Client

The client code lives as another Node.js project within the "react-client" directory.

The client is a simple React application displaying the transaction history. It lacks fancy functinoalities and is only a demonstration of how to query and display the data from the main server endpoint, which provides all the transactions.

The client can be started for development with the following command:

    npm start

Also, a precompiled version is committed within the "compiled-client" directory. this version was created using the command:

    npm run build

and it can be served using any simple static server. For instance, in node, it could be done running:

    npx serve -s compiled-client

## Additional considerations

The server code is intentionally simple. Normally, floating-point numbers (which are used for storing numeric values in Javascript) are not safe for accounting operations, due to rounding errors that occur when working with decimals, or very large numbers. The usual solution to that is to store currency values always as integers representing the lowest precision necessary for calculations (mostfrequently cents, although some specific applications may require cent fractions for calculations). The values would then be converted as necessary for display to the user, while all the internal calculations would be done using integer values only. that optimization is not present in this example, but could be easily added if required.

Also, the client calls a hardcoded URL for reading the transaction history. In a real application, the information of the endpoints and API communication would be isolated within a different module that the component would call. Since this is a very simple exercise, it was not deemed important.
