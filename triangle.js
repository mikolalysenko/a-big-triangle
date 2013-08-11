"use strict"

var createBuffer = require("gl-buffer")
var createVAO = require("gl-vao")

function createABigTriangle(gl) {
  if(gl.__BIG_TRIANGLE) {
    gl.__BIG_TRIANGLE.bind()
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    gl.__BIG_TRIANGLE.unbind()
    return
  }
  var buf = createBuffer(gl, new Float32Array([-1, -1, -1, 4, 4, -1]))
  var vao = createVAO(gl, null, [
    { buffer: buf,
      type: gl.FLOAT,
      size: 2,
      offset: 0,
      stride: 0,
      normalized: false
    }
  ])
  gl.__BIG_TRIANGLE = vao
  vao.bind()
  gl.drawArrays(gl.TRIANGLES, 0, 3)
  vao.unbind()
}

module.exports = createABigTriangle