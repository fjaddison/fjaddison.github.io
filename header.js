const pages = ['index', 'about', 'projects']

let header = document.createElement('header')
header.id = 'site-header'

let linksBox = document.createElement('div')
linksBox.id = 'links-box'

let links = pages.map(p => {
    let link = document.createElement('a')
    link.href = p + '.html'
    link.classList.add('site-link')
    if (p == 'index') {
        link.innerText = 'Home'
    } else {
        link.innerText = capitalizeFirstLetter(p)
    }
    return link
})

let logo = document.createElement('h1')
logo.id = 'site-logo'
logo.innerText = 'JA'

header.appendChild(linksBox)
header.appendChild(logo)
links.forEach(l =>  linksBox.appendChild(l))
document.body.appendChild(header)

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
