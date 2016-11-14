;

+
{ re:
    { id: "namae@ionify"
    , is: "A Japanese name creator"
    , by: "mike.lee@ionify"
    , at: "2016.11.13-08...06"
    , in: "san-jose.ca.usa.earth"
    },
/*
  do:
    [ {get:"view"}
    , {get:"...", in:"kana", for:"namae", then:"makeNames"}
    ],
*/
  get:
    ["kana.js", "view.js"],

  on:
    ["kana"],
 
  kana:
    function onKana (ion)
      { var namae          = onKana.namae
          , kana           = ion.kana
          ; namae.hiragana = kana.hiragana
          ; namae.katakana = kana.katakana
          ; namae.romaji   = kana.romaji
      },
 
  spot:
    function onSpot (ion)            // ion: +{spot: [0, 1]}
      { var spot    = ion.spot
          , alpha   = spot[0]
          , len     = spot[1]
          , namae   = onSpot.namae
          , which   = alpha % namae.romaji.length
          , roma    = namae.romaji   [which]
          , kata    = namae.katakana [which]
          , hira    = namae.hiragana [which]
          ; namae.spot = spot
          ;

        // td: generate names by alpha-length based on spot
      },

  do:
    [ {get:"view"}
    , {get:"kana", then:"makeNames"}
    ],
 
  makeNames:
    function makeNames ()
      { var my   = makeNames.namae
          , kana = my.kana
          ;

         //td: create names using 2-3 characters
      }
    
}
// Approach
// 1. Read Kana arrays and restructure by alpha and length into 2-D grid
// expose methods to navigate left, right, up, down
;