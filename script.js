let target = document.querySelector('.slide-track')

for (let i = 1; i <= 9; i++) {
    const ele = document.createElement('div')
    const img = document.createElement('img')
    img.src = `./img/${i}.jpg`
    img.alt = `Image: ${i}`
    // img.setAttribute('src', `./img/${i}.jpg`)
    // img.setAttribute('alt', `Image: ${i}`)
    ele.classList.add('slide')
    ele.append(img)
    target.append(ele)
}

// clone content for anmation pupeses
[...target.children].forEach(el => { target.append(el.cloneNode(true)) });