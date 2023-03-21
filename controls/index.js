const basicType = {
  color: {
    method: 'addColor',
    getValue: item => item.color.getStyle(),
    setValue: () => {},
  }
}

function initControls(item) {
  // 創建ＧＵＩ實例
  const gui = new dat.GUI()
  // 可配置項目
  const controls = {
    color: 0xffffff, // {},
    intensity: 1,
    angle: Math.PI / 3, 
    distance: 0
  }
  const key = 'color'
  gui.addColor(controls, key).onChange((val) => {
    controls.color = val
    item.color.setStyle(val)
  })
  console.log(item)
}