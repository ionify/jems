;

+
{ re:
    { id: "namae@ionify"
    , is: "A Japanese name creator"
    , by: "mike.lee@ionify"
    , at: "2016.11.06-07"
    , in: "san-jose.ca.usa.earth"
    },
 
  get:
    ["kana.js", "view.js"],

  on:
    ["kana"],
 
  kana:
    function kana(ion)
      { var names = []
          , hira  = ion.kana.hiragana
          , kata  = ion.kana.katakana
          , roma  = ion.kana.romaji
          , namae = kana.namae
          ;
         namae.hira = hira;
         namae.kata = kata;
         namae.roma = roma;
         namae.spot = [0,1];
      },
 
  spot:
    function onSpot(ion) // +{spot: [0, 1]}
      { var spot    = ion.spot
          , alpha   = spot[0]
          , len     = spot[1]
          , namae   = onSpot.namae
          , which   = alpha % namae.roma.length
          , roma    = namae.roma[which]
          , kata    = namae.kata[which]
          , hira    = namae.hira[which]
         ;
        // generate name by alpha-length based on spot
        
       
        
      }
  do:
    [ {get:"view"}
    , {get:"kana", then:"makeNames"}
    ],
 
  makeNames:
    function makeNames ()
      {  var my   = makeNames.my
           , kana = my.kana
           ;

         //td: create names using 2-3 characters
      },
    
}
// Approach
// 1. Read Kana arrays and restructure by alpha and length into 2-D grid
// expose methods to navigate left, right, up, down
;