// HTML - Counter and progress bar

let codeToDisplay = "";

let htmlpercent = 0;
let shtml = "";
let forDisplayHtml = "";
let sHtmlCodeWithoutTags = "";
let sHtmlCode = "";
let tags = /<[a-z0-9]+>|<\/[a-z0-9]+>/gi;

document.getElementById('htmlTextarea').addEventListener('keyup', function() {

    sHtmlCode = document.getElementById("htmlTextarea").value;

    sHtmlCodeWithoutTags = sHtmlCode.replace(tags, "");

    let htmlLength = document.getElementById("htmlCharNbr").value;

    document.getElementById('compteurhtml').innerHTML = sHtmlCodeWithoutTags.length;

    htmlpercent = (sHtmlCodeWithoutTags.length)/(htmlLength/100);

   if (htmlpercent >= 0 && htmlpercent <= 50)
        {
            shtml = '<div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width:' + htmlpercent + '%" aria-valuenow="'+ htmlpercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
        }   
            else
                if (htmlpercent > 50 && htmlpercent <= 80)
                    {
                        shtml = '<div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style="width:' + htmlpercent + '%" aria-valuenow="'+ htmlpercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                    }   
                        else
                            if (htmlpercent > 80)
                                {
                                    shtml = '<div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style="width:' + htmlpercent + '%" aria-valuenow="'+ htmlpercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                                }
    
    document.getElementById('progress_bar_html').innerHTML = shtml;
    
    forDisplayHtml = document.getElementById("htmlTextarea").value;
});

// CSS - Counter and progress bar

let csspercent = 0;
let scss = "";
let forDisplayCss = "";

document.getElementById('cssTextarea').addEventListener('keyup', function() {

    let cssLength = document.getElementById("cssCharNbr").value;

    document.getElementById('compteurcss').innerHTML = cssTextarea.value.length;

    csspercent = (cssTextarea.value.length)/(cssLength/100);

    if (csspercent >= 0 && csspercent <= 50)
            {
                scss = '<div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width:' + csspercent + '%" aria-valuenow="'+ csspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
            }   
                else
                    if (csspercent > 50 && csspercent <= 80)
                        {
                            scss = '<div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style="width:' + csspercent + '%" aria-valuenow="'+ csspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                        }   
                            else
                                if (csspercent > 80)
                                    {
                                        scss = '<div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style="width:' + csspercent + '%" aria-valuenow="'+ csspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                                    }
    
    document.getElementById('progress_bar_css').innerHTML = scss;
    forDisplayCss = document.getElementById("cssTextarea").value;


});

// JS - Counter and progress bar

let jspercent = 0;
let sjs = "";
let forDisplayJs =";"


document.getElementById('jsTextarea').addEventListener('keyup', function() {

    let jsLength = document.getElementById("jsCharNbr").value;

    document.getElementById('compteurjs').innerHTML = jsTextarea.value.length;

    jspercent = (jsTextarea.value.length)/(jsLength/100);

    if (jspercent >= 0 && jspercent <= 50)
    {
        sjs = '<div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width:' + jspercent + '%" aria-valuenow="'+ jspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
    }   
        else
            if (jspercent > 50 && jspercent <= 80)
                {
                    sjs = '<div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style="width:' + jspercent + '%" aria-valuenow="'+ jspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                }   
                    else
                        if (jspercent > 80)
                            {
                                sjs = '<div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style="width:' + jspercent + '%" aria-valuenow="'+ jspercent +'" aria-valuemin="0" aria-valuemax="100"></div>';
                            }

document.getElementById('progress_bar_js').innerHTML = sjs;
forDisplayJs = document.getElementById("jsTextarea").value;




});

// HTML tag add

function addTagDiv (){

    let inputHtml = document.getElementById('htmlTextarea').value;
    inputHtml += "<div></div>";
    document.getElementById('htmlTextarea').value = inputHtml; 


}

function addTagP (){

    let inputHtml = document.getElementById('htmlTextarea').value;
    inputHtml += "<p></p>";
    document.getElementById('htmlTextarea').value = inputHtml; 


}

function addTagH1 (){

    let inputHtml = document.getElementById('htmlTextarea').value;
    inputHtml += "<h1></h1>";
    document.getElementById('htmlTextarea').value = inputHtml; 


}

function addTagH2 (){

    let inputHtml = document.getElementById('htmlTextarea').value;
    inputHtml += "<h2></h2>";
    document.getElementById('htmlTextarea').value = inputHtml; 


}

function addTagA (){

    let inputHtml = document.getElementById('htmlTextarea').value;
    inputHtml += '<a href=""></a>';
    document.getElementById('htmlTextarea').value = inputHtml; 

}

// CSS insert color

let inputColor;
let defaultColor = "#0000ff";


window.addEventListener("load", startup, false);

function startup() {
    inputColor = document.querySelector("#inputColor");
    inputColor.value = defaultColor;
    inputColor.addEventListener("change", insetCssColor, false);
    inputColor.select();
  }
  
  function insetCssColor(event) {
    let cssInputColor = document.getElementById('cssTextarea').value;
    cssInputColor += event.target.value;
    document.getElementById('cssTextarea').value = cssInputColor;
    };
  
  




// Create HTML with Style and Script

window.addEventListener('keyup', function codeCreation(){

    codeToDisplay = "<div>" + forDisplayHtml + "<script>" + forDisplayJs + "</script> </div>";

    document.getElementById('cssInsertion').innerHTML = forDisplayCss;

    document.getElementById('preview').innerHTML = codeToDisplay;


});





