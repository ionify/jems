;

+
{ re:
    { id: "namae@ionify"
    , is: "A Japanese name creator"
    , by: "mike.lee@ionify"
    , at: "2016.11.06-07"
    , in: "san-jose.ca.usa.earth"
    }
,
  do:
    [ {get:"view"}
    , {get:"kana", then:"makeNames"}
    ]
,
  makeNames:
    function makeNames ()
      {  var my   = makeNames.my
           , kana = my.kana
           ;

         //td: create names using 2-3 characters
      }
}

;