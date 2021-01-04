# Kaufman technical test ![Status badge](https://img.shields.io/badge/status-in%20progress-yellow)

## 📢 Requirements
- Node JS 12.16.1 _(Recommended)_
- NPM 6.13.4 _(Recommended)_

## 🛠 Instalation
1. Clone this project.

2. Change of directory to the root of the project.
```bash
  cd technical-test-kaufman
```
3. Install the dependencies.
```bash
  npm install
```
4. Run it locally in development mode
```bash
  npm run dev
```
5. The project runs by default at port 8080 so you can open the browser in http://localhost:8080/
6. Run the tests with:
```bash
  npm run test
```

## 🔧 How did you decide which technologies to use as part of your solution(Built with)
- [React](https://es.reactjs.org/) (react, react-dom)
It is the library that I better know and for faster development
- [Babel](https://babeljs.io/) _(Development)_
You need babel to use current features of Ecmascript
- [Webpack](https://webpack.js.org/) _(Development)_
I need webpack for bundle my files
- [Jest](https://jestjs.io/) _(Development)_
I used Jest to implement some snapshots with enzyme

## 🚀 Deploy
1. Once dependencies are installed, you can build too
```bash
  npm run build
```

## 🗄️ API

- **[API Mercado libre][backend_project]**

##  Contributors

- **[Abdiel Ortega][abdiel_github]** _(Frontend Developer and Interface designer)_

You're free to contribute to this project by submitting [issues](https://github.com/abdielDev/technical-test-Kaufman/issues) and/or [pull requests](https://github.com/abdielDev/technical-test-Kaufman/pulls).

## 📜 License
The MIT License (MIT)


[abdiel_github]: https://github.com/abdielDev
[backend_project]: https://api.mercadolibre.com/sites/MLC/search?category=MLC1748
[frontend_project]: https://github.com/abdielDev/99minutos-frontend-interview-test

## 📜 Are there any improvements I could make to your submission?
- UI
- Accessibility
- Add a global state in case the app grows
- Performance

## 📜 What would you do differently if you were allocated more time?
- Add lazy loading to the images
- Implement infinite scroll
- Add a favicon
- Performance