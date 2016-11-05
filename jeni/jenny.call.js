+
{ id: "jenny",

  about:
    { this:
        [ "jenny: jenny enjoys nimbly notifying you!"
        , "jenny makes playing with code fun. You can ask her to do things "
        + " by saying please."
        ],

      author:
        { name: "Michael Lee",
          when: "2015.07.28-07.00.SanJose.California.USA.Earth"
        },

      editor:
        { name: "Michael Lee",
          when: "2015.08.01-07.00.SanJose.California.USA.Earth"
        },

      todos:
        [ "Enable overriding .ask() + .say()"
        , "Create webi module with own .ask() + .say()!"
        , "Have jenny use the webi when she senses web environments!"
        ],

      ideas:
        [ "ajile: .as enables inheriting behavior and data"
        , "ajile: .valueOf.valueOf() can allow .valueOf += Function"
        ]
    },


  valueOf:
    function go () {
        Object.prototype.valueOf  = this.onPlease;
        this.onPlease.jenny       = this;
    },


  onPlease:
    function onPlease () {
        if (!this.please) return this;

        var jenny = onPlease.jenny;

        var please =
              { get: {}
              , set: {}
              , ask: jenny.ask
              , say: jenny.say
              };

        jenny.preserve (please);

        var action
          , update  = jenny.update
          , next    = this.please
          , step    = 0
          , last    = next.length
          ;

        do{ action = this [ next [step]];
            action (please);
            update (please);
          } while (++step < last);
    },


  ask:
    function ask (question) {
        this.say (question);
        var answer = prompt (question);
        this.say (answer);
        return answer;
    },


  preserve:
    function preserve (object) {
        Object.freeze && Object.freeze (object);
    },


  say:
    function say (sentence) {
        console.log (sentence);
    },


  update:
    function update (please) {
       var get = please.get
         , set = please.set
         , thing
         ;

       for (thing in set) {
           get [thing] = set [thing];
           delete set [thing];
       }
    }

}//+jenny
;