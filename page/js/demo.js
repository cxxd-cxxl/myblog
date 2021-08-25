(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            if(clientWidth>=640){
                docE1.style.fontSize = '20px';
            }else{
            docE1.style.fontSize = 12 * (clientWidth / 750) + 'px'; 
            }           
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);