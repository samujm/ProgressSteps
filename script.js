const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})


prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // console.log(actives.length, circles.length)
    // console.log((actives.length-1) / (circles.length - 1))

    // IMPORTANTE!!! El primer valor no cuenta ya que su width es 0, entonces se recorren los lugares, en lugar de quedar (en este ejemplo) 1=25, 2=50, 3=75 y 4=100, queda como 1=0, 2=25, 3=75, 4=100, por ello se resta 1 en cada length, y se puede aplicar una regla de tres como la que cambie en la siguiente linea
    progress.style.width = ((actives.length-1) *100) / (circles.length - 1) + '%'

    //Linea del ejercicio original
    // progress.style.width = (actives.length-1) / (circles.length - 1)*100 + '%'

    if (currentActive == 1) {
        prev.disabled = true
    } else if (currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}
