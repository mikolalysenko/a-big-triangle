a-big-triangle
==============
Draws a big triangle.

## Example

```javascript
var shell = require("gl-now")()
var drawTriangle = require("a-big-triangle")
var createShader = require("gl-shader")

var shader

shell.on("gl-init", function() {
  shader = createShader(shell.gl, 
  "attribute vec2 position;\
  varying vec2 uv;\
  void main() {\
    uv = position;\
    gl_Position = position;\
  }",
  "varying vec2 uv;\
  void main() {\
    gl_FragColor = vec4(uv, 0, 1);\
  }")
})

shell.on("gl-render", function() {
  shader.bind()
  drawTriangle(shell.gl)
})
```

[Check it out in your browser](http://mikolalysenko.github.io/a-big-triangle/)

## Install

```sh
npm install a-big-triangle
```

## API

### `require("a-big-triangle")(gl)`
Draws a fullscreen triangle.

* `gl` is a WebGL context

## Credits
(c) 2013