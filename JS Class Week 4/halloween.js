function trickOrTreat(age, costume)
     {
        if (age <= 12) 
          {
              const randomMessages = ["Happy Halloween!", "Boo!", "Trick or treat!", "Something spooky is coming."];
              const randomCandies = ["Snickers", "Reese's", "Kit Kat", "Twix", "Skittles"];

              const randomMessageIndex = Math.floor(Math.random() * randomMessages.length);
              const randomCandyIndex = Math.floor(Math.random() * randomCandies.length);

              const randomMessage = randomMessages[randomMessageIndex];
              const randomCandy = randomCandies[randomCandyIndex];

              return `Happy Halloween, little ${costume}! ${randomMessage} Want some ${randomCandy}?`;
          } 
        else if (age <= 18)
          {
              const randomMessages = ["Happy Halloween!", "Boo!", "Trick or treat!", "Something spooky is coming."];
              const randomCandies = ["Snickers", "Reese's", "Kit Kats", "Twix", "Skittles"];

              const randomMessageIndex = Math.floor(Math.random() * randomMessages.length);
              const randomCandyIndex = Math.floor(Math.random() * randomCandies.length);

              const randomMessage = randomMessages[randomMessageIndex];
              const randomCandy = randomCandies[randomCandyIndex];
          return `You're a teenager! ${randomMessage} A ${costume} is a great idea! Do you like ${randomCandy}?`;
          }
        else
          {
              return "You're too old for trick-or-treating. Maybe you can hand out candy?";
          }
      }
    const ageInput = document.getElementById("ageInput");
    const costumeInput = document.getElementById("costumeInput");
    const checkButton = document.getElementById("checkButton");
    const resultElement = document.getElementById("result");

    checkButton.addEventListener("click", 
    () => {
    const age = parseInt(ageInput.value);
    const costume = costumeInput.value;

    const trickOrTreatMessage = trickOrTreat(age, costume);
    resultElement.textContent = trickOrTreatMessage;
    });
    
    const playButton = document.getElementById('playMusic');
    const stopButton = document.getElementById('stopMusic');
    const audio = new Audio('spooky.mp3'); 

    playButton.addEventListener('click', () =>
     {
    audio.play();
    }
    );
    stopButton.addEventListener('click', () => {
    audio.pause();
    });

         /*  start and stop in one button  
          const playStopButton = document.getElementById('playStopMusic');
          const audio = new Audio('spooky.mp3');
          let isPlaying = false;

          playStopButton.addEventListener('click', () => {
            if (!isPlaying) {
              audio.play();
              isPlaying = true;
              playStopButton.textContent = "Stop Spooky Sounds";
            } else {
              audio.pause();
              isPlaying = false;
              playStopButton.textContent = "Play Spooky Sounds";
            }
          }); 
        */