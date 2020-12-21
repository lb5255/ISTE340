function getData(pathName){
    return $.ajax({
            type: 'get',
            url:'http://solace.ist.rit.edu/~plgics/proxy.php',
            dataType:'json',
            data: pathName,
            cache:false,
            async:true
            })
}

// this deals with the about section
getData({path:'/about'}).done(function(json){
    $("#title").append(json.title);
    $("#description").append(json.description);
    $("#quote").append(json.quote);
    $("#quoteAuthor").append(json.quoteAuthor);
});

// this deals with the bs ms degree
getData({path:'/degrees'}).done(function(json){
    $.each(json.undergraduate, function (i, item) {
            $("#bs").append("<h3>" + item.title + "</h3>");

            var bigDiv = "<div>";

            bigDiv += "<h3>" + item.title + "</h3>";
            bigDiv += "<p>" + item.description + "</p>";
            bigDiv += "<h3>Concentrations</h3>"

            $.each(item.concentrations, function (j, jtem) {
                bigDiv += "<li>" + jtem + "</li><br>";

            });

            bigDiv += "</div>";

            $("#bs").append(bigDiv)
        })
                $("#bs").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
    
    $.each(json.graduate, function (i, item) {
        // for some reason if i dont have the if statement, it adds an extra tag named undefine
            if (item.title != null) {
                $("#ms").append("<h3>" + item.title + "</h3>");

                var bigDiv = "<div>";

                bigDiv += "<h3>" + item.title + "</h3>";
                bigDiv += "<p>" + item.description + "</p>";
                bigDiv += "<h3>Concentrations</h3>"

                $.each(item.concentrations, function (j, jtem) {
                    bigDiv += "<li>" + jtem + "</li><br>";

                });

                bigDiv += "</div>";

                $("#ms").append(bigDiv)
            }
        })
                $("#ms").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
});


// this deals with minors
getData({path:'/minors'}).done(function(json){
        $.each(json.UgMinors, function (i, item) {
                    $("#mi").append("<h3>" + item.title + "</h3>");

                    var bigDiv = "<div>";

                    bigDiv += "<h3>" + item.title + "</h3>";
                    bigDiv += "<p>" + item.description + "</p>";
                    bigDiv += "<h3>Courses</h3>"

                    $.each(item.courses, function (j, jtem) {
                        bigDiv += "<li>" + jtem + "</li><br>";

                    });

                    bigDiv += "</div>";

                    $("#mi").append(bigDiv)
        })
            $("#mi").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });

});

// this deals with the employment section
getData({path:'/employment'}).done(function(json){
    $("#overview").append("<h4>" + json.introduction.title + "</h4>");
            $.each(json.introduction.content, function (i, item) {
                $('#overview').append(`
           	  		<h2>${item.title}</h2>
           	  		<p id="op">${item.description}</p>
           	  `);
        })
        $("#overview").append("<h2>" + json.degreeStatistics.title + "</h2>");
        $.each(json.degreeStatistics.statistics, function (i, item) {
                $('#overview').append(`
           	  		<h2 id=opp>${item.value}</h2>
           	  		<p id="op">${item.description}</p>
           	  `);
        })
        $("#overview").append("<h2>" + json.careers.title + "</h2>");
        $.each(json.careers.careerNames, function (i, item) {
                $('#overview').append(`
           	  		<p id=opp>${item}</p>
           	  `);
        })
        
        $("#overview").append("<h2>" + json.employmentTable.title + "</h2>");
        
        $("#jsGrid").jsGrid({
                width: "100%",
                height: "400px",
 
                inserting: false,
                editing: false,
                sorting: true,
                paging: true,
 
                data: json.employmentTable.professionalEmploymentInformation,
 
                fields: [
                    { name: "employer", type: "text", width: 125, validate: "required" },
                    { name: "degree", type: "text", width: 50 },
                    { name: "city", type: "text", width: 75 },
                    { name: "title", type: "text", width: 150},
                ]
            });
    
        $("#cooptitle").append("<h2>" + json.coopTable.title + "</h2>");
        
        $("#CoopjsGrid").jsGrid({
                width: "100%",
                height: "400px",
 
                inserting: false,
                editing: false,
                sorting: true,
                paging: true,
 
                data: json.coopTable.coopInformation,
 
                fields: [
                    { name: "employer", type: "text", width: 125, validate: "required" },
                    { name: "degree", type: "text", width: 50 },
                    { name: "city", type: "text", width: 75 },
                    { name: "term", type: "text", width: 150},
                ]
            });
    
});

// create map
var frame = document.createElement("iframe");
frame.class = "ui-widgit-content";
frame.src = "http://ist.rit.edu/api/map.php";
$("#map").append(frame);


// deals with faculty 
getData({path:'/people'}).done(function(json){
    var currentRow = 0;
    var nextElement;

    tableElement = $("<table>", {
        "id": "myTable",
        "style": "width:100%"
    });
    $("#people").append(tableElement);

    $.each(json.faculty, function (i, item) {
        if (i == 0) {
            nextElement = $("<tr>", {
                "id": "myTr" + currentRow
            });
            $("#myTable").append(nextElement);
        }
        nextElement = $("<td>");
        nextElement.text(item.name);
        nextElement.click(function () {
            getName(json.faculty, item.name);
        });
        $("#myTr" + currentRow).append(nextElement);
        if ((i + 1) % 10 === 0) {
            nextElement = $("</tr>");
            $(myTable).append(nextElement);
            currentRow++;
            nextElement = $("<tr>", {
                "id": "myTr" + currentRow
            });
            $(myTable).append(nextElement);
        }
    });
    
});

$("#dialog").dialog({
        autoOpen: false,
        width: 350,
        height: 600,
        buttons: [
            {
                text: "OK",
                icons: {
                    primary: "ui-icon-heart"
                },
                click: function () {
                    $("#dialog").dialog("close");
                }
            }
        ]
    });

function getName(faculty, name) {
    for (const prop in faculty) {
        if (faculty[prop].name == name) {
            var divContent = "<div><ul>";

            divContent += "<p><font color='#18ADEA'><b><u>Title:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>" + faculty[prop].title + "</b></<p>"
            divContent += "<p><font color='#18ADEA'><b><u>Email:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>" + faculty[prop].email + "</b></<p>"
            divContent += "<p><font color='#18ADEA'><b><u>Office:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>" + faculty[prop].office + "</b></<p><br><br>"
            divContent += "<img src =" + faculty[prop].imagePath + ">";

            divContent += "</ul></div>";
            
            $("#dialog").html(divContent);
            $("#dialog").dialog("option", "title", name);
            $("#dialog").dialog("open")
            break;

        }
    }
}


// this is all about the resource part
getData({path:'/resources'}).done(function(json){
    $("#resource").append("<h2>" + json.title + "</h2>");
    $("#resource").append("<h4>" + json.studyAbroad.title + "</h4>");
    $("#resource").append("<p>" + json.studyAbroad.description + "</p>");
    
    $.each(json.studyAbroad.places, function(i,item){
        $("#abroad").append("<h3>" + item.nameOfPlace + "</h3>");
        
        var theDiv = "<div>";
        
        theDiv += "<h3>" + item.nameOfPlace + "</h3>";
        theDiv += "<p>" + item.description + "</p>";
        
        theDiv +="</div>";
        
        $("#abroad").append(theDiv);

    })
            $("#abroad").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
    });
    

    $("#stuserv").append("<h4>" + json.studentServices.academicAdvisors.title + "</h4>");
    $("#stuserv").append("<p>" + json.studentServices.academicAdvisors.description + "</p>");
    
    $("#facAd").append("<h4>" + json.studentServices.facultyAdvisors.title + "</h4>");
    $("#facAd").append("<p>" + json.studentServices.facultyAdvisors.description + "</p>");

    $("#profserv").append("<h4>" + json.studentServices.professonalAdvisors.title + "</h4>");
    
    let profAd = json.studentServices.professonalAdvisors.advisorInformation;

    let unordList = "<ul>";
    unordList = unordList + "<li><a href=#div0>" + profAd[0].department + "</a></li>"
    unordList = unordList + "<li><a href=#div1>" + profAd[1].department + "</a></li>"
    unordList = unordList + "</ul>"
    $( "#proftab" ).append(unordList);

    let divs = '';
    divs = divs + "<div id='div0'>" + profAd[0].name + "<br>" + profAd[0].email + "</div>";
    divs = divs + "<div id='div1'>" + profAd[1].name + "<br>" + profAd[1].email + "</div>";
    $("#proftab" ).append(divs);
    $("#proftab" ).tabs();
    
    $("#tuts").append("<h4>" + json.tutorsAndLabInformation.title + "</h4>");
    $("#tuts").append("<p>" + json.tutorsAndLabInformation.description + "</p>");
    
    
    $("#coop").append("<h4>" + json.coopEnrollment.title + "</h4>");
    $.each(json.coopEnrollment.enrollmentInformationContent, function(i,item){
        $("#coopTab").append("<h3>" + item.title + "</h3>");
        
        var theDiv = "<div>";
        
        theDiv += "<h3>" + item.title + "</h3>";
        theDiv += "<p>" + item.description + "</p>";
        
        theDiv +="</div>";
        
        $("#coopTab").append(theDiv);

    })
            $("#coopTab").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
    });
    
    $("#StuAd").append("<h4>" + json.studentAmbassadors.title + "</h4>");
    $.each(json.studentAmbassadors.subSectionContent, function(i,item){
        $("#StuAdTab").append("<h3>" + item.title + "</h3>");
        
        var theDiv = "<div>";
        
        theDiv += "<h3>" + item.title + "</h3>";
        theDiv += "<p>" + item.description + "</p>";
        
        theDiv +="</div>";
        
        $("#StuAdTab").append(theDiv);

    })
            $("#StuAdTab").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
    });
    
    $.each(json.forms.graduateForms, function(i,item){
        $("#formTab").append("<h3>" + item.formName + "</h3>");
        
        var theDiv = "<div>";
        
        theDiv += "<h3>" + item.formName + "</h3>";
        theDiv += "<a href=" + item.href + ">" + item.href + "</a>";
        
        theDiv +="</div>";
        
        $("#formTab").append(theDiv);

    })
            $("#formTab").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
    });
//    console.log(json.forms.undergraduateForms);
    
    $.each(json.forms.undergraduateForms, function(i,item){
        $("#UformTab").append("<h3>" + item.formName + "</h3>");
        
        var theDiv = "<div>";
        
        theDiv += "<h3>" + item.formName + "</h3>";
        theDiv += "<a href=" + item.href + ">" + item.href + "</a>";
        
        theDiv +="</div>";
        
        $("#UformTab").append(theDiv);

    })
    
            $("#UformTab").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
    });
    
    
});

// this deals with research by faculty and interest
getData({path:'/research'}).done(function(json){
    
    let interest = json.byInterestArea;
    let faculty = json.byFaculty;
    
    let unordList = "<ul>";
    
    
    unordList = unordList + "<li><a href=#div0>" + interest[0].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div1>" + interest[1].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div2>" + interest[2].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div3>" + interest[3].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div4>" + interest[4].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div5>" + interest[5].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div6>" + interest[6].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div7>" + interest[7].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div8>" + interest[8].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div9>" + interest[9].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div10>" + interest[10].areaName + "</a></li>"
    unordList = unordList + "<li><a href=#div11>" + interest[11].areaName + "</a></li>"

    unordList = unordList + "</ul>"
    $( "#interest" ).append(unordList);
    
    
    let citations = '';
    
    citations = citations + "<div id='div0'>" + interest[0].areaName + "<br>" +
                                            interest[0].citations + "</div>";
    citations = citations + "<div id='div1'>" + interest[1].areaName + "<br>" +
                                            interest[1].citations + "</div>";
    citations = citations + "<div id='div2'>" + interest[2].areaName + "<br>" +
                                            interest[2].citations + "</div>";
    citations = citations + "<div id='div3'>" + interest[3].areaName + "<br>" +
                                            interest[3].citations + "</div>";
    citations = citations + "<div id='div4'>" + interest[4].areaName + "<br>" +
                                            interest[4].citations + "</div>";
    citations = citations + "<div id='div5'>" + interest[5].areaName + "<br>" +
                                            interest[5].citations + "</div>";
    citations = citations + "<div id='div6'>" + interest[6].areaName + "<br>" +
                                            interest[6].citations + "</div>";
    citations = citations + "<div id='div7'>" + interest[7].areaName + "<br>" +
                                            interest[7].citations + "</div>";
    citations = citations + "<div id='div8'>" + interest[8].areaName + "<br>" +
                                            interest[8].citations + "</div>";
    citations = citations + "<div id='div9'>" + interest[9].areaName + "<br>" +
                                            interest[9].citations + "</div>";
    citations = citations + "<div id='div10'>" + interest[10].areaName + "<br>" +
                                            interest[10].citations + "</div>";
    citations = citations + "<div id='div11'>" + interest[11].areaName + "<br>" +
                                            interest[11].citations + "</div>";
    
            $( "#interest" ).append(citations);
            $( "#interest" ).tabs();
    
    
    var currentRow = 0;
    var nextElement;

    tableElement = $("<table>", {
        "id": "FacTable",
        "style": "width:100%"
    });
    $("#faculty").append(tableElement);

    $.each(faculty, function (i, item) {
        if (i == 0) {
            nextElement = $("<tr>", {
                "id": "facTr" + currentRow
            });
            $("#FacTable").append(nextElement);
        }
        nextElement = $("<td>");
        nextElement.text(item.facultyName);
        nextElement.click(function () {
            getResource(faculty, item.facultyName);
        });
        $("#facTr" + currentRow).append(nextElement);
        if ((i + 1) % 10 === 0) {
            nextElement = $("</tr>");
            $(FacTable).append(nextElement);
            currentRow++;
            nextElement = $("<tr>", {
                "id": "facTr" + currentRow
            });
            $(FacTable).append(nextElement);
        }
    });


});

function getResource(faculty, name) {
    for (const i in faculty) {
        if (faculty[i].facultyName == name) {
            var div = "<div><ul>";

            div += "<p><font color='#18ADEA'><b><u>Name:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>" + faculty[i].facultyName + "</b></<p>"
            div += "<p><font color='#18ADEA'><b><u>Citations:</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>" + faculty[i].citations + "</b></<p>"

            div += "</ul></div>";
            
            $("#dialog").html(div);
            $("#dialog").dialog("option", "title", name);
            $("#dialog").dialog("open")
            break;

        }
    }
}

// for the footer
getData({path:'/footer'}).done(function(json){
        const social = json.social;
		const links = json.quickLinks;
		const copy = json.copyright;
    
        //add social links to footer
		$("footer > ul").append(`
			<li>
			  <a href="#social_modal" rel="modal:open">Social</a>
			  <div id="social_modal" class="modal">
			  	<h3>
			  	   <span>${social.title}</span>
			  	   ${social.tweet} - ${social.by}
			  	 </h3>
			  	 <a href="${social.twitter}" target="_blank">${social.twitter}</p>
			  	 <br />
			  	 <a href="${social.facebook}" target="_blank">${social.facebook}</a>
			  </div>
			  </li>
		`);

		$.each(links, function(i, link){
			$("#footer > ul").append(`
				<li>
				   <a href="${link.href}" target="_blank">${link.title}</a>
				</li>
			`);
		});

		//add copyright to footer
		$("#footer").append(`${copy.html}`);

		//add contact form to footer
		$("#footer > ul").append(`
			<li>
			  <a href="#contact_modal" rel="modal:open">
			    Contact
			   </a>
			   <div id="contact_modal" class="modal">
			     <h3>
			        <span>Contact Us!</span>
			     </h3>
			     <iframe frameborder="0" scrolling="no" style="overflow:hidden; height:60rem; width: 80rem; backround-color:#fff" src="api/contactForm.php" align="center"></iframe>
			     </div>
			     </li>
		`);
});

