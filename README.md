# request-ce-bundle-react-boilerplate

This is a boilerplate project for building Kinetic Request CE client side bundles in React.

You will need to have [nodejs](https://nodejs.org) and [yarn](https://yarnpkg.com) (a nodejs package manager) installed locally, and an instance of Kinetic Request CE running with the [request-ce-bundle-webpack](https://github.com/KineticCommunity/request-ce-bundle-webpack)
bundle deployed.

## Quickstart

1. Ensure the [request-ce-bundle-webpack](https://github.com/KineticCommunity/request-ce-bundle-webpack) bundle is deployed to all Request CE web servers. See the [Readme](https://github.com/KineticCommunity/request-ce-bundle-webpack) file to learn how to deploy and configure the webpack bundle before continuing.

1. Copy the `config.example.js` to `config.js`.

1. Modify the **bundleName**, **localPort**, and **kineticWebserver**
  configuration settings in the `config.js` file (other configuration settings
  are relatively universal).

    - `bundleName` - the name of the bundle, which is used as the value for the *bundleName* parameter in the Kapp Display Page configuration setting in step 1, and described again in the next step.

    - `localPort` - the port the local webpack server will use when running in development mode (`yarn start`).

    - `kineticWebserver` - the location (scheme, server, and port) of the Request CE web application.

1. Configure your space or kapp to use the **request-ce-bundle-webpack** bundle
  and set the the display page to be **webpack.jsp?bundleName=BUNDLE_NAME**
  (where **BUNDLE_NAME** is equal to the value specified in the `config.js`
  file).

1. Install all dependency libraries.

    ```bash
    yarn install
    ```

1. Start the local webpack web server.

    ```bash
    yarn start
    ```

1. Open **http://localhost:LOCAL_PORT/kinetic/SPACE/KAPP** in your web browser
  *(http://localhost:LOCAL_PORT/SPACE/KAPP if you are connecting to kinops.io)*.

## Command Reference

- `yarn start` will run the project in development mode (requires Kinetic
  Request CE to be running)

- `yarn start -- --host 0.0.0.0 --public HOSTNAME` will run in development mode
  like the command above but the server will be accessible to other machines.
  The HOSTNAME provided should be the intended hostname used in the browser when
  connecting to the application.

- `yarn run build` will build the project in "production" mode (this will create
  a *dist* directory with all of the static files necessary to deploy the
  project)

- `yarn add LIBRARY` will install a library and update the *package.json* file.

- `yarn test` will run all of the test cases one time.

- `yarn test:watch` will run test cases each time changes are detected in the source files.

## Deploying into Production Mode

In order to expose the project to others, the static files will need to be
accessible (Amazon s3 is often a convenient and simple way to serve the files).

Once the static files have been deployed somewhere, the space or kapp display
page can be set to **webpack.jsp?bundleName=BUNDLE_NAME&location=LOCATION**
(where **BUNDLE_NAME** is equal to the value specified in the `/config.js` file
and **LOCATION** is equal to the location that the files are served from, such
as *https://s3.amazonaws.com/acme.com/bundles/catalog*.).

See the [Deployment Modes](https://github.com/KineticCommunity/request-ce-bundle-webpack#deployment-modes) documentation in the `request-ce-bundle-webpack` project.
