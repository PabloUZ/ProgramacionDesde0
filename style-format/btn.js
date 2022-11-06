$(window).ready(function() {
    var btn=document.getElementById('btn-toggle');
    var list=document.getElementById('toggle');
    if($(window).outerWidth()<500){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="block";
    }
});
$(window).ready(function() {
    var btn=document.getElementById('btn-main-nav');
    var list=document.getElementById('main-nav');
    if($(window).outerWidth()<500){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="flex";
    }
});
$(window).resize(function() {
    var btn=document.getElementById('btn-toggle');
    var list=document.getElementById('toggle');
    if($(window).outerWidth()<500){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="block";
    }
});
$(window).resize(function() {
    var btn=document.getElementById('btn-main-nav');
    var list=document.getElementById('main-nav');
    if($(window).outerWidth()<500){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="flex";
    }
});
function toggle(){
    var list=document.getElementById('toggle');
    if(list.style.display=="none"){
        list.style.display="block";
    }
    else{
        list.style.display="none";
    }
}
function mainNavToggle(){
    var btn=document.getElementById('btn-main-nav');
    var list=document.getElementById('main-nav');
    if(list.style.display=="none"){
        list.style.display="flex";
        btn.innerHTML="&Lambda;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERFIL";
    }
    else{
        list.style.display="none";
        btn.innerHTML="V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERFIL";
    }
}