+
{ please:
      [ "say hi"
      , "ask for my name"
      , "say hi with my name"
      , "ask if I can code"
      , "reply about my answer"
      ],


  'say hi':
      {   say: "Hi!"
      },


  'ask for my name' :{
          ask: { name: "What's your name?" }
      },


  'say hi with my name' :{
          say: "Hi {name}! Nice to meet you!"
      },


  'ask if I can code' :{
          vow: { code: "Can you code?" }
      },


  'reply about my answer':
      { reply:
          { yes   : "Great! Let's go!",
            no    : "No problem! I can teach you :-)",
            maybe : "Ok. Let's try :-)"
          }
      }

}//+please
;