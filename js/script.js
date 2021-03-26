var app = new Vue(
    {
       el: "#root" ,
       data: {
           elementi: ["latte", "uova", "pane"],
           newItem: ""
       },
       methods:{
        removeElem: function(i){
            this.elementi.splice(i, 1)
        },
        addElem: function(){
            if (this.newItem != 0){
                this.elementi.push(this.newItem);
                this.newItem = "";
            }
            
        }
    }
    }
);