# Color blending

Blending two colors is implemented by doing a component-wise multiplication between them
{{< p5-iframe sketch="/visual_computing/sketches/shaders/blend.js" width="470" height="275" >}}

{{< details "**CODIGO:** blend.frag" close >}}
```
precision mediump float;

// uniforms are emitted from the sketch
// https://p5js.org/reference/#/p5.Shader/setUniform
uniform vec4 uMaterial1;
uniform vec4 uMaterial2;

void main() {
  gl_FragColor = uMaterial1 * uMaterial2;
}
```
{{< /details >}}


# Color blending with lightness
{{< p5-iframe sketch="/visual_computing/sketches/shaders/light.js" width="470" height="275" >}}

# Different blending modes
{{< p5-iframe sketch="/visual_computing/sketches/shaders/blendMode.js" width="470" height="475" >}}
