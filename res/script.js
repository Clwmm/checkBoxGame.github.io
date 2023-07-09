var moveCount = 0;
var bestCount = 0;

var moveCountEle = document.getElementById("moveCount");
var bestCountEle = document.getElementById("bestCount");

var r = document.querySelector(':root');

function changeColorMode() {
    var rs = getComputedStyle(r);
    if (rs.getPropertyValue("--bccolor") == 'white')
    {
        document.documentElement.style.setProperty('--bccolor', 'black');
        document.documentElement.style.setProperty('--textcolor', 'white');
        document.documentElement.style.setProperty('--maincolor', '#0e3847');
    }
    else {
        document.documentElement.style.setProperty('--bccolor', 'white');
        document.documentElement.style.setProperty('--textcolor', 'black');
        document.documentElement.style.setProperty('--maincolor', '#2596be');
    }
}

function changeBoxColor(id) {
    var x = document.getElementById(id);

    var active = window.getComputedStyle(x).backgroundColor;
    var unactive = pSBC(-0.8, window.getComputedStyle(x).backgroundColor);

    document.documentElement.style.setProperty('--active', active.toString());
    document.documentElement.style.setProperty('--unactive', unactive.toString());
}

function increaseCount() {
    moveCount += 1;
    moveCountEle.innerHTML = moveCount;
}

function onclickBox(id) {
    let x = document.getElementById(id);

    if (!x.classList.contains("won")) {
        switch (id) {
            case '1i':
                c1();
                c2();
                c4();
                break;
            case '2i':
                c2();
                c1();
                c3();
                c5();
                break;
            case '3i':
                c2();
                c3();
                c6();
                break;
            case '4i':
                c1();
                c4();
                c5();
                c7();
                break;
            case '5i':
                c2();
                c4();
                c5();
                c6();
                c8();
                break;
            case '6i':
                c3();
                c5();
                c6();
                c9();
                break;
            case '7i':
                c4();
                c7();
                c8();
                break;
            case '8i':
                c5();
                c7();
                c8();
                c9();
                break;
            case '9i':
                c6();
                c8();
                c9();
                break;
            default:
                break;
        }

        increaseCount();
        winCheck();
    }
}

function c1() {
    let x = document.getElementById("1i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c2() {
    let x = document.getElementById("2i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c3() {
    let x = document.getElementById("3i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c4() {
    let x = document.getElementById("4i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c5() {
    let x = document.getElementById("5i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c6() {
    let x = document.getElementById("6i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c7() {
    let x = document.getElementById("7i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c8() {
    let x = document.getElementById("8i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}

function c9() {
    let x = document.getElementById("9i");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    }
    else {
        x.classList.add("active");
    }
}


function winCheck() {
    let x = document.getElementsByClassName("cell");
    let check = 1;
    for (let i = 0; i < x.length; ++i) {
        if (!x[i].classList.contains("active")) {
            check = 0;
        }
    }
    if (check === 1) {
        document.getElementById("winId").style.visibility = "visible";
        for (let i = 0; i < x.length; ++i) {
            x[i].classList.add("won");
        }

        if (bestCount === 0) {
            bestCount = moveCount;
            bestCountEle.innerHTML = bestCount;
        }
        else {
            if (moveCount < bestCount) {
                bestCount = moveCount;
                bestCountEle.innerHTML = bestCount;
            }
        }
    }
}

function reset() {
    let x = document.getElementsByClassName("cell");
    for (let i = 0; i < x.length; ++i) {
        x[i].classList.remove("active");
        x[i].classList.remove("won");
    }
    document.getElementById("winId").style.visibility = "hidden";

    moveCount = 0;
    moveCountEle.textContent = moveCount;
}

const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}