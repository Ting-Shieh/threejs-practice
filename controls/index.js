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
    getValue: item => item.visible,
    setValue: (item, value) => item.visible = value,
  }
}
const itemType = {
  extends: [0, 20],
  SpotLight: ['color', 'intensity', 'distance', 'angle', 'exponent'],
  AmbientLight: ['color'],
  PointLight: ['color', 'intensity', 'distance'],
  DirectionalLight: ['color', 'intensity'],
  HemisphereLight: [ 'color', 'groundColor', 'intensity'],
  MeshBasicMaterial: ['color', 'opacity', 'transparent', 'wireframe', 'visible']
}
function initControls(item) {
  console.log(item)
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
      controls[typeList[i]] = child.getValue(item)
      // 是否有 extends
      const childExtends = child.extends || []

      gui[child.method || 'add'](controls, typeList[i], ...childExtends).onChange((val) => {
        child.setValue(item, val)
      })
     }
  }
  
  // gui.addColor(controls, 'color').onChange((val) => {
  //   controls.color = val
  //   item.color.setStyle(val)
  // })
}