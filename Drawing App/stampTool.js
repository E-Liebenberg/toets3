function stampTool(){
    this.name = "stamp";
	this.icon = "assets/stamp.png";


    var star = loadImage('assets/star.png');

    var slider1;
    var slider2; 
    
    //slider for Size of star image
    // this.starSizeSlider  = createSlider(5, 50 ,20);
    // this.starSizeSlider.parent("#sizeOfStarControl");

    // number of stars
    // this.nStarSlider = createSlider(1, 20 ,1);
    // this.nStarSlider.parent("#numberOfStarsControl");

    this.draw = function(){
        if(mouseIsPressed){

            for ( i = 0; i < this.nStarSlider.value(); i++) {
                
                var starSize = this.starSizeSlider.value();
                // var starX = random((mouseX - starSize/2)-10,(mouseX - starSize/2)+10);
                // var starY = random((mouseY - starSize/2)-10,(mouseY - starSize/2)+10);
                var starX = mouseX;
                var starY = mouseY;
                image(star, starX, starY, starSize,starSize);
                
            }

        }

       
    }

    this.populateOptions = function()
    {
        

        sliderOptions = createDiv();
        sliderOptions.id('sliderOptions');
        sliderOptions.parent('#options');
        sliderOptions.style('display','flex');
       

        slider1 = createDiv();
        slider1.style('padding','0rem 0.4rem')
        slider2 = createDiv();
        slider2.style('padding','0rem 0.4rem')

        slider1.id('slider1');
        slider2.id('slider2');

        slider1.class('box');
        slider2.class('box');
        
        slider1.parent("#sliderOptions");
        slider2.parent("#sliderOptions");

        this.starSizeSliderText = createP("Size of Stars");
        this.starSizeSliderText.parent("#slider1");

        this.starSizeSlider  = createSlider(5, 50 ,20);
        this.starSizeSlider.parent("#slider1");

        this.nStarSliderText= createP("Number of Stars");
        this.nStarSliderText.parent("#slider2");

        this.nStarSlider  = createSlider(1, 20 ,1);
        this.nStarSlider.parent("#slider2");
    };
    
	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
    this.unselectTool = function()
    {
        select("#options").html("");
    }
    

} 