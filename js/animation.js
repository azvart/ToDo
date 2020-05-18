class Animation extends Todo{


    windowLoad(){
      gsap.from('.anim .btn',{duration:1,opacity:0,stagger:0.3, y:-50});

        
    }
    shadow(){
        let nav = Array.from(document.querySelectorAll('.nav li'));
        nav.forEach((e)=>{
            e.addEventListener('mouseover',()=>{
                event.stopImmediatePropagation();
                gsap.to(e,{duration:0.5,background:'#546e7a',color:'#fff',
                boxShadow:'0 10px 15px rgba(0,0,0,0.5)'});
                
            });
            e.addEventListener('mouseout',()=>{
                event.stopImmediatePropagation();
                gsap.to(e,{duration:0.5,background:'none',color:'',
                boxShadow:'0px 0px 0px rgba(0,0,0,1)'},);
            });
        });
    }

    staggers(){
        gsap.from('.Added li',{duration:1,stagger:0.25,opacity:0,y:-150});
    }



}
let anim = new Animation();
anim.windowLoad();
anim.shadow();
anim.staggers();
