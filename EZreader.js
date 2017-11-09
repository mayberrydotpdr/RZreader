javascript:
(function menusAdded(){
    (function(){      
        Test1=document.getElementById('genDiv');
        Test2=document.getElementById('x_nav');
        myBody=document.getElementsByTagName('BODY')[0];
        myHtml=document.getElementsByTagName('HTMl')[0];
          if(Test1 != null){
            myBody.removeChild(Test1);
          }
          if(Test2 != null){
            myHtml.removeChild(Test2);
          } else {    
        var newNode = document.createElement('div');
        var newNav = document.createElement('div');
        newNode.id = 'genDiv';
        newNav.id = 'x_nav';
        newNode.innerHTML = '<div id="x_Apply">Apply<div id="janky">&otimes;</div></div><br><button id="readRule" type="button" onclick="clipItRuler()" >Reading Ruler on/off</button></div><br><br><button id="removeIframes" type="button" onclick="makeClean()" >Remove Iframes (Adds)</button><br><button id="dMark" type="button" onclick="checkCookie()" >Mark</button><br><button id="goToMark" type="button" onclick="goToMySavedSpot()" >Go To</button><span> </span><span id="pxFromTop"></span><div id="hereNow">Scroll: 0px</div><button type="button" onclick="scrollToInput()">Jump To</button><input id="scroll_to"><form id="myForm">Text Color ☞<select form="myForm"><option value="">Default</option><option value="Silver">Silver</option><option value="Black">Black</option><option value="White">White</option><option value="#f4ecd8">Sepia</option><option value="#5b4636">Brown</option><option value="#0A3F06">Dark Green</option><option value="green">Green</option><option value="#BFAE4D">Chrome</option><option value="#292A48">Dark Blue</option><option value="#886E72">Rose</option></select><br><br> Background Color ☞<select form="myForm"><option value="">Default</option><option value="#454646">Dark Gray</option><option value="Black">Black</option><option value="White">White</option><option value="#f4ecd8">Sepia</option><option value="#5b4636">Brown</option><option value="#0A3F06">Green</option><option value="#BFAE4D">Chrome</option><option value="#292A48">Dark Blue</option><option value="#886E72">Rose</option></select><br><br> Font Size ☞<select form="myForm"><option value="">Default</option><option value="10pt">10pt</option><option value="12pt">12pt</option><option value="14pt">14pt</option><option value="16pt">16pt</option><option value="18pt">18pt</option><option value="20pt">20pt</option></select><br><br> Zoom ☞<select form="myForm"><option value="">Default</option><option value="1.01">10%</option><option value="1.02">20%</option><option value="1.03">30%</option><option value="1.04">40%</option><option value="1.05">50%</option><option value="1.1">200%</option></select><br><br> R-Margin ☞<select form="myForm"><option value="">Default</option><option value="10%">Narrow</option><option value="20%">Easy Reader</option><option value="30%">Wide</option><option value="35%">Very Wide</option></select><br><br> L-Margin ☞<select form="myForm"><option value="">Default</option><option value="10%">Narrow</option><option value="20%">Easy Reader</option><option value="30%">Wide</option><option value="35%">Very Wide</option><br><br></select><br><br> Line Height ☞<select form="myForm"><option value="">Default</option><option value="1.5">1.5</option><option value="2.5">2.5</option><option value="3.5">3.5</option><br><br></select><br><br> Font Weight ☞<select form="myForm"><option value="">Default</option><option value="bold">bold</option><option value="bolder">bolder</option><option value="lighter">lighter</option><br><br></select><br><br> Letter Spacing ☞<select form="myForm"><option value="">Default</option><option value="0.5px">Extra Spacing</option><option value="0.8px">Even More</option><br><br></select><br><br> Word Spacing ☞<select form="myForm"><option value="">Default</option><option value="5px">More</option><option value="6.5px">Extra Spacing</option><br><br></select><br><br> Font Family ☞<select form="myForm"><option value="">Default</option><option value="monospace">Monospace</option><option value="sans-serif">Sans-Serif</option><option value="serif">Serif</option><br><br></select><br><br>Heading Color ☞<select form="myForm"><option value="">Default</option><option value="Silver">Silver</option><option value="#BFAE4D">Chrome</option><option value="green">Green</option><option value="blue">Blue</option><option value="red">Red</option><option value="yellow">Yellow</option></select><br><br>Link Color ☞<select form="myForm"><option value="">Default</option><option value="Silver">Silver</option><option value="green">Green</option><option value="blue">Blue</option><option value="red">Red</option><option value="yellow">Yellow</option></select><br></form></div><br>';
        newNav.innerHTML = '<div id="toTop">&and;</div><div id="burger">&equiv;</div><div id="toBottom">&or;</div>';
        document.getElementsByTagName("BODY")[0].appendChild(newNode);
        document.getElementsByTagName("HTML")[0].appendChild(newNav);            
        if (newNode) {
          drawSelectBox()
        }}
     
    })();      
    function drawSelectBox(){      
        var x = document.getElementById("genDiv");
        var y = document.getElementById("x_Apply");
        var top = document.getElementById("toTop");
        var burg = document.getElementById("burger");
        var botm = document.getElementById("toBottom");
        var redx = document.getElementById("janky");
        var readrule = document.getElementById("readRule");
        var remfr = document.getElementById("removeIframes");
        var frm = document.getElementById("myForm");
        frm.style.padding = '15px';
        redx.style.backgroundColor = 'transparent';
        redx.style.top = '8px';
        redx.style.right = '12px';
        redx.style.position = 'absolute';
        redx.style.fontSize = '20pt';
        redx.style.color = 'red';
        redx.style.textShadow = '1px 1px 20px white';
        readrule.style.left = '110px';
        readrule.style.position = 'absolute';
        remfr.style.left = '110px';
        remfr.style.position = 'absolute';
        y.style.marginRight = '80px';
        y.style.padding = '5px';
        y.style.backgroundColor = '#4caf50';
        y.style.border = '2px solid #000';
        y.style.cursor = 'pointer';
        y.style.zIndex = '90000000000';
        y.style.display = 'block';
        x.style.zIndex = '90000000000'; 
        x.style.position = 'fixed';
        x.style.top = '0px';
        x.style.right = '20px';
        x.style.height = '200px';
        x.style.overflow = 'scroll';
        x.style.backgroundColor = '#757575';
        x.style.border = '2px solid black';
        x.style.margin = '50px';
        x.style.padding = '15px';
        x.style.display = 'block';
        top.style.zIndex = '90000000000'; 
        top.style.position = 'fixed';
        top.style.top = '18px';
        top.style.right = '-5px';
        top.style.fontSize = '35pt';
        top.style.cursor = 'pointer';
        top.style.textShadow = '1px 1px 20px white';
        burg.style.zIndex = '90000000000'; 
        burg.style.position = 'fixed';
        burg.style.top = '68px';
        burg.style.right = '1px';
        burg.style.fontSize = '30pt';
        burg.style.cursor = 'pointer';
        burg.style.textShadow = '1px 1px 20px white';
        botm.style.zIndex = '90000000000'; 
        botm.style.position = 'fixed';
        botm.style.top = '110px';
        botm.style.right = '-5px';
        botm.style.fontSize = '35pt';
        botm.style.cursor = 'pointer';
        botm.style.textShadow = '1px 1px 20px white';
    }
    (function themeApplied(){
        var x = document.getElementById("x_Apply"),
            btom = document.getElementById("toBottom"),
            ztop = document.getElementById("toTop"),
            burg = document.getElementById("burger");
        x.addEventListener("click", applyTheme);
        btom.addEventListener("click", goToBottom);
        ztop.addEventListener("click", goToTop);
        burg.addEventListener("click", drawSelectBox);
            function goToTop() {
              window.scrollTo(0, 0);
            }
            function goToBottom() {
              window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
            }
            function applyTheme() {
                var x = document.getElementById("genDiv").style.display = 'none',
                    y = document.getElementById("x_Apply").style.display = 'none',                                      
                    txc = document.getElementById("myForm").elements.item(0).value,
                    bgc = document.getElementById("myForm").elements.item(1).value,
                    txs = document.getElementById("myForm").elements.item(2).value,
                    zos = document.getElementById("myForm").elements.item(3).value,
                    prs = document.getElementById("myForm").elements.item(4).value,
                    pls = document.getElementById("myForm").elements.item(5).value,
                    lhs = document.getElementById("myForm").elements.item(6).value,
                    fws = document.getElementById("myForm").elements.item(7).value,
                    lss = document.getElementById("myForm").elements.item(8).value,
                    wss = document.getElementById("myForm").elements.item(9).value,
                    ffs = document.getElementById("myForm").elements.item(10).value,
                    clrs = document.getElementById("myForm").elements.item(11).value,
                    hls = document.getElementById("myForm").elements.item(12).value;
                    (function() {
                        pList = [];
                        var xyzp = document.body.querySelectorAll('P'), 
                            indexp = 0; for( indexp=0; indexp < xyzp.length; indexp++ ) {
                        pList.push(xyzp[indexp]);
                    }}());
                    (function (){
                        for(var i=0; i<pList.length; i++){
                             pList[i].style.paddingRight= prs;
                             pList[i].style.paddingLeft= pls;
                             pList[i].style.lineHeight= lhs;
                             pList[i].style.fontWeight= fws;
                             pList[i].style.letterSpacing= lss;
                             pList[i].style.wordSpacing= wss;
                             pList[i].style.fontFamily= ffs;
                         }
                    }());        
                    (function() {
                        domList = [];
                        var xyz = document.body.querySelectorAll('*'); 
                        var index = 0; for( index=0; index < xyz.length; index++ ) {
                        domList.push(xyz[index]);
                    }}());

                    (function (){
                        for(var i=0; i<domList.length; i++){
                            domList[i].style.color= txc;
                            domList[i].style.backgroundColor= bgc;
                            domList[i].style.fontSize=txs;
                            domList[i].style.zoom = zos;
                            domList[i].style.MozTransform = 'scale(zos)';
                            domList[i].style.WebkitTransform = 'scale(zos)';
                        }
                    (function() {
                        hList = [];
                        var xyzh = document.body.querySelectorAll('header, header *, h1, h1 *, h2, h2 *, h3, h3 *, h4, h4 *, h5, h5 *, h6, h6 *'), 
                            indexh = 0;
                        for( indexh=0; indexh < xyzh.length; indexh++ ) {
                            hList.push(xyzh[indexh]);
                        }
                    }());
                    (function (){
                        for(var i=0; i<hList.length; i++){
                             hList[i].style.color= clrs;
                        }
                    }());
                        var x = document.getElementById("myForm").elements.item(1).value;
                        if (x == bgc) {
                            nHance ();
                        }
                        function nHance (){
                            for (myTheme=0; myTheme < document.all.length; myTheme++) {
                                if (document.all[myTheme].tagName == 'html', 'body', 'div', 'article', 'section', 'aside', 'p', 'a', 'header', 'h1', 'h2', 'h3', 'h4', 'iframe') {
                                    with (document.all[myTheme].style) {
                                        if (backgroundColor==bgc) {
                                            void (backgroundColor=document.bgColor)
                                        } else {
                                          void(backgroundColor=bgc)
                                          }                                  
                                    }
                                }
                            }
                        }
                      (function() {
                          for (nIx5Bs=0; nIx5Bs<document.all.length; nIx5Bs++) {
                              if (document.all[nIx5Bs].tagName=='A') {
                                  with (document.all[nIx5Bs].style) {
                                      if (backgroundColor==hls) {
                                          void(backgroundColor=document.bgColor)
                                      } else {
                                          void(backgroundColor=hls);
                                        }
                                  }
                              }
                           }
                       }());
                    }());
            }
    })();
})();
function clipItRuler(){
    myTextarea=document.getElementById('copy_textarea');
    myButton=document.getElementById('save_txt');
    mySelectButton=document.getElementById('Select_txt');
    myBody=document.getElementsByTagName('body')[0];
    if(myTextarea!=null){
       myBody.removeChild(myTextarea);
       }
    if(myButton!=null){
       myBody.removeChild(myButton);   
       }
    if(mySelectButton!=null){
       myBody.removeChild(mySelectButton);   
       } else {
          myTextarea=document.createElement('textarea');
          myButton=document.createElement('button');
          mySelectButton=document.createElement('button');
          myTextarea.id='copy_textarea';
          myButton.id='save_txt';
          mySelectButton.id='Select_txt'; 
          myTextarea.style.position='fixed';
          myButton.style.position='fixed';
          mySelectButton.style.position='fixed';  
          myTextarea.style.zIndex='90000000000';
          myButton.style.zIndex='900000000000';
          mySelectButton.style.zIndex='900000000000';
          myTextarea.style.top='470px';
          myTextarea.style.height='8px';
          myTextarea.style.width='8px';
          myButton.style.top='250px';
          mySelectButton.style.top='200px';   
          myTextarea.style.left='3px';
          myButton.style.right='0px';      
          mySelectButton.style.right='0px';
          myBody.appendChild(myTextarea);
          myBody.appendChild(myButton);
          myBody.appendChild(mySelectButton);
          savNote=document.createTextNode("S");
          myButton.appendChild(savNote);
          selectNote=document.createTextNode("H");
          mySelectButton.appendChild(selectNote);
          eVt=document.getElementById("save_txt");
          eVt.addEventListener("click", SaveTextArea);
          function SaveTextArea() { 
              void(window.location = "data:application/octet-stream," + escape(copy_textarea.value));
          }
          void(eVtSelect=document.getElementById("Select_txt"));
          void(eVtSelect.addEventListener("click", SelectTextArea));
          function SelectTextArea() { 
              document.getElementById("copy_textarea").select();
          }
        }
}
function makeClean() {
    var x = document.getElementsByTagName("iframe");
    var i;    for (i = 0; i < x.length; i++) { 
       x[i].style.display = "none";
    }}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
       var bookMark1 = window.scrollY;
       document.getElementById("pxFromTop").innerHTML = bookMark1;
       var mark = document.getElementById("pxFromTop").innerHTML;
       setCookie("username", mark, 30);    
}
function goToMySavedSpot() {
      var mark=getCookie("username");
      scrollTo(0, mark);
}
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    var vScroll = document.getElementById("hereNow");
      vScroll.innerHTML = "Scroll: " + top + "px";
}, false);
function scrollToInput() {
      var mark=document.getElementById("scroll_to").value;
      scrollTo(0, mark);
}
