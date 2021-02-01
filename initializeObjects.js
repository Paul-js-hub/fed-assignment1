// Do not add anything to this file

function addObjectSet1() {
  let rect = new fabric.Rect({
    left: 100,
    top: 50,
    width: 50,
    height: 120,
    fill: 'green',
    opacity: 0.5
  })

  canvas.add(rect)

  let rect2 = new fabric.Rect({
    left: 220,
    top: 50,
    width: 50,
    height: 80,
    fill: 'red',
    opacity: 0.5
  })

  canvas.add(rect2)

  let rect3 = new fabric.Rect({
    left: 300,
    top: 50,
    width: 50,
    height: 100,
    fill: 'blue',
    opacity: 0.5,
  })

  canvas.add(rect3)

  let rect4 = new fabric.Rect({
    left: 460,
    top: 50,
    width: 50,
    height: 100,
    opacity: 0.5,
    fill: 'orange'
  })

  canvas.add(rect4)

  canvas.renderAll()
}

function addObjectSet2() {
  let rect = new fabric.Rect({
    left: 100,
    top: 50,
    width: 50,
    height: 100,
    fill: 'green',
    opacity: 0.5
  })

  canvas.add(rect)

  let rect2 = new fabric.Rect({
    left: 200,
    top: 100,
    width: 50,
    height: 200,
    fill: 'red',
    opacity: 0.5
  })

  canvas.add(rect2)

  let rect3 = new fabric.Rect({
    left: 400,
    top: 130,
    width: 50,
    height: 100,
    fill: 'blue',
    opacity: 0.5,
    angle: 90
  })

  canvas.add(rect3)

  let rect4 = new fabric.Rect({
    left: 450,
    top: 50,
    width: 50,
    height: 100,
    opacity: 0.5,
    fill: 'orange'
  })

  canvas.add(rect4)

  canvas.renderAll()
}

function addObjectSet3() {
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 50,
    height: 100,
    fill: 'green',
    opacity: 0.5,
    stroke: 'black',
    strokeWidth: 2,
    lockUniScaling: true,
    strokeUniform: true
  })

  canvas.add(rect)

  let rect2 = new fabric.Rect({
    left: 280,
    top: 150,
    width: 50,
    height: 120,
    fill: 'red',
    opacity: 0.5,
    stroke: 'black',
    strokeWidth: 2,
    lockUniScaling: true,
    strokeUniform: true,
    angle: 45
  })

  canvas.add(rect2)

  let rect3 = new fabric.Rect({
    left: 450,
    top: 60,
    width: 50,
    height: 100,
    fill: 'blue',
    opacity: 0.5,
    angle: 90,
    stroke: 'black',
    strokeWidth: 2,
    lockUniScaling: true,
    strokeUniform: true
  })
  
  canvas.add(rect3)

  let rect4 = new fabric.Rect({
    left: 520,
    top: 80,
    width: 50,
    height: 140,
    opacity: 0.5,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 2,
    lockUniScaling: true,
    strokeUniform: true,
    angle: -10        
  })
  canvas.add(rect4)

  canvas.renderAll()
}

function createCanvas() {
  this.canvas = new fabric.Canvas('c')
}

function clearCanvas(objConfiguration) {
  // Discards current mouse selection
  canvas.discardActiveObject().renderAll();

  // Removes the objects from canvas
  const objects = canvas.getObjects()
  objects.forEach((obj) => canvas.remove(obj))

  if (objConfiguration === 'objects_1') {
    addObjectSet1()
  } else if (objConfiguration === 'objects_2') {
    addObjectSet2()
  } else if (objConfiguration === 'objects_3') {
    addObjectSet3()
  }
}
