
# mocha-matrix

  Mocha matrix test reporter for the browser.

  ![mocha matrix reporter](http://i.cloudup.com/PSA0dp2vFi24GEh.png)

## Installation

  If you're using [component](https://github.com/component/component)
  add mocha-matrix as a dev dependency:

```
$ component install --dev visionmedia/mocha-matrix
```

  Then tell mocha to use the reporter:

```js
mocha.setup({ ui: 'bdd', reporter: require('visionmedia-mocha-matrix') })
```

  If you're not using component add the `./build` files to
  your page and tell mocha to use the reporter:

```js
mocha.setup({ ui: 'bdd', reporter: Matrix })
```

## Videos

  See it in [action](http://i.cloudup.com/drLhanRIDq.mov).

## License

  MIT
