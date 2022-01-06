function eraseTool(){
    this.icon = "assets/eraser.png";
	this.name = "eraser";

    fillStrengthSlider = createSlider(0, 255, 128, 1);
    strokeStrengthSlider = createSlider(0, 255, 18, 1);
    eraserSizeSlider = createSlider(0, 255, 18, 1);

    fillStrengthSlider.hide();
    strokeStrengthSlider.hide();
    eraserSizeSlider.hide();
   

    this.draw = function(){
        if(mousePressOnCanvas(canvas) && mouseIsPressed){
            erase(fillStrengthSlider.value(), strokeStrengthSlider.value());
            // stroke(1);
            circle(mouseX, mouseY, eraserSizeSlider.value());
            noErase();
        }
    }

    this.populateOptions = function()
    {
        //adds te buttons to the div with the id options
        createP("Eraser Size").parent('#options');
        eraserSizeSlider.parent('#options');
        createP("Fill strength").parent('#options');
        fillStrengthSlider.parent('#options');
        createP("Stroke strength").parent('#options');
        strokeStrengthSlider.parent("#options");


        //shows the buttons as soon as the icon is clicked
        fillStrengthSlider.show();
        strokeStrengthSlider.show();
        eraserSizeSlider.show();

    }

    this.unselectTool = function()
    {
        select("#options").html("");
        fillStrengthSlider.hide();
        strokeStrengthSlider.hide();
        eraserSizeSlider.hide();
    }
}

