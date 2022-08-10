computeHeightAndMatch()

window.addEventListener('resize', () => {
    computeHeightAndMatch()
})

function computeHeightAndMatch() {
    if (window.innerWidth > 650) {
        let firstImg = document.querySelector('.thumbnail')
        let imgHeight = getComputedStyle(firstImg).height
        document.querySelectorAll('.project-info').forEach(x => x.style.height = imgHeight)
    }

}