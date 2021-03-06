;

+
{ re:
    { id: "game"
    , of: "わかった"
    , is: "わかった, a japanese kana alphabet game"
    , by: "Michael Lee, iskitz.net, @iskitz"
    , at: "2016.01.15...09.02-07.00"
    , in: "san-jose.california.usa.earth"
    },

  get:
    ["kana.js", "view.js"],

  on:
    ["kana", "show"],  //can:"show"

  kana:
    function onKana (kana)
      {  var game = onKana.game
           , alpha
           , next
           , name
           ;

         for (var set in kana)
           {  if (set == "re" || set == "kana") continue
           ;  next  = kana [set]
           ;  alpha = []

              for (var subset in next)
                {  subset = next [name = subset]
                ;  if (!Array.isArray (subset)) continue
                ;  alpha.push.apply (alpha, subset)
                ;  alpha [name] = subset
                }

              game [set] = alpha
           }
      },

  show:
    function onShow (view)
      {  var game  = onShow.game
      ;  game.show = view.show      //td.ionify: set automatically
      ;  +{game:game} + game.start  //td.view  : on:{id:"game"}
      },

  speed: 5000||"ms",

  start:
    function start ()
      { with (start.game)
          {  play()
          ;  stop.id = setInterval (play, speed)
          }
      },

  stop:
    function stop ()
      {  clearInterval (stop.id);
      },

  answer  : false,
  answers : 0,
  ease    : 5, //1=10%,..., 5=50%,..., 10=100%

  play:
    function play() {
      +
      { re:
          { id: "game.play",
            it:
              [ "Decides which pairs of letters to show using randomness"
              , "Decides which pairs should match using the +game.ease randomness threshold"
              , "Sends letter pairs to the view for display"
              , "Stops the game after showing as many matches as there are letters"
              ]
          }
      }; //re.game.play()


      var game      = play.game
        , show      = game.show
        , stop      = game.stop
        , hiragana  = game.romaji.gojuon
        , katakana  = game.katakana.gojuon
        , letters   = hiragana.length
        , played
        ;


      function playing ()
        { var nextH       = (Math.random() * letters) | 0
            , match       = game.ease > ((Math.random() * 10 + 1) | 0)
            , nextK       = match ? nextH : (Math.random() * letters) | 0
            ; game.answer = nextH == nextK
            ; game.answers++
            ;

          show (hiragana [nextH] + " : " + katakana [nextK]);
          match && (played ? ++played : played = 1);
          (played >= letters) && stop();
        }

      (game.play = playing)();
    }, //+わかった.game.play()

  skill: 0,

  score:
    function score (answer)
      {  var game = score.game
      ;  !score.correct && (score.correct = 0)
      ;  answer && ++score.correct
      ;  game.skill = Math.round ((score.correct / this.answers) * 100)
      ;  return game.skill
      }

} //+わかった.game

;