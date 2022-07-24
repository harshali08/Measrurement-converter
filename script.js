let kg=document.getElementById('kg');
let po=document.getElementById('pounds');
let km=document.getElementById('km');
let mi=document.getElementById('miles');

kg.addEventListener('input',function(){
    let k=this.value;
    let p=k*2.2;
    po.value=p;
});

po.addEventListener('input',function(){
    let p=this.value;
    let k=p/2.2;
    kg.value=k;
});

km.addEventListener('input',function(){
    let kim=this.value;
    let mil=kim* 0.62137119;
    mi.value=mil;
})

mi.addEventListener('input',function(){
    let mil=this.value;
    let kim=mil/ 0.62137119;
    km.value=kim;
})