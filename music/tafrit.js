var menu =
    '<ul class="nav-bar" id="menu">' +

        '<li><a href="index.html">ראשי</a></li>' +

        '<li><a href="about.html">אודות</a></li>' +

        '<li><a href="beyondTheMusic.html">מאחורי הצלילים</a>' +
            '<ul class="sub_menu" >' +                
                '<li><a href="musicalNote.html">מהו תו נגינה?</a></li>' +
                '<li><a href="octava.html">מהי אוקטבה?</a></li>' +
				'<li><a href="accord.html">מהו אקורד?</a></li>' +
				'<li><a href="scale.html">מהו סולם?</a></li>' +
                '<li><a href="scalesTypes.html">סוגי סולמות</a></li>' +
            '</ul>' +
        '</li>' +
            

        '<li><a href="scaleGenerator.html">מחולל הסולמות</a></li>' +
            


        '<li><a href="galleryStrings.html">גלריה</a>' +
            '<ul class="sub_menu" >' +                
                '<li><a href="galleryStrings.html">כלי מיתר</a></li>' +
                '<li><a href="galleryWind.html">כלי נשיפה</a></li>' +
                '<li><a href="galleryPercussion.html">כלי הקשה</a></li>' +
            '</ul>' +
        '</li>' +


        '<li><a href="contact.html">צור קשר</a>' +

    '</ul>';

function mark() {    
    if (window.location.href=="http://aux.shenkar.ac.il/656/group22/") //root directory    
        currPage = "index.html";    
    else
        currPage = document.location.href.match(/[^\/]+$/)[0];
    
    currA = $("#menu li a[href='" + currPage + "']").css({"color" : "#a24f00", "font-weight":"bold"});
    parentUL = currA.parent().parent();
    if (parentUL.attr("id") == "menu") { //clicked on mainMenu li
        if (currA.closest("li").children("ul").length) { //if li has submenu
            $("#side_menu").html(currA.closest("li").children("ul").html()).parent().show();            
        }
    } else { //clicked on subMenu li
        $("#side_menu").html(currA.parent().parent().html()).parent().show();
        currA.parent().parent().parent().find("a").first().css({ "color": "#a24f00", "font-weight": "bold" }); //color subMenu parent LI 
    }        
}

$("document").ready(function () {
    mark();
    InitializeNextPageLink();
    //$(".nextPage").click(function (e) { nextPageLinkClicked(e) });
})

function InitializeNextPageLink() {
    currPage = document.location.href.match(/[^\/]+$/)[0];

    currLI = $("#menu li a[href='" + currPage + "']").parent();
    nextLI = currLI.next();
    nextPageHref = nextLI.find("a").attr("href");
    nextPageTitle = nextLI.find("a").text();
    $("a.nextPage").attr("href", nextPageHref).text(nextPageTitle);
}
