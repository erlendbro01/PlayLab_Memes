function setup() {
  noCanvas;
  let speech = new p5.Speech(); //object for synthesis

  let speechRec = new p5.SpeechRec("en-US", gotSpeech); //speech recon object
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  let bot = new RiveScript();
  bot.loadFile("brain.rive", brainReady, brainError);

  function brainReady() {
    console.log("Chatbot Ready");
    bot.sortReplies();
  }

  function brainError() {
    console.log("Chatbot error");
  }

  let button = select("#submit");

  let user_input = select("#user_input");

  let output = select("#output");

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    let username = "local-user";
  }

  function gotSpeech() {
    if (speechRec.resultValue) {
      let input = speechRec.resultString;

      console.log(input);
      user_input.value(input);
      bot.reply("local-user", input).then(function (reply) {
        category = input;
        userAction(input);

        output.html(reply);
        speech.speak(reply);
      });
    }
  }
}
