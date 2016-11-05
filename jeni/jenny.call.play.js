+
{ please:
      [ "say hi"
      , "ask their name"
      , "say hi with their name"
      ],


  "say hi":
      function (please) {
          please.say ("Hi!");
      },


  "ask their name":
      function (please) {
          please.set.name = please.ask ("What's your name?");
      },


  "say hi with their name":
      function (please) {
          please.say ("Hi "+ please.get.name +"!");
          please.say ("Nice to meet you!");
      }

}//+please
;