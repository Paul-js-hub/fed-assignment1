let canvas = window.canvas || new fabric.Canvas("c");

let group, previousDirection;

canvas.on("selection:created", function(e) {
    group = e.target
});

canvas.on("selection:cleared", function(e) {
   group = previousDirection = undefined;
});

function updateGroup() {
    // group.forEachObject(function(obj) {
    //     group.removeWithUpdate(obj).addWithUpdate(obj);
    // });
    group.setCoords();
    canvas.renderAll();
}

function spaceObjectsHorizontally() {
    if (group === undefined) return;
    const spacing = document.querySelector('#spacing').value;
    const objs = group.getObjects();
    objs.reduce((prevObj, obj) => {
        const prevObjRect = prevObj.getBoundingRect();
        obj.set({ left: prevObjRect.left + prevObj.getScaledWidth() + Number.parseInt(spacing) + (obj.getBoundingRect().left - obj.left) });
        obj.setCoords();
        return obj;
    })
    canvas.renderAll();
}

function alignObjectsHorizontally(direction) {
    const factor = direction === 'left' ? 1 : -1;
    if (group === undefined || previousDirection === direction) return;
    group.forEachObject((obj) => {
        obj.set({
            left: -(factor * (group.getScaledWidth() / 2)) + (factor * (obj.getBoundingRect().width / 2)),
        });
        obj.setCoords();
    });
    updateGroup();
    previousDirection = direction;
}

function alignObjectsVertically(direction) {
    const factor = direction === 'top' ? 1 : -1;
    if (group === undefined || previousDirection === direction) return;
    group.forEachObject((obj) => {
        obj.set({
            top: -(factor * (group.getScaledHeight() / 2)) + (factor * (obj.getBoundingRect().height / 2)),
        });
        obj.setCoords();
    });
    updateGroup();
    previousDirection = direction;
}

function alignObjectsBottom() {
    alignObjectsVertically('bottom')
}

function alignObjectsLeft() {
    alignObjectsHorizontally('left');
}

function alignObjectsMiddle() {
    if (group === undefined || previousDirection === 'middle') return;
    group.forEachObject((obj) => {
        obj.set({
            left: 0,
            top: 0,
        });
    });
    updateGroup();
    previousDirection = 'middle';
}

function alignObjectsRight() {
    alignObjectsHorizontally('right');
}

function alignObjectsTop() {
    alignObjectsVertically('top');
}
