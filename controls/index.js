const basicType = {
  color: {
    method: 'addColor',
    getValue: item => item.color.getStyle(),
    setValue: (item, value) => item.color.setStyle(value),
  },
  intensity: {
    method: 'add',
    extends: [0, 10],
    getValue: item => item.intensity,
    setValue: (item, value) => item.intensity = +value,
  },
  distance: {
    method: 'add',
    extends: [0, 2],
    getValue: item => item.distance,
    setValue: (item, value) => item.distance = +value,
  },
  angle: {
    method: 'add',
    extends: [0, Math.PI / 2],
    getValue: item => item.angle,
    setValue: (item, value) => item.angle = +value,
  },
  exponent: {
    method: 'add',
    extends: [0, 20],
    getValue: item => item.exponent,
    setValue: (item, value) => item.exponent = +value,
  },
  groundColor: {
    method: 'addColor',
    getValue: item => item.groundColor.getStyle(),
    setValue: (item, value) => item.groundColor.setStyle(value),
  },
  wireframeLinewidth: {
    extends: [0, 20],
    getValue: item => item.wireframeLinewidth,
    setValue: (item, value) => item.wireframeLinewidth = +value,
  },
  opacity: {
    extends: [0, 1],
    getValue: item => item.opacity,
    setValue: (item, value) => item.opacity = +value,
  },
  transparent: {
    getValue: item => item.transparent,
    setValue: (item, value) => item.transparent = value,
  },
  wireframe: {
    getValue: item => item.wireframe,
    setValue: (item, value) => item.wireframe = value,
  },
  visible: {
    getValue: (item) => item.visible,
    setValue: (item, value) => item.visible = value,
  },
  cameraNear: {
    extends: [0, 50],
    getValue: (item, camera) => camera.near,
    setValue: (item, value, camera) => camera.near = value,
  },
  cameraFar: {
    extends: [50, 1000],
    getValue: (item, camera) => camera.far,
    setValue: (item, value, camera) => camera.far = value,
  },
  side: {
    extends: [['front', 'back', 'double']],
    getValue: () => 'front',
    setValue: (item, value) => {
      switch (value) {
        case 'front':
          item.side = THREE.FrontSide
          break;
        case 'back':
          item.side = THREE.BackSide
          break;
        case 'double':
          item.side = THREE.DoubleSide
          break;
      }
    }
  },
  // 材料的環境顏色
  ambient: {
    method: 'addColor',
    getValue: item => item.ambient.getHex(),
    setValue: (item, value) => item.ambient = new THREE.Color(value),
  },
  // 材料本身發出的顏色
  emissive: {
    method: 'addColor',
    getValue: item => item.emissive.getStyle(),
    setValue: (item, value) => item.emissive.setStyle(value),
  },
  // 高亮部分的顏色
  specular: {
    method: 'addColor',
    getValue: item => item.specular.getHex(),
    setValue: (item, value) => item.specular  = new THREE.Color(value),
  },
  // 高亮部分的亮度
  shininess: {
    extends: [0, 100],
    getValue: item => item.shininess,
    setValue: (item, value) => item.shininess = value,
  },
  alpha: {
    extends: [0, 1],
    getValue: item => item.uniforms.a.value,
    setValue: (item, value) => item.uniforms.a.value = value,
  },
  red: {
    extends: [0, 1],
    getValue: item => item.uniforms.r.value,
    setValue: (item, value) => item.uniforms.r.value = value,
  },
  dashSize: {
    extends: [0, 5],
    getValue: item => item.dashSize,
    setValue: (item, value) => item.dashSize = +value,
  },
  gapSize: {
    extends: [0, 5],
    getValue: item => item.gapSize,
    setValue: (item, value) => item.gapSize = +value,
  },
  // width: {
  //   extends: [0, 20],
  //   getValue: (item, camera, mesh) => mesh.children[0].geometry.parameters.width ,
  //   setValue: (item, value) => mesh.children[0].geometry.parameters.width = +value,
  // },
  width: getMeshValue([0, 20], 'width'),
  height: getMeshValue([0, 20], 'height'),
  depth: getMeshValue([0, 20], 'depth'),
  widthSegments: getMeshValue([0, 20], 'widthSegments'),
  heightSegments: getMeshValue([0, 20], 'heightSegments'),
  depthSegments: getMeshValue([0, 20], 'depthSegments'),
  radius: getMeshValue([0, 20], 'radius'),
  segments: getMeshValue([3, 80], 'segments'),
  thetaStart: getMeshValue([0, Math.PI * 2], 'thetaStart'),
  thetaLength: getMeshValue([0, Math.PI * 2], 'thetaLength'),
  phiStart: getMeshValue([0, Math.PI * 2], 'phiStart'),
  phiLength: getMeshValue([0, Math.PI * 2], 'phiLength'),
  radiusTop: getMeshValue([-20, 20], 'radiusTop'),
  radiusBottom: getMeshValue([-20, 20], 'radiusBottom'),
  radialSegments: getMeshValue([1, 60], 'radialSegments'),
  openEnded: getMeshValue([], 'openEnded'),
  tube: getMeshValue([1, 6], 'tube'),  // 管道半徑
  tubularSegments: getMeshValue([1, 20], 'tubularSegments'),
  arc: getMeshValue([0, Math.PI * 2], 'arc'),
  p: getMeshValue([1, 10], 'p'),
  q: getMeshValue([1, 10], 'q'),
  heightScale: getMeshValue([0, 5], 'heightScale'),
  detail: getMeshValue([0, 5], 'detail'),
  size: getMeshValue([1, 10], 'size'),
  bevelThickness: getMeshValue([1, 30], 'bevelThickness'),
  bevelSize: getMeshValue([1, 30], 'bevelSize'),
  bevelEnabled: getMeshValue([], 'bevelEnabled'),
  bevelSegments: getMeshValue([1, 30], 'bevelSegments'),
  curveSegments: getMeshValue([1, 30], 'curveSegments'),
  steps: getMeshValue([1, 10], 'steps'),
}
// 多面體參數
const vertices = [
  1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1,
] // 頂點
const indices = [
  2, 1, 0,  0,  3, 2,  1, 3,  0, 2,  3,  1,
] // 索引
// 文字參數
const textOptions = {
  size: 1,
  height: 1,
  weight: 'normal',
  font: 'helvetiker',
  bevelThickness: 1,
  bevelSize: 1,
  bevelEnabled: false,
  bevelSegments: 1,
  curveSegments: 1,
  steps: 1,
}
// 轉換為數字
const roundValue = {
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
  radialSegments: 1,
  tubularSegments: 1,
  detail: 1,
  size: 1,
  bevelSegments: 1,
  curveSegments: 1,
  steps: 1,
}
const itemType = {
  SpotLight: ['color', 'intensity', 'distance', 'angle', 'exponent'],
  AmbientLight: ['color'],
  PointLight: ['color', 'intensity', 'distance'],
  DirectionalLight: ['color', 'intensity'],
  HemisphereLight: [ 'color', 'groundColor', 'intensity'],
  MeshBasicMaterial: ['color', 'opacity', 'transparent', 'wireframe', 'visible'],
  MeshDepthMaterial: ['opacity', 'wireframe', 'cameraNear', 'cameraFar'],
  MeshNormalMaterial: ['opacity', 'transparent', 'wireframe', 'visible', 'side'],
  MeshLambertMaterial: ['color', 'opacity', 'transparent', 'wireframe', 'visible', 'side', 'ambient', 'emissive'],
  MeshPhongMaterial: ['color', 'opacity', 'transparent', 'wireframe', 'visible', 'side', 'ambient', 'emissive', 'specular', 'shininess'],
  ShaderMaterial: ['alpha', 'red'],
  LineDashedMaterial: ['color', 'dashSize', 'gapSize'],
  PlaneBufferGeometry: ['width', 'height', 'heightSegments', 'widthSegments'],
  CircleGeometry : ['radius', 'segments', 'thetaStart', 'thetaLength'],
  ShapeGeometry: [],
  BoxGeometry: ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegments'],
  SphereGeometry: ['radius', 'widthSegments', 'heightSegments', 'phiStart', 'phiLength', 'thetaStart', 'thetaLength'],
  CylinderGeometry: ['radiusTop','radiusBottom', 'height', 'radialSegments', 'heightSegments', 'openEnded'], // 圓錐
  TorusGeometry: ['radius','tube', 'radialSegments', 'tubularSegments', 'arc'], // 環狀
  TorusKnotGeometry : ['radius','tube', 'tubularSegments', 'radialSegments', 'p', 'q', 'heightScale'], // 紐結
  PolyhedronGeometry: ['radius', 'detail'], // 自定義多面體
  TetrahedronGeometry: ['radius', 'detail'], // 正四面體
  OctahedronGeometry: ['radius', 'detail'], // 正八面體
  IcosahedronGeometry: ['radius', 'detail'], // 正二十面體
  TextGeometry: [
    'size', 'bevelThickness','bevelSize', 'bevelEnabled', 'bevelSegments', 'curveSegments', 'steps',
  ]
}
function createMaterial (geometry) {
  const lambert = new THREE.MeshLambertMaterial({color: 0xff0000})
  const basic = new THREE.MeshBasicMaterial({wireframe: true})
  
  return THREE.SceneUtils.createMultiMaterialObject(geometry, [
    lambert,basic
  ])
}

const isPolyhedron = item => item.type === 'PolyhedronGeometry'
const isFont = item => item.type === 'TextGeometry';

function removeAndCreate (item, val, camera, mesh, scene, controls) {
  console.log('removeAndCreate controls', controls)
  // 原始旋轉角度
  const { x,y,z } = mesh.pointer.rotation
  // 場景移除
  scene.remove(mesh.pointer)
  // 
  const arg = []
  for (const key in controls) {
    if (roundValue[key]) {
      controls[key] = ~~controls[key]
    }
    arg.push(controls[key])
  }
  if (isPolyhedron(item)) {
    arg.unshift(vertices, indices);
  }
  if (isFont(item)) {
    mesh.pointer = createMaterial(new THREE[item.type]('hi', Object.assign(textOptions, controls)))
  } else { 
    mesh.pointer = createMaterial(new THREE[item.type](...arg))
  }
  // 繼承原始旋轉角度
  mesh.pointer.rotation.set(x,y,z)
  //
  scene.add(mesh.pointer)
}
function getMeshValue (extend, name) {
  return {
    extends: extend,
    getValue: (item, camera, mesh) => isFont(item) && textOptions[name] !== undefined ? textOptions[name] : mmesh.children[0].geometry.parameters[name],
    setValue: (...arg) => removeAndCreate(...arg),
  }
}
function initControls(item, camera, mesh, scene) {
  console.log(item)
  console.log(camera)
  console.log(mesh)
  // 創建ＧＵＩ實例
  const gui = new dat.GUI()
  // 獲取物件可配置項目清單
  const typeList = itemType[item.type]
  // 可配置項目
  const controls = {}
  if (!typeList || !typeList.length) { return }

  for (let i = 0; i < typeList.length; i++) {
    const child = basicType[typeList[i]]

    if (child) { 
      controls[typeList[i]] = child.getValue(item, camera, mesh.pointer)
      // 是否有 extends
      const childExtends = child.extends || []

      gui[child.method || 'add'](controls, typeList[i], ...childExtends).onChange((val) => {
        child.setValue(item, val, camera, mesh, scene, controls)
      })
     }
  }
  
  // gui.addColor(controls, 'color').onChange((val) => {
  //   controls.color = val
  //   item.color.setStyle(val)
  // })
}