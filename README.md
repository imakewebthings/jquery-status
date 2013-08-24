#jQuery Status

[![Master Build Status](https://travis-ci.org/imakewebthings/jquery-status.png?branch=master)](https://travis-ci.org/imakewebthings/jquery-status)

jQuery Status is a styleless status message plugin.

## Basic Usage

```js
$('.status-element').status();
```

This will inject the status template into the subject element and allow the element to respond to further status plugin methods.

## Options

- **template** - The snippet of HTML that will be injected on instantiation. This template will replace any existing HTML inside the element.
- **messageSelector** - Selector that matches the status message. This is where the contents of a `message` method call will be rendered.
- **initialMessage** - The message to render on instantiation, as if the `message` method was immediately called. The default is blank.
- **initialState** - The state of the status element on instantiation, as if the `state` method was immediately called. The default is `"hidden"`, so the element is given the class `is-hidden`.
- **statePrefix** - When the `state` method is called, this string will be prepended to the state and added as a class to the status element.


## Defaults

```js
{
  template: '<span class="status-message"></span>',
  messageSelector: '.status-message',
  initialMessage: '',
  initialState: 'hidden',
  statePrefix: 'is-'
}
```

## Methods

Methods are invoked by passing the name of the method as the first argument to `.status`. Additional arguments passed to `.status` are passed to the method.

### message(htmlString | function)

```js
$('.status-element').status('message', 'Can contain <em>html</em>.');
```

This method is little more than an alias for calling jQuery's [`html`](http://api.jquery.com/html/) method on the element matched by the `messageSelector` option (`.status-message` by default.) As such, you may pass it an html string or a function.

### state(string)

```js
$('.status-element').status('state', 'waiting');
```

Status elements can only have one state at a time. The string passed to the state method is appended to the `statePrefix` and added as a class to the status element. Setting the state will remove the previous state class.

## What About Styling?

This repository includes no CSS. It is up to you to style the status, the message, and any states you set on the elements.

## Tests

Tests are written in [mocha](http://visionmedia.github.io/moca) using [chai](http://chaijs.com) and run through [testem](https://github.com/airportyh/testem). To run them:

- Make sure [node.js](http://nodejs.org/) is installed.
- `npm install`
- `npm test`

## Changelog

- 0.0.1: Initial release.

## License

© 2013 - Caleb Troughton. Licensed under the [MIT license](http://opensource.org/licenses/MIT).