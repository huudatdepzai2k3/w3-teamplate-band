var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu');
var headerHeight = header.clientHeight;
//đóng menu
mobileMenu.onclick = function () {
   var isClosed = header.clientHeight === headerHeight;
   if (isClosed){
       header.style.height = 'auto';
   } else {
       header.style.height = null;
   }
}
// tự động đóng khi chọn menu lắng nghe sự kiệc các phần tử
var menuItems = document.querySelectorAll('.nav>ul>li>a[href*="#"]');
for(var i=0; i< menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(){
        var isParentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentmenu){
            event.preventDefaulf();
        }else {
                header.style.height = null;    
            }
    }
}
