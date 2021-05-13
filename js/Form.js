class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.welcome = createElement('h3');
    this.rule = createElement('h2')
   
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.welcome.hide();
    this.rule.hide();
   
  }

  display(){
    this.title.html("Animal Racing Game");
    this.title.position(displayWidth/2 - 250, 40);
    background(bgImg)
    //color("red")
    

    this.welcome.html("Welcome to the Animal Racing Game!! Enter your name to get started !!")
    this.welcome.position(displayWidth/2 - 350, displayHeight/2 - 300)

    this.input.position(displayWidth/2 - 200 , displayHeight/2 - 200);
    this.button.position(displayWidth/2 + 10, displayHeight/2 - 150);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      //this.title.hide();
      this.welcome.hide();
      animal.name = this.input.value();
      animalCount+=1;
      animal.index = animalCount;
      animal.update();
      animal.updateCount(animalCount);
      this.greeting.html("Welcome " + animal.name + ", waiting for four more players to join..."  )
      this.greeting.position(displayWidth/2 - 400, displayHeight/4);
      this.rule.html("*NOTE* - Press the right arrow to move your animal forward.")
      this.rule.position(displayWidth/2 - 400, displayHeight* 2/4);
    });

  }
}
