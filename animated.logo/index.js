;

+
{ id: 'animated.logo@jsonxd.net',
  by: "Mike Lee, @iskitz",

  faces:
    [ "+{'-':'-'};"/*
    , "+{'_':'_'};"*/
    , "+{'•':'•'};"
    , "+{'ö':'ö'};"
    , "+{'*':'*'};"
    , "+{'o':'o'};"
    , "+{'O':'O'};"
    , "+[‘• ؈ •’];"
    , "+{'0':'0'};"
    , "+{ 0 : 0 };"
    , "+{'õ':'õ'};"
    , "+{'ō':'ō'};"
    , "+{'ô':'ô'};"
    , "+{'ø':'ø'};"
    , "+{'ó':'ò'};"
    , "+{'ò':'ó'};"/*
    , "+{'`':'’'};"*/
    , "+['— ؈ —'];"
    , "+{'~':'~'};"
    , "+{'+':'+'};"
    , "+{'…':'…'};"/*
    , "+{'¿':'¿'};"
    , "+{'!':'!'};"*/
    , "+{'¢':'¢'};"
    , "+{'#':'#'};"
    , "+{'^':'^'};"
    ],

  view: document.body,

  go:
    function go () {
       !go.view  && (go.view  = this.view);
       !go.faces && (go.faces = this.faces);

       var faces = go.faces
         , index = Math.random() * faces.length
         , view  = go.view
         ;

       index          = Math.floor(index);
       view.innerHTML = faces [index];
       var runs       = go.count ? go.count++ : (go.count = 1);
       var wait       = Math.random() * 1500;

       (runs < 2015) && setTimeout (go, wait);
    }, //go()

  valueOf:
    function jsonXDLogo () {
       this.go();
    }
}//animated.logo@jsonxd.net


;
