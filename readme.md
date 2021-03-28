* npm init -V 
* npm i react react-dom
* creamos carpetas en la raiz: public, src
    public: creamos index.html
    src:    -creamos index.js
            - creaoms carpeta components y un archivo App.jsx



 (este en modo dev)
##### WEBPACK #####
npm i webpack webpack-cli webpack-dev-server -save-dev  
npm i html-webpack-plugin html-loader -save-dev

##### BABEL #####
npm i babel-loader @babel/preset-env @babel/preset-react @babel/core -save-dev

##### CSS #####
npm i css-loader mini-css-extract-plugin -save-dev

##### ESLINT #####
npm i -g eslint  (global)
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -save-dev

##### PRETTIER #####
npm i prettier eslint-plugin-prettier eslint-config-prettier -save-dev


### REACT ROUTER DOM #####
npm i react-router-dom --save


### PAYPAL ###
npm i react-paypal-button --save

### GOOGGLE MAPS ###
npm i @react-google-maps/api --save

### AXIOS ###
npm i axios

### FIREBASE ###
npm i -g firebase-tools
firebase login
firebase init
    *select firebase proyect
    *what do you want to use as a your public directory: dist
    * configure as a single-page app... : y
    * github.. : n
    * file dist/index.htmt... averwrite: n