# Video editor

### Technologies

- [React](https://facebook.github.io/react/)
- [Redux](http://rackt.github.io/redux)

### Tools
- [Webpack](https://webpack.github.io/) - module bundler.
- Webpack hot reloading (webpack-hot-middleware).
Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.
- [Babel](https://github.com/babel/babel/) - The compiler for writing next generation JavaScript. (babel-preset-es2015, babel-preset-react)


node_modules/eslint/bin/eslint.js containers/ --fix
node_modules/mocha/bin/mocha test/html5video/reducers/root.spec.js

### Issues
https://medium.com/@kentcdodds/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0#.n9xuivx4o
http://gaearon.github.io/react-dnd/docs-faq.html#how-do-i-combine-several-drag-sources-and-drop-targets-in-a-single-component-

Wrap component
export default connect(  
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(Table))

PaymentsTable = DropTarget(DND_ITEM_TYPE_SETTING_PAYMENT, paymentTarget, collectTarget)(PaymentsTable);
PaymentsTable = DragDropContext(HTML5Backend)(PaymentsTable);
export default PaymentsTable;

redux compose

lodash flow

webpack --profile --json > stats.json
http://webpack.github.io/analyse/