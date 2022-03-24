$(window).ready(function() {
    var btn=document.getElementById('btn-toggle');
    var list=document.getElementById('toggle');
    if($(window).outerWidth()<700){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="block";
    }
});
$(window).resize(function() {
    var btn=document.getElementById('btn-toggle');
    var list=document.getElementById('toggle');
    if($(window).outerWidth()<700){
        btn.style.display="block";
        list.style.display="none";
    }else{
        btn.style.display="none";
        list.style.display="block";
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