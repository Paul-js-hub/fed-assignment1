function createCanvas() {
  this.canvas = new fabric.Canvas("c");
}

function alignLeft() {
  let left = document.getElementById("alignLeft");
  let currentValue = left.getAttribute("data-action-type");
  let currentObj = canvas.getActiveObject() || canvas.getActiveGroup();
  if (currentValue != "" && currentObj) {
    alignItems(currentValue, currentObj);
    currentObj.setCoords();
    canvas.renderAll();
  } else {
    return false;
  }
}

function alignRight() {
  let right = document.getElementById("alignRight");
  let currentValue = right.getAttribute("data-action-type");
  let currentObj = canvas.getActiveObject() || canvas.getActiveGroup();
  if (currentValue != "" && currentObj) {
    alignItems(currentValue, currentObj);
    currentObj.setCoords();
    canvas.renderAll();
  } else {
    return false;
  }
}

function alignTop() {
  let top = document.getElementById("alignTop");
  let currentValue = top.getAttribute("data-action-type");
  let currentObj = canvas.getActiveObject() || canvas.getActiveGroup();
  if (currentValue != "" && currentObj) {
    alignItems(currentValue, currentObj);
    currentObj.setCoords();
    canvas.renderAll();
  } else {
    return false;
  }
}

function alignBottom() {
    let bottom = document.getElementById("alignBottom");
    let currentValue = bottom.getAttribute("data-action-type");
    let currentObj = canvas.getActiveObject() || canvas.getActiveGroup();
    if (currentValue != "" && currentObj) {
      alignItems(currentValue, currentObj);
      currentObj.setCoords();
      canvas.renderAll();
    } else {
      return false;
    }
}

function alignMiddle() {
    let middle = document.getElementById("alignMiddle");
    console.log("MIDD", middle)
    let currentValue = middle.getAttribute("data-action-type");
    let currentObj = canvas.getActiveObject() || canvas.getActiveGroup();
    if (currentValue != "" && currentObj) {
      alignItems(currentValue, currentObj);
      currentObj.setCoords();
      canvas.renderAll();
    } else {
      return false;
    }
}

function alignItems(val, currentObj) {
  switch (val) {
    case "left":
      currentObj.set({
        left: 0,
      });
      break;
    case "right":
      currentObj.set({
        left: canvas.width - currentObj.width * currentObj.scaleX,
      });
      break;
    case "top":
      currentObj.set({
        top: 0,
      });
      break;
    case "bottom":
      currentObj.set({
        top: canvas.height - (currentObj.height * currentObj.scaleY)
      })
      break;
    case "middle":
      currentObj.set({
        left: (canvas.width / 2) - ((currentObj.width * currentObj.scaleX) / 2)
        })
      break;
    }
}
