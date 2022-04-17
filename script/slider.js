const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCounter = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCounter - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
    console.log('up btn was pressed')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
    console.log('down btn was pressed')
})

function changeSlide(direction) {
    if (direction === 'up') {
        console.log('functon got up pressed')
        activeSlideIndex++
        if (activeSlideIndex === slidesCounter) {
            activeSlideIndex = 0
        }

    } else if (direction === 'down') {
        console.log('functon got down pressed')
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCounter - 1
        }
    }
    console.log(activeSlideIndex, '   ', slidesCounter)
    const height = container.clientHeight
        // mainSlide.style.transform = 'translateY(-1000px)'
        // sideBar.style.transform = 'translateY(1000px)'
        console.log(height)
mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
// mainSlide.style.transform = 'rotate(90deg)'
}