
            function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }      
                return color;
            }
            
            var clickedTime; var createdTime;var reactionTime;
            function makebox(){
                var x=Math.random();
                x=x*3001;
                x=Math.floor(x);
                setTimeout(function(){
                    if(Math.random()>0.5){
                        document.getElementById("box").style.borderRadius="100px";
                    }
                    else{
                        document.getElementById("box").style.borderRadius="0";
                    }
                    var top=Math.random();
                    top=top*400;
                    var left=Math.random();
                    left=left*400;
                    document.getElementById("box").style.top=top+"px";
                    document.getElementById("box").style.left=left+"px";
                    document.getElementById("box").style.backgroundColor=getRandomColor();
                    document.getElementById("box").style.display="block";
                    createdTime=Date.now();
                },x);
            }
            document.getElementById("box").onclick=function(){
                clickedTime=Date.now();
                reactionTime=(clickedTime-createdTime)/1000;
                document.getElementById("reaction").innerHTML=reactionTime;
                this.style.display="none";
                makebox();
            }
            makebox();
        