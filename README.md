![Microverse](https://img.shields.io/badge/Microverse-blueviolet) ![HTML](https://img.shields.io/badge/-HTML-orange) ![CSS](https://img.shields.io/badge/-CSS-blue) ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)

# [Leaderboard](https://github.com/microverseinc/curriculum-javascript/blob/main/leaderboard/sneak_peek.md)

- The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

- Internet service.
- Basic knowledge of Git/Terminal.
- Visual Studio Code.

### Setup

- Open the terminal on your computer
- Navigate through directories using [change directory (cd)](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10) command to where you want to clone the repository.

- **Type the following command then press ENTER:**

  > git clone git@github.com:angeluray/leaderboard-project.git

- the terminal will send to you information about your download.

- **Type the following lists of commands and press ENTER after each command:**
  - *Basic Setup*
    - npm init -y
    - npm install webpack webpack-cli --save-dev
    - npm install --save lodash
    - npx webpack
    - npx webpack --config webpack.config.js
    - npm run build
  - *Setting up HtmlWebpackPlugin*
    - npm install --save-dev html-webpack-plugin
    - npm run build
  - *Add CSS*
    - npm install --save-dev style-loader css-loader
    - npm run build
  - *Setup local dev server*
    - npm install --save-dev webpack-dev-server
  - *Setup linters*
    - npm install --save-dev hint@7.x
    - npx hint .
    - npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
    - npx stylelint "**/*.{css,scss}"
    - npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
    - npx eslint .
  - **Open folder in VSC**
    - code .

## Built With

- **HTML**
- **CSS**
- **JAVASCRIPT**
- **GitHub flow**
- **Linters Check**
- **Webpack**

## 🌎 Live Demo:
- [Leaderboard App](https://angeluray.github.io/leaderboard-project/)
> The link is currently not available, right after got the project approved it will be here. 

## Authors 
### 👤 Angel Uray
- GitHub: [@angeluray](https://github.com/angeluray)
- Twitter: [@atangeluray](https://twitter.com/atangeluray)
- LinkedIn: [Angel Uray](www.linkedin.com/in/angeluray-jobs)

## Show your support
- Give a ⭐️ if you like this project!

## 📝 License
- This project is [MIT](./LICENSE) licensed.