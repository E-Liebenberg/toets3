
function BucketTool(colourPalette) {
    this.icon = "assets/paint-bucket.png";
    this.name = "bucketTool";
    
    this.draw = function() {
        //confirms if mouse is pressed in the canvas
        const mouseIsPressedInCanvas = mouseIsPressed && 
            mouseX > 0 && mouseX < width && 
            mouseY > 0 && mouseY < height;

        if (mouseIsPressedInCanvas) {
            
            loadPixels();
            let colour = colourPalette.selectedColourAsRgb();
            floodFillAlgo(mouseX, mouseY, colour);
            updatePixels();
        }
    };

    let floodFillAlgo = function(x, y, targetColour) {
        const bucketStack = [];
        const startColour = getPixelColour(x, y);
        let currentValue = {x, y};

        if(colourCompare(startColour, targetColour)) {
            return
        }

        bucketStack.push({x: currentValue.x, y: currentValue.y});

        // while bucketStack is not empty process each element from bucketStack
        while(bucketStack.length > 0) {
            // get the element from the top of the bucketStack
            currentValue = bucketStack.pop();

            // fill directions var's
            let down = true;
            let up = true;
            let left = false;
            let right = false;

            
            while(up && currentValue.y >= 0) {
                currentValue.y--;
                up = colourCompare(getPixelColour(currentValue.x, currentValue.y), startColour);
            }

            
            while(down && currentValue.y < height) {
                setPixelcolour(targetColour, currentValue.x, currentValue.y);

                // check left and add to bucketStack
                if (currentValue.x - 1 >= 0 && 
                    colourCompare(getPixelColour(currentValue.x - 1, currentValue.y), startColour)) {
                    if(!left) {
                        left = true;
                        bucketStack.push({x: currentValue.x - 1, y: currentValue.y});
                    }
                } else {
                    left = false;
                }

                // check right and add to right
                if (currentValue.x + 1 < width && 
                    colourCompare(getPixelColour(currentValue.x + 1, currentValue.y), startColour)) {
                    if(!right) {
                        right = true;
                        bucketStack.push({x: currentValue.x + 1, y: currentValue.y});
                    }
                } else {
                    right = false;
                }

                currentValue.y += 1;
                down = colourCompare(getPixelColour(currentValue.x, currentValue.y), startColour);
            }
        }
    }

    let getPixelColour = function(x, y) {
        const d = pixelDensity();
        const index = 4 * ((y * d) * width * d + (x * d));
        return [
            pixels[index],
            pixels[index + 1],
            pixels[index + 2]
        ]
    }

    
    let setPixelcolour = function(colour, x, y) {
        const d = pixelDensity();
        for (var i = 0; i < d; i++) {
            for (var j = 0; j < d; j++) {
                const index = 4 * ((y * d + j) * width * d + (x * d + i));
                pixels[index] = colour[0];
                pixels[index+1] = colour[1];
                pixels[index+2] = colour[2];
            }
        }
    }

    //compares the 2 colours 
    let colourCompare = function(x, y) {
        return x[0] == y[0] && x[1] == y[1] && x[2] == y[2];
    }
}