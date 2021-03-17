class snake{
    constructor(x,y){
        this.non_game_over=true;
        this.non_change=true;
        this.non_pause=true;
        this.sens="ArrowUp";
        this.taille=0
        this.score=0;
        this.vie=true;
        this.color="red";
        this.pos_x=parseInt(x);
        this.pos_y=parseInt(y);
        this.liste_pos=[[this.pos_x,this.pos_y]]
    }

    move(){
        if (this.vie){
            if (this.sens=="ArrowUp"){
                this.pos_y=this.pos_y-1;
                this.pos_x=this.pos_x;
            }else if (this.sens=="ArrowDown"){
                this.pos_y=this.pos_y+1;
                this.pos_x=this.pos_x;
            }else if (this.sens=="ArrowLeft"){
                this.pos_y=this.pos_y;
                this.pos_x=this.pos_x-1;
            }else if (this.sens=="ArrowRight"){
                this.pos_y=this.pos_y;
                this.pos_x=this.pos_x+1;
            }
        }
    }
    out(side){    
        if (side=="left"){
            this.pos_x=79;
        }else if (side=="right"){
            this.pos_x=1;
        }else if (side=="up"){
            this.pos_y=Math.floor(size_can/10)-1;
        }else if (side=="down"){
            this.pos_y=1;
        }

    }
}

class food{
    constructor(x,y){
        this.pos_x=parseInt(x)
        this.pos_y=parseInt(y)
    }
}



function my_event_key(sens) {
    // console.log(sens,typeof sens)
    if (my_snake.non_change){
        if (my_snake.non_pause){
            my_snake.non_change=false;
            if (sens=="ArrowUp" && my_snake.sens!="ArrowDown"){
                my_snake.sens="ArrowUp";
            } 
            if (sens=="ArrowDown" && my_snake.sens!="ArrowUp"){
                my_snake.sens="ArrowDown";
            } 
            if (sens=="ArrowLeft" && my_snake.sens!="ArrowRight"){
                my_snake.sens="ArrowLeft";
            } 
            if (sens=="ArrowRight" && my_snake.sens!="ArrowLeft"){
                my_snake.sens="ArrowRight";
            }   
            if (sens==" "){
                my_snake.non_pause=false;
            }            
        }
        else{
            if (sens=" "){
                my_snake.non_pause=true;
            }

        }

    }
}

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
