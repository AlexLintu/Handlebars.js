// `source` is a string that contains the raw HTML
const source = document.getElementById('greet').innerHTML;

// `template` is a function that when passed an object returns a completed/compiled template in a string
const template = Handlebars.compile(source);

const context = {
  greeting: 'Hello World!'
}

const compiledHtml = template(context);

const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml;