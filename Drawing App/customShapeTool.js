function customShapeTool(){
    this.name="customShape",
    this.icon= "assets/customShape.png";
 
    var editButton;
    var finishButton;

    var editMode = false;
    var currentShape = [];

   

    editButton = createButton('Edit Shape');
    //hides the button so that its not visible yet
    editButton.hide();
    finishButton = createButton('Finish Shape');
    //hides the button so that its not visible yet
    finishButton.hide();

    editButton.mousePressed(function(){
        if(editMode){
            editMode = false;
            editButton.html('Edit Shape');
        }
        else{
            editMode = true;
            editButton.html('Add Vertices');
        }
    })

    //dont fill the shape
    noFill();

    finishButton.mousePressed(function(){
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];

    })

    this.draw = function(){
        noFill();
        updatePixels();
        if(mousePressOnCanvas(canvas) && mouseIsPressed){

            if(!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else{
                for(var i = 0; i < currentShape.length; i++){
                   if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15 ){
                       currentShape[i].x = mouseX;
                       currentShape[i].y = mouseY;
                   }
                }
            }
        }
        
        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            
            vertex(currentShape[i].x, currentShape[i].y);
            if(editMode){
                fill('red');
                ellipse(currentShape[i].x, currentShape[i].y, 5);
                noFill();
            }
        }
        endShape();

    }

    this.populateOptions = function()
    {
        //adds te buttons to the div with the id options
        editButton.parent('#options');
        finishButton.parent('#options');

        //shows the buttons as soon as the icon is clicked
        editButton.show();
        finishButton.show();
    }

    //when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
    this.unselectTool = function()
    {
        select("#options").html("");
    }
};
