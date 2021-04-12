var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object = "";
function player_update()
{
    fabric.Image.fromUrl( "player.png", function(Img) {
    player_object = Img;


    player_object.scaletoWidth(150);
    player_object.scaletoHeight(140);
    player_object.strike({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}



function new_image(get_image)
{
    fabric.Image.fromUrl(get_image, function(Img){
    block_image_object = Img;


    block_image_object.scaletoWidth(block_image_width);
    block_image_object.scaletoHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e) {

    keyevents = e.keyCode
    console.log(keyevents)

    if ( e.shiftKey == true &&  keyevents == '80' ) {
        block_image_height = block_image_height + 10
        block_image_width = block_image_width +10
        document.getElementById("current-width").innerHTML=block_image_width 
        document.getElementById("current-height").innerHTML=block_image_height 
    }


    if ( e.shiftKey == true &&  keyevents == '77' ) {
        block_image_height = block_image_height - 10
        block_image_width = block_image_width - 10
        document.getElementById("current-width").innerHTML=block_image_width 
        document.getElementById("current-height").innerHTML=block_image_height 
    }
    

if (keyevents == "38"){
up()
console.log("up")
}

if (keyevents == "40"){
    down()
    console.log("down")
    }

 if (keyevents == "37"){
     left()
    console.log("left")
        }

if (keyevents == "39"){
right()
console.log("right")
}

if (keyevents == "84"){
    new_image("trunk.jpg")
    console.log("t")
    }

if (keyevents == "68"){
    new_image("dark_green.png")
    console.log("d")
    }
 
    if (keyevents == "76"){
        new_image("light_green.png")
        console.log("l")
        }

        if (keyevents == "71"){
            new_image("ground.png")
            console.log("g")
            }

            if (keyevents == "87"){
                new_image("wall.jpg")
                console.log("w")
                }
                
                if (keyevents == "89"){
                    new_image("yellow_wall.png")
                    console.log("y")
                    }
                    if (keyevents == "82"){
                        new_image("roof.jpg")
                        console.log("r")
                        }
                     
                        if (keyevents == "67"){
                            new_image("cloud.jpg")
                            console.log("c")
                            }

                            if (keyevents == "85"){
                                new_image("unique.png")
                                console.log("u")
                                }
}
