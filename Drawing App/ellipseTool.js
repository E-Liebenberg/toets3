function ellipseTool()
{
    this.icon = "assets/ellipse.png";
    this.name = "ellipse";

    var previousMouseX = -1;
    var previousMouseY = -1;
    var firstMouseX = -1;
    var firstMouseY = -1;
    var dropbox = null;

    this.draw = function()
    {
        if(mouseIsPressed)
        {
            if(dropbox.value()=="Filled")
            {
                fill(colourP.selectedColour);
            }
            else
            {
                noFill();
            }
            if(previousMouseX ==-1)
            {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
                firstMouseX = mouseX;
                firstMouseY = mouseY;
            }
            else
            {
                updatePixels();
                var rLength = (mouseX-firstMouseX);
                var rWidth = (mouseY-firstMouseY);
                ellipse(firstMouseX,firstMouseY,rLength*2,rWidth*2);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        else
        {
            previousMouseX = -1;
            previousMouseY = -1;
            loadPixels();
        }
    };

    this.populateOptions = function()
    {
        dropbox = createSelect();
        dropbox.option("Filled");
        dropbox.option("Unfilled");
        dropbox.parent("#options");
    };

    this.unselectTool = function()
    {
        select("#options").html("");
    }
}