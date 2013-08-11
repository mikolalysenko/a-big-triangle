var shell = require("gl-now")()
var drawTriangle = require("../triangle.js")
var createShader = require("gl-shader")

var shader

shell.on("gl-init", function() {
  shader = createShader(shell.gl, 
  "attribute vec2 position;\
  varying vec2 uv;\
  void main() {\
    uv = position;\
    gl_Position = vec4(position, 0.0, 1.0);\
  }",
  "precision highp float;\
  varying vec2 uv;\
  void main() {\
    gl_FragColor = vec4(uv, 0.0, 1.0);\
  }")
})

shell.on("gl-render", function() {
  shader.bind()
  shader.attributes.position.enable()
  drawTriangle(shell.gl)
})