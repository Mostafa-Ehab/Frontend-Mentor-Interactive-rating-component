var buttons = document.querySelectorAll(".rating .grid button")
var submit = document.querySelector(".rating .submit")

submit.addEventListener("mouseover", function () {
    var active = document.activeElement
    var selected = false
    for (button of buttons) {
        if (button == active) {
            selected = true
            break
        }
    }
    if (!selected) {
        document.querySelector(".rating .submit").setAttribute("disabled", "disabled")
    }
})
submit.addEventListener("click", function () {
    document.querySelector(".thanks").style.display = "block"
})

for (var button of buttons) {
    rateSelection(button)
}

function rateSelection(button) {
    button.addEventListener("click", function () {
        var rate = this.innerHTML
        document.querySelector(".thanks .selected-rate").innerHTML = rate
        document.querySelector(".rating .submit").removeAttribute("disabled")
    })
}
