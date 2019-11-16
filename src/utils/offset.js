export default function offset(dom){
    var l = 0;
    var t = 0;
    var bdl = dom.clientLeft;//元素左边框宽度
    var bdt = dom.clientTop;//元素上边框宽度
    while(dom){
        l = l + dom.offsetLeft + dom.clientLeft;
        t = t + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;//指向最近的定位父级
    }
    return {left: l - bdl, top: t - bdt};
}