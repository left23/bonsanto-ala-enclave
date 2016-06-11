

jQuery( document ).ready(function() {
    getData();
    getData2();
});


function getData() {
    jQuery.getJSON("example.json", function(messagesObj) {
        messageToPrint = messagesObj.messages[0].message1;
        console.log(messageToPrint);
    });
}

function uiOverlay() {
    console.log("uiOverlay");
    jQuery("#ui-overlay").html("<div class='message'>" +messageToPrint+ "</div>");
}

function getData2() {
    jQuery.getJSON("exampleObj.json", function(messagesObj2) {
        messageToPrint2 = messagesObj2.messages[0];
        console.log(messageToPrint2);
    });
}

function uiOverlay2() {
    console.log("uiOverlay2");
    jQuery("#ui-overlay").html("<div class='message'>" +messageToPrint2+ "</div>");
}

function removeOverlay() {
    jQuery("#startScreen").hide();
}