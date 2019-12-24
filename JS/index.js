var sels=document.querySelectorAll(".select li");
var cons=document.querySelectorAll(".content li");
// 第一种
for(var i = 0; i < sels.length ; i++){

    sels[i].setAttribute("data-id",i)

    sels[i].onclick = function () {
        for (var j = 0; j < sels.length;j++){
        sels[j].classList.remove("active")
        cons[j].classList.remove("show")
        }
    
    //给当前li添加样式
    this.classList.add("active")
    var index = this.getAttribute("data-id")
    cons[index].classList.add("show")
    }
}

// 第二种：
// for(var i=0;i<sels.length;i++){
//     sels[i].index=i;
//     sels[i].onclick=function(){
//         for(var j=0;j<sels.length;j++){
//             sels[j].className='';
//             cons[j].style.display="none";
//         }
//         //设当前li显示
//         this.className = 'active';
//         cons[this.index].style.display= 'block';
//     }
// }