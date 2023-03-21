function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  // 指定頂點著色器的源碼
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
  // 指定片元著色器的源碼
  gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)

  // 編譯著色器
  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)
  // 創建一個程序對象
  const program = gl.createProgram()

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  gl.linkProgram(program)

  gl.useProgram(program)

  return program

}

/**
 * 歸一化函數
 * @param {*} arr 
 */
function normalized(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i]
  }

  const middle = Math.sqrt(sum)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] / middle
  }
}

/**
 * 叉積函數，獲取法向量
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function cross(a, b) {
  return new Float32Array([
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ])
}

/**
 *  點積函數：獲取投影長度
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
/**
 * 向量差
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function minus(a, b) {
  return new Float32Array([
    a[0] - b[0],
    a[1] - b[1],
    a[2] - b[2],
  ])
}

/**
 * 視圖矩陣(4*4)獲取
 * @param {*} eyeX 視點X
 * @param {*} eyeY 視點Y
 * @param {*} eyeZ 視點Z
 * @param {*} lookAtX 目標點X
 * @param {*} lookAtY 目標點Y
 * @param {*} lookAtZ 目標點Z
 * @param {*} upX 上方向X
 * @param {*} upY 上方向Y
 * @param {*} upZ 上方向Z
 */
function getViewMatrix(eyeX, eyeY, eyeZ, lookAtX, lookAtY, lookAtZ, upX, upY, upZ) {
  // 視點
  const eye = new Float32Array([eyeX, eyeY, eyeZ])
  // 目標點
  const lookAt = new Float32Array([lookAtX, lookAtY, lookAtZ])
  // 上方向
  const up = new Float32Array([upX, upY, upZ])
  // 確定z軸
  const z = minus(eye, lookAt)
  // [0~1] 分佈
  normalized(z)
  normalized(up)
  // 確定x軸
  const x = cross(z, up)
  normalized(x)
  // 確定y軸
  const y = cross(x, z)

  // 列為主序
  return new Float32Array([
    x[0],         y[0],         z[0],         0,
    x[1],         y[1],         z[1],         0,
    x[2],         y[2],         z[2],         0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1
  ])
}

// 
/**
 * 獲取正射投影矩陣
 * @param {*} l 左面
 * @param {*} r 右面
 * @param {*} t 上面
 * @param {*} b 下面
 * @param {*} n 近面
 * @param {*} f 遠面
 * @returns 
 */
function getOrtho(l, r, t, b, n, f) {
  // 列為主序
  return new Float32Array([
    2 / (r - l),    0,              0,              0,
    0,              2 / (t-b),      0,              0,
    0,              0,              -2 / (f-n),     0,
    -(r+l) / (r-l), -(t+b) / (t-b), -(f+n) / (f-n), 1
  ])
}