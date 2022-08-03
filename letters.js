const nameText = 'julian    addison'
let letters
let rows, cols
let scl

function setup() {
    letters = []
    createCanvas(windowWidth, windowHeight);
    scl = width * 0.02
    rows = height / scl
    cols = width / scl
    for (let x = 0; x <= cols; x++) {
        let col = []
        for (let y = 0; y <= rows; y++) {
            let l = nameText[floor(random(nameText.length))]
            col.push({x: x * scl, y: y * scl, l})
        }
        letters.push(col)
    }
    frameRate(5)
}

function draw() {
    background(0);
    letters.forEach(c => {
        let xPos = c[0].x
        c.forEach(ltr => {
            fill(0,255,0,random(255))
            text(ltr.l, ltr.x, ltr.y)
            ltr.y += scl
        })
        c.pop()
        let l = nameText[floor(random(nameText.length))]
        c.splice(0, 0, {x: xPos, y: 0, l})
    })
}

function windowResized() {
    setup()
}

function mousePressed(e) {
    if (e.target == document.querySelector('.stop')) {
        noLoop()
        e.target.classList.remove('stop')
        e.target.classList.add('start')
        e.target.innerText = 'Start Animation'
    }
    else if (e.target == document.querySelector('.start')) {
        loop()
        e.target.classList.remove('start')
        e.target.classList.add('stop')
        e.target.innerText = 'Stop Animation'
    }
}
