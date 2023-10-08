function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//实现滚动效果
const container = document.querySelector('.container')
const body = document.body
const sections = Array.from(document.getElementsByClassName('section'));

var viewHeight = null //声明页面高度

// 当前索引
let currentIndex = 0;

// 节流开关，用于控制滚动事件的触发频率
let scrollFlag = true;
document.addEventListener('mousewheel', function (e) {
    e.preventDefault();
    e = e || window.event
    console.log(e);
    // 获取整屏的高度
    viewHeight = document.body.clientHeight;
    if (scrollFlag) {  //节流阀

        scrollFlag = false
        if (e.wheelDelta > 0) {// 判断滚轮滚动的方向，当滚轮上滚时，向上切换页面
            currentIndex--
            if (currentIndex < 0) {
                currentIndex = 0
            }
            moveDown();
        }
        else {//判断滚轮滚动的方向，当滚轮下滚时，向下切换页面
            currentIndex++;
            // if (currentIndex > sections.length - 1) {
            //     currentIndex = sections.length - 1
            // }
            moveUp();
        }
    }


})
// 向上滑动一个 div 的高度
function moveUp() {
    if (currentIndex < sections.length) {
        sections[currentIndex].style.top = '0';
        for (let i = 0; i < currentIndex; i++) {
            sections[i].style.top = -viewHeight + 'px';
        }
        setTimeout(function () {

            scrollFlag = true;
            sections[i].style.transition = 1 + 's';
        }, 500);
    }
    else {
        // container.style.opacity='0';
        // container.style.top = -viewHeight + 'px';
        body.style.overflowY = "auto";
        body.style.overflowX = "hidden";
    }
}

// 向下滑动一个 div 的高度
function moveDown() {
    if (currentIndex >= 0) {
        sections[currentIndex].style.top = '0';
        for (let i = currentIndex + 1; i < sections.length; i++) {
            sections[i].style.top = '0';
        }
        setTimeout(function () {
            scrollFlag = true;
            sections[i].style.transition = 1 + 's';
        }, 500);
    }
}



const a1 = document.querySelector('.menu1');
a1.addEventListener('click', function (event) {
    body.style.overflowY = "auto";
})
const a2 = document.querySelector('.menu2');
a2.addEventListener('click', function (event) {
    body.style.overflowY= "auto";
})
const a3 = document.querySelector('.menu3');
a3.addEventListener('click', function (event) {
    body.style.overflowY= "auto";
})
const a4 = document.querySelector('.menu4');
a4.addEventListener('click', function (event) {
    body.style.overflowY= "auto";
})
