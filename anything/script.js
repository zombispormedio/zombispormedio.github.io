(function(){
    var $= function(id){return document.getElementById(id)};

    function Color(r, g, b){
        this.r=r;
        this.g=g;
        this.b=b;
    }
    
    function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


    function getImage(url, callback){
        var img= new Image()
        img.onload=function(){
            callback(img);
        }
        img.src=url
    }

    function IA(){
        this.x=0;
        this.y=0;
        this.offset=1;
    }

    IA.prototype.left=function(){
        this.x+=this.offset;
    }

    IA.prototype.right=function(){
        this.x-=this.offset;
    }

    IA.prototype.up=function(){
        this.y+=this.offset;
    }

    IA.prototype.down=function(){
        this.y-=this.offset;
    }

    IA.prototype.reset=function(){
        this.x=0;
        this.y=0;
    }

    function Agent(offset){
        IA.call(this);
        this.offset=offset;
        this.coe=20;
        this.path=[];
    }


    Agent.prototype=Object.create(IA.prototype)
    Agent.prototype.constructor=Agent

    Agent.prototype.track=function(){
        this.path.push([this.x, this.y]);
    }

    Agent.prototype.inPath=function(x, y){
        var found=false;
        var i=0;
        while(!found && i<this.path.length){
            var p=this.path[i];
            
            if(p[0]===x && p[1]===y){
                found=true;
            }
            
            i++;
        }
        
        return found;

    }



    Agent.prototype.left=function(){
        this.track();
        IA.prototype.left.call(this);
    }

    Agent.prototype.right=function(){
        this.track();
        IA.prototype.right.call(this);
    }

    Agent.prototype.up=function(){
        this.track();
        IA.prototype.up.call(this);
    }

    Agent.prototype.down=function(){
        this.track();
        IA.prototype.down.call(this);
    }

    Agent.prototype.exp=function(){
        return this.offset+this.coe;
    }

    Agent.prototype.exp_left=function(){
        return {x:this.x+this.exp(), y:this.y};
    }

    Agent.prototype.exp_right=function(){
        return {x:this.x-this.exp(), y:this.y};
    }

    Agent.prototype.exp_up=function(){
        return {x:this.x, y:this.y+this.exp()};
    }

    Agent.prototype.exp_down=function(){
        return {x:this.x, y:this.y-this.exp()};
    }

    Agent.prototype.imag_left=function(){
        return {x:this.x+this.offset, y:this.y};
    }

    Agent.prototype.imag_right=function(){
        return {x:this.x-this.offset, y:this.y};
    }

    Agent.prototype.imag_up=function(){
        return {x:this.x, y:this.y+this.offset};
    }

    Agent.prototype.imag_down=function(){
        return {x:this.x, y:this.y-this.offset};
    }

    $("the_file").addEventListener("change", getFile, false);

    function getFile(e){
        var url=URL.createObjectURL(e.target.files[0]);
        getImage(url, function(img){
            Main.image(img)
                .start();
        })

    }

    var Drawer=(function(){
        var c=document.getElementsByTagName("canvas")[0]
        var ctx= c.getContext("2d");
        var _image=null;

        var drawImage=function(image){
            ctx.drawImage(_image, 0,0, 600,600);
        }

        var drawAgent=function(agent){
           
            var offset=agent.offset;
            ctx.fillRect(agent.x,agent.y, offset, offset);

        }

        var draw=function(object){
            if(object instanceof IA){
                drawAgent(object);
            }else{
                if(object instanceof Image){
                    _image=object;
                    drawImage();
                }
            }
        }

        var getPixel=function(x, y){
            var data = ctx.getImageData(x, y, 1, 1).data;

            return new Color(data[0], data[1], data[2]);
        }

        var maxColor=function(color1, color2){
            var p1=0;
            var p2=0;

            ["r", "g", "b"].forEach(function(item){
                var a1=color1[item];
                var a2=color2[item];

                if(a1>a2){
                    p1++;
                }else{
                    p2++;
                }
            });

            return p1>p2?0:1;

        }


        return {
            draw:draw,
            pixel:getPixel,
            max:maxColor

        };
    })()




    var Main=(function(){
        var self=this;

        var agent=new Agent(10);
        var started=false;
        var interval=null;

        var directions=function(){
            return ["left", "right", "down", "up"]
        };
        
        var randomDirection=function(){
            var dirs=["left", "right", "down", "up"];
            var result=getRandomArbitrary(0, dirs.length-1);
            console.log(result);
            return dirs[result];
        }

        var getDirection=function(dirs, pixels){
           return  dirs.reduce(function(result, item, index){
                if(index==0){
                    result=item;
                }else{
                    var max=Drawer.max(pixels[result], pixels[item]);
                    if(max==1){
                        result=item;
                    }

                }
                return result;
            });
        
        }

        var searchingDirection=function(pixels){
            var dirs=directions();
            var direction=null;
            var found=false;
            while(!found && dirs.length>0){
                direction=getDirection(dirs, pixels);
                var coord=agent["imag_"+direction]();
                var inp=agent.inPath(coord.x, coord.y);
                if(!inp){
                    found=true;
                }else{
                    dirs.splice(dirs.indexOf(direction), 1)
                    direction=null;
                }

            }
            
            if(direction==null || direction==undefined){
                direction=randomDirection();
                console.log(direction);
            }
            
          
            
            return direction;

        }


        var dancing=function(){
            var pixels=directions().reduce(function(prev, item){
                var coord=agent["exp_"+item]();
                prev[item]=Drawer.pixel(coord.x, coord.y);
                return prev;
            }, {});

            var direction=searchingDirection(pixels);
        
            agent[direction]();
            Drawer.draw(agent);
        
        }

        var _start=function(){
            if(started){
                if(interval!=null){
                    clearInterval(interval);
                }
                Drawer.draw(agent);
                dancing();
                interval=setInterval(dancing, 2);
            }
        }

        var _image=function(img){
            Drawer.draw(img);
            started=true;
            agent.reset();
        }



        return  [_start, _image].reduce(function(prev, item){
            var name=item.name.substring(1)
            prev[name]=function(){
                item.apply(self, arguments);
                return Main;
            };
            return prev;
        },{})


    })();










})()






