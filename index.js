let list_img_sp = document.getElementById('list_img-sp')
let img_item = list_img_sp.querySelectorAll('img')
let btnBack = document.getElementById('btnBack')
let btnNext = document.getElementById('btnNext')
let pause = document.getElementById('pause')
console.log(img_item)
let soImg = 0

let chuyenAnh = () => {
    if (soImg === img_item.length - 1) {
        soImg = 0
        list_img_sp.style.transform = `translateX(${-(1320) * soImg}px)`
    } else {
        soImg++
        list_img_sp.style.transform = `translateX(${-(1320) * soImg}px)`
    }
}
let animationChuyenAnh = setInterval(chuyenAnh, 5000) 

pause.addEventListener('click', () => {
    if (pause.innerHTML === 'pause') {
        clearInterval(animationChuyenAnh)
        pause.innerHTML = 'play'
    } else {
        animationChuyenAnh = setInterval(chuyenAnh, 5000)
        pause.innerHTML = 'pause'
    }
});

btnBack.addEventListener('click', () => {
    clearInterval(animationChuyenAnh)
    if (soImg === 0) {
        soImg = img_item.length - 1
        list_img_sp.style.transform = `translateX(${-(1320) * soImg}px)`
    } else {
        soImg--
        list_img_sp.style.transform = `translateX(${-(1320) * soImg}px)`
    }
    pause.innerHTML = 'pause'
    animationChuyenAnh = setInterval(chuyenAnh, 5000)
})


btnNext.addEventListener('click', () => {
    clearInterval(animationChuyenAnh)
    chuyenAnh()
    pause.innerHTML = 'pause'
    animationChuyenAnh = setInterval(chuyenAnh, 5000)
})
