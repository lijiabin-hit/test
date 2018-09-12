/**
 * Created by lijiabin on 2018/9/9.
 */
window.onload=function () {
    //获取计算样式使用getComputedStyle方法来获取
    //在ie浏览器下可以使用节点的currentStyle来获取。
    var header=document.getElementById('headerwrapper');
    console.log(window.getComputedStyle(header,null).width);
    console.log(header.clientHeight);
    console.log(header.offsetHeight);
    console.log(header.currentStyle);
    console.log(document.styleSheets[0].cssRules[0]);
    console.log(header.className);
    console.log(header.style.parentRule);
}