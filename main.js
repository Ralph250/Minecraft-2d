
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

 player_object = "";
 block_image_object = "";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);

player_object.set(
    {
top:player_y,
left:player_x


    }
);
canvas.add(player_object);
});


}

function add_block(get_image){
    fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);

block_image_object.set({
top:player_y,
left:player_x


});
canvas.add(block_image_object);

    });
    
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
var keyPressed = e.keyCode;
console.log(keyPressed);

if (e.shiftKey == true && keyPressed == "80"){
console.log("shift and P pressed together");
block_image_height = block_image_height + 10;
block_image_width = block_image_width + 10;
document.getElementById("current_width").innerHTML = (block_image_width);
document.getElementById("current_height").innerHTML = (block_image_height);
}
    

    if (e.shiftKey == true && keyPressed == "77"){
console.log("shift and M pressed together");
block_image_height = block_image_height - 10;
block_image_width = block_image_width - 10;
document.getElementById("current_width").innerHTML = (block_image_width);
document.getElementById("current_height").innerHTML = (block_image_height);
    }

if (keyPressed == "37"){
left();
console.log("LEFT HAS BEEN PRESSED");
}

if (keyPressed == "38"){
up();
console.log("UP HAS BEEN PRESSED");
}

if (keyPressed == "39"){
right();
console.log("RIGHT HAS BEEN PRESSED");
}

if (keyPressed == "40"){
down();
console.log("DOWN HAS BEEN PRESSED");
}



if (keyPressed == "71"){
add_block("ground.png");
console.log("G HAS BEEN PRESSED");
}


    
    if (keyPressed == "67"){
        add_block("cloud.jpg");
        console.log("C HAS BEEN PRESSED");
        }

        if (keyPressed == "68"){
            add_block("dark_green.png");
            console.log("D HAS BEEN PRESSED");
            }

            if (keyPressed == "76"){
                add_block("light_green.png");
                console.log("L HAS BEEN PRESSED");
                }

                if (keyPressed == "82"){
                    add_block("roof.jpg");
                    console.log("R HAS BEEN PRESSED");
                    }

                    if (keyPressed == "84"){
                        add_block("trunk.jpg");
                        console.log("T HAS BEEN PRESSED");
                        }

                        if (keyPressed == "85"){
                            add_block("unique.png");
                            console.log("U HAS BEEN PRESSED");
                            }

                            if (keyPressed == "87"){
                                add_block("wall.jpg");
                                console.log("W HAS BEEN PRESSED");
                                }

                                if (keyPressed == "89"){
                                    add_block("yellow_wall.png");
                                    console.log("Y HAS BEEN PRESSED");
                                    }

}

function up(){
if (player_y >= 0){
player_y = player_y - block_image_height;
console.log("current block image height = " + block_image_height);
console.log("X = " + player_x + "Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}

function down(){
if (player_y <= 460){
player_y = player_y + block_image_height;
console.log("current block image height = " + block_image_height );
console.log("X = " + player_x + "Y = " + player_y );
canvas.remove(player_object);
player_update();
}
}

function left(){
if (player_x >= 0){
player_x = player_x - block_image_width;
console.log("current block image width = " + block_image_width);
console.log("X = " + player_x + "Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}

function right(){
if (player_x <= 850){
player_x = player_x + block_image_width;
console.log("current block image width = "  + block_image_width);
console.log("X = " + player_x + "Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}
    