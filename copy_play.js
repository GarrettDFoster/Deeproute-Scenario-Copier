$(document).ready(function () {
    //modify existing button
    var current_button = $('input[value="Copy From"]').eq(0);
    current_button.val('Copy All');

    //add new button
    current_button.before('<input type="button" value="Copy Plays">');

    //attach function to copy plays
    current_button.prev().click(copyPlays)
});

//function to copy plays
function copyPlays() {

    var theForm = document.forms["changeinfo"]
    box = theForm.elements['scenecopy'];

    cce = parseInt(parseFloat(box.options[box.selectedIndex].value));
    ccesave = cce;
    boxa = theForm.elements['sceneon'];
    ccea = parseInt(parseFloat(boxa.options[boxa.selectedIndex].value));

    //theForm.elements['Scene' + ccea].value = theForm.elements['Scene' + cce].value;
    theForm.elements['SceneO' + ccea].value = theForm.elements['SceneO' + cce].value;
    ChangeScene();
    //cce = ccesave;

    //theForm.sceneon.options[ccea - 1].text = theForm.elements['scenarioname'].value;
    //theForm.scenecopy.options[ccea - 1].text = theForm.elements['scenarioname'].value;

}