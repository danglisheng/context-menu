var contextmenu,wrapper,menuIsVisible;
window.onload=function(){
  contextmenu=document.querySelector(".contextmenu");
  wrapper=document.querySelector(".wrapper");
  menuIsVisible=false;
  window.addEventListener("click",toggleCtxMenuOff);
  contextmenu.addEventListener("contextmenu",function(e){
    e.preventDefault();
  })
  addContextmenu(wrapper);
  }
function addContextmenu(ele){
  ele.addEventListener("contextmenu",function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("context");
    toggleCtxMenuOn();
    setCtxMenuPos(ele,e);
  })
}
function toggleCtxMenuOn(){
  if(!menuIsVisible){
  menuIsVisible=true;
  contextmenu.style.display="block";
  }
}
function toggleCtxMenuOff(){
  if(menuIsVisible){
  menuIsVisible=false;
  contextmenu.style.display="none";
  }
}
function setCtxMenuPos(ele,e){
  var wrapperRect=ele.getBoundingClientRect();
  var menuRect=contextmenu.getBoundingClientRect();

  var wrapperWidth=wrapperRect.width; //容器的宽高
  var wrapperHeight=wrapperRect.height;
  var wrapperTopToPage=wrapperRect.top+window.pageYOffset;//容器距页面上、左部的距离
  var wrapperLeftToPage=wrapperRect.left+window.pageXOffset;

  var menuWidth=menuRect.width+1; //菜单的宽高
  var menuHeight=menuRect.height+1;
  var CurToWrapperTop=e.clientY-wrapperRect.top; //鼠标点击位置距离容器上、左边缘距离
  var CurToWrapperLeft=e.clientX-wrapperRect.left;
  if(wrapperHeight-CurToWrapperTop<menuHeight){  //剩下的空间小于菜单高度
    contextmenu.style.top=wrapperHeight-menuHeight+wrapperTopToPage+'px';
  }
  else {
    contextmenu.style.top=CurToWrapperTop+wrapperTopToPage+'px';
  }
  if(wrapperWidth-CurToWrapperLeft<menuWidth){ //鼠标点击处距容器右边缘的距离小于菜单宽度
    contextmenu.style.left=wrapperWidth-menuWidth+wrapperLeftToPage+'px';
  }
  else {
    contextmenu.style.left=CurToWrapperLeft+wrapperLeftToPage+'px';
  }
}





