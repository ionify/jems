;

+
{ id: "jeni@jsonxd.net",

  about:
    { this:
        [ "jeni: json-embedded  natural interaction"
        , "jeni: jeni enjoys    natural interaction"
        , "She can say things, ask questions, and remember answers."
        ],

      author:
        { name: "Michael Lee",
          site: "San Jose, California, USA, Earth",
          time: "2015.07.28...10.31-07.00"
        },

      edited:
        { by: "editors@jeni.jsonxd.net",
          at: "2015.10.31-07.00"
        },

      todos:
        [ "Enable configurable input and output sensors."
        , "Create webi module with own input + output sensors!"
        , "Have jeni use a webi when she senses web environments!"
        , "Move non-Jeni functionality to other module(s) like ajile"
        , "Enable answers to be any case, upper, lower, or mixed"
        , { ajile:
              [ ".as enables inheriting behavior and data"
              , ".valueOf.valueOf() can allow .valueOf += Function"
              , "create id generators for" +{id:"name"}
              , "simple sensors:"
                    +{on: "ask", go:Function}
                    +{on: "ask", no:Function}
                    +{on: ["ask", "say"], go:"jeni.onJSONXD@jsonxd.net"}
                    +{on: ["ask", "say"], no:"jeni.onJSONXD@jsonxd.net"}
                    +{on: {ask:Function, say:Function}}
                    +{on: {ask: {no:Function}, say: {no:Function}}}

              , "apis.es: Enable using ECMAScript keywords"
                    +{let:"thing", be:"value", const:true||false}
              ]
          }//ajile
        ]//todos
    },


  valueOf:
    function go () {
        var jeni    = this
          , values  = jeni.values
          ;

        function onJSONXD () {
            switch (true) {
                case !!this.ask || "ask" in this:
                    return jeni.ask (this);

                case !!this.say || "say" in this:
                    return jeni.say (this);

                case !!this.set || "set" in this:
                    return jeni.set (this);

                default: return this;
            }
        }

        function rephrase (match, submatch) {
            var phrase = values [match] || (values [match] = values.answer);
            !phrase && (phrase = submatch);
            values.answer = null;
            return phrase;
        }

        Object.prototype.valueOf  = onJSONXD;
        Array.prototype.valueOf   = this.onArray;
        this.rephrase             = rephrase;
    }, //go()


  onArray:
    function onArray () {
        var next = this
          , last = this.length
          , step = -1
          ;
        while (++step < last) + next [step];
    },


  ask:
    function ask (something) {
        +
        [ "todo: prompt using any specified choices i.e. yes, no, maybe"
        , "todo: loop through prompting for unknown words and things"
        ]
        ;

        something.say = something.ask;
        var answer    = (this.say (something), prompt (something.say))
          , values    = this.values
          ;

        something.say = answer;
        this.say (something);

        values.answer   = answer;
        answer          = something [answer];
        (something.say  = answer) && this.say (something);

        return +this.ids.ask;
    },


  get:
    function get (something) {
        +
        { todo:
            [ "Move to ajile.net jem"
              +{get:"[value]",    as:{value:"?"}}
              +{get:"[value.a]",  as:{a:"?"}}
              +{get:"[value.*]",  as:{}}
              +{get:"id",         as:"type"}
              +{get:"jem.id",     as:"jem"}
              +{get:"id",         as:"context.id"}
              +{get:"./path.js",  as:"js.id"}
              +{get:"./ajile",    as:"js.Ajile"}
            ]
        }
        ;
    },


  set:
    function set (something) {
        +
        { can:
            [ '+{set:"name",               to:"value"}'
            , '+{set:"name",               to:"value", lock:true || false}'
            ],
          todo:
            [ "Move to ajile.net jem"
//              +{set:"name",               to:"value", lock:Function}
//              +{set:"name.spaced.value",  to:"jsonXD"}
//              +{set:"name.spaced.value",  to:{name:{spaced:{value:"value"}}}}
//              +{set:"js.property",        to:"jsGlobal"}
            ]
        }
        ;
        var name    = "["+something.set+"]"
          , lock    = something.lock
          , locks   = this.locks
          , value   = something.to
          , values  = this.values
          ;
        !locks [name] && (values [name] = value);
        lock && this.lock ({name:name, value:values [name]});
    },


  lock:
    function lock (object) {
        var name  = object.name
          , value = object.value
          ;
        this.locks [name] = true;
        Object.freeze && Object.freeze (value);
        !(value instanceof Object) + {warn:"Unable to lock ["+name+"]"};
    },


  say:
    function say (something) {
        this.sub    ({say:something});
        console.log (something.say);
        return +this.ids.say;
    },


  sub:
    function sub (templates) {
        +
        [ "todo?: Share publicly like .ask() + .say()"
        , 'todo?: Enable usage like +{sub:"Sentence with [value] to replace."};'
        ]
        ;
        var blank     = this.values [void 0]
          , pattern   = this.patterns.things
          , rephrase  = this.rephrase
          , name
          , phrase
          , template
          ;
        for (name in templates) {
            template        = templates [name];
            phrase          = String (template [name] || blank);
            template [name] = phrase.replace (pattern, rephrase);
        }
    },


  locks:
    { undefined:true,
    },


  values:
    { "[':']"   : "Jeni",
      undefined : ""
    },


  ids:
    { ask: {id:"jeni.ask"},
      say: {id:"jeni.say"}
    },


  patterns:
    { things: (/\[(.*?)\]/g)
    }

}//+jeni

;