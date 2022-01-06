function rectTool()
{
    this.icon ="assets/rect.png";
    this.name = "rect";

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
                rect(firstMouseX,firstMouseY,rLength,rWidth);
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