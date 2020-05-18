
    class Todo{
        constructor(){
            this.btn = Array.from(document.getElementsByTagName('button'));
            this.ul = Array.from(document.querySelectorAll('.nav'));
            this.plus = Array.from(document.getElementsByClassName('plus'));
            this.confirm = Array.from(document.querySelectorAll('.confirm'));
            this.delete = Array.from(document.querySelectorAll('.delete'));
            
            
 

        }

        show(){
            let btndel = Array.from(document.querySelectorAll('.show'));
            this.btn.forEach((e)=>{
                e.onclick = () =>{
                    if(e.classList.contains(e.textContent)){
                        this.ul.forEach((r)=>{
                            if(r.classList.contains(e.textContent)){
                                r.classList.remove('d-none');
                                e.classList.add('active');
                                btndel[0].classList.remove('d-none');
                                
                            }else{
                                r.classList.add('d-none');
                                e.classList.remove('active');
                                btndel[0].classList.add('d-none');
                                
                            }
                        });
                        
                    }
                 
                }
            });
            
        
        }

        create(){
            this.plus[0].addEventListener('click',()=>{
                
                let prom = prompt('Write your task');
                let text = document.createTextNode(prom);
                let input = document.createElement('input'); 
                let li = document.createElement('li');
                let btn = document.createElement('button');

                

                li.appendChild(text);
                li.appendChild(btn);
                li.prepend(input);

                li.className = 'list-group-item';

                btn.className = 'close delete';
                btn.textContent = 'x';

                input.type ='checkbox';
                input.className='confirm mx-2';


                this.ul[0].appendChild(li); 
                



               this.inputCompEvents();
               this.btnDelEvents();
                this.storageSaveAdd();
                this.storageSaveComplete();
                this.storageSaveDeleted();
                 
                
            });

            

            
        }


  


        inputCompEvents(){
            let conf = Array.from(document.querySelectorAll('.confirm'));
            conf.forEach((e)=>{
                e.onclick = () =>{
                    let modal = confirm("Is this task completed?");
                    if(modal == true){
                        this.ul[1].appendChild(e.parentElement);
                        e.onclick = false;
                        
                        this.storageSaveAdd();
                        this.storageSaveComplete();
                        this.storageSaveDeleted();
                    }
                    this.backToList();
                }
            });
        }
        btnDelEvents(){
            let del = Array.from(document.querySelectorAll('.delete'));
            del.forEach((e)=>{
                e.onclick = () =>{
                    let modal = confirm("Is this task Deleted?");
                    if(modal == true){
                        this.ul[2].appendChild(e.parentElement);
                        

                        this.storageSaveAdd();
                        this.storageSaveComplete();
                        this.storageSaveDeleted();
                    }

                }
            });
        }



        backToList(){
            let conf = Array.from(document.querySelectorAll('.confirm'));
            conf.forEach((e)=>{
                e.onclick = () =>{
                    let modal = confirm("Is this task completed?");
                    if(modal == true){
                        this.ul[0].appendChild(e.parentElement);
                        e.onclick = false;
                        this.storageSaveAdd();
                        this.storageSaveComplete();
                        this.storageSaveDeleted();
                    }
                    this.inputCompEvents();
                }
            });
        }




        clearAll(){
            let all = Array.from(document.querySelectorAll('.delete-all'));
            all.forEach((e)=>{
                e.onclick=()=>{
                    let list = Array.from(document.querySelectorAll('.Deleted li'));
                    list.forEach((r)=>{
                        r.remove();
                        this.storageSaveAdd();
                        this.storageSaveComplete();
                        this.storageSaveDeleted();
                    });
                }
            });
        }


        




        storageLoad(){
            let added = localStorage.getItem('added');
            let complete = localStorage.getItem('complete');
            let deleted = localStorage.getItem('deleted');
            if(added || complete || deleted){
                this.ul[0].innerHTML = added;
                this.ul[1].innerHTML = complete;
                this.ul[2].innerHTML = deleted;
                
                
            }
            if(complete != null){
                this.backToList();
            }
            this.inputCompEvents();
            this.btnDelEvents();
        }











        storageSaveAdd(){
            localStorage.setItem('added',this.ul[0].innerHTML);
        }
        storageSaveComplete(){
            localStorage.setItem('complete',this.ul[1].innerHTML);
        }
        storageSaveDeleted(){
            localStorage.setItem('deleted',this.ul[2].innerHTML);
        }

    }

    let add = new Todo();
    add.storageLoad();
    add.show();
    add.create();
    add.clearAll();
    
    
    