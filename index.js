
/**
 * Expose `Matrix`.
 */

module.exports = Matrix;

/**
 * Initialize a new `Matrix` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Matrix(runner) {
  var root = document.getElementById('mocha');
  var errors = document.createElement('ul');
  errors.className = 'errors';
  var n = 0;

  var els = boxes(runner.total);

  for (var i = 0; i < els.length; i++) {
    root.appendChild(els[i]);
  }

  var i = 0;
  runner.on('pass', function(test){
    show(els[i++], 'test pass');
  });

  runner.on('fail', function(test, err){
    var id = 'error-' + ++n;
    var el = els[i++];
    el.href = '#' + id;
    show(el, 'test fail');

    var msg = err.stack || err.message;
    var pre = document.createElement('pre');
    text(pre, msg);

    var title = document.createElement('h3');
    title.setAttribute('id', id);
    text(title, test.fullTitle());

    var li = document.createElement('li');

    li.appendChild(title);
    li.appendChild(pre);

    errors.appendChild(li);
  });

  runner.on('end', function(){
    root.appendChild(errors);
    show(errors, 'errors');
  });

  function show(el, classname) {
    el.className = classname;
    setTimeout(function(){
      el.className = classname + ' show';
    }, 0);
  }
}

/**
 * Create `n` boxes.
 */

function boxes(n) {
  var els = [];

  for (var i = 0; i < n; i++) {
    var el = document.createElement('a');
    el.className = 'test';
    els.push(el);
  }

  return els;
}

/**
 * Set `el` text to `str`.
 */

function text(el, str) {
  if (el.textContent) {
    el.textContent = str;
  } else {
    el.innerText = str;
  }
}

/**
 * Listen on `event` with callback `fn`.
 */

function on(el, event, fn) {
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
  } else {
    el.attachEvent('on' + event, fn);
  }
}
