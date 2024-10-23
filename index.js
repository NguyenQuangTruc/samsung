let img_sp = document.getElementById('img_sp')
let zIndex = img_sp.getElementsByTagName('a')


function chuyenAnh() {
    if (zIndex[0].classList.contains('z-2')) {
        zIndex[0].classList.remove('z-2');
        zIndex[0].classList.add('z-0');
        zIndex[1].classList.remove('z-1');
        zIndex[1].classList.add('z-2');
        zIndex[2].classList.remove('z-0');
        zIndex[2].classList.add('z-1');
    } else if (zIndex[1].classList.contains('z-2')) {
        zIndex[1].classList.remove('z-2');
        zIndex[1].classList.add('z-0');
        zIndex[2].classList.remove('z-1');
        zIndex[2].classList.add('z-2');
        zIndex[0].classList.remove('z-0');
        zIndex[0].classList.add('z-1');
    } else if (zIndex[2].classList.contains('z-2')) {
        zIndex[2].classList.remove('z-2');
        zIndex[2].classList.add('z-0');
        zIndex[1].classList.remove('z-0');
        zIndex[1].classList.add('z-1');
        zIndex[0].classList.remove('z-1');
        zIndex[0].classList.add('z-2');
    }
}


let Interval = setInterval(chuyenAnh, 5000)

let btn_right = document.getElementById('btn_right')
btn_right.addEventListener('click', () => {
    clearInterval(Interval)
    chuyenAnh()
    Interval = setInterval(chuyenAnh, 5000)
})


