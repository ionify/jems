;

+
{ re:
    { id: "view"
    , is: "A web interface for, なまえ, a Japanese name creator"
    , by: "mike.lee@iskitz"
    , at: "2016.11.08-07.00"
    , in: "san-jose.ca.usa.earth"
    }

, get: ["kana.js"]
, on : ["kana"]

, kana:
    function kana (ion)
      {  var names = []
           , hira  = ion.kana.hiragana
           , kata  = ion.kana.katakana
           , roma  = ion.kana.romaji
           , view  = kana.view

      ;  for (var h=-1, lastH=hira.length; ++h < lastH;)
           for (var rp=roma[h], hp=hira[h], next=-1; ++next < lastH;)
             {  names.push (hp + hira[next] + " : " + rp + roma[next])
             }

      ;  view.show (names)
      }

, show:
    function show (names)
      {  names && (show.view.dom.innerHTML += names.join ("<br>"))
      }

, dom  : document.body
, title: document.title = "なまえ"

} //+なまえ.view
;