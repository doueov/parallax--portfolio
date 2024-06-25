let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
        // 화면에 등장 시
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transfrom = 'rotate(0deg)';
        } 
        // 다시 나타날 때
        else {
            box.target.style.opacity = 0;
        }
    })
})

// 내가 원하는 html 요소를 감지
let div = document.querySelectorAll('div')
observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);