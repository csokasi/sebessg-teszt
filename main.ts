input.onButtonPressed(Button.A, function () {
    db = 0
    basic.clearScreen()
    for (let index = 0; index < 100; index++) {
        db += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(db)
})
let db = 0
db = 0
