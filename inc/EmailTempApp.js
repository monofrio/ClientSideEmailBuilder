bower/*
 Name:  New York Regional Email Generator
 Author: Mark Onofrio
 Website: markonofrio.com
 Version: 0.0.1

  AngularJS v1.3.15
  Wysiwyg: https://github.com/TerryMooreII/angular-wysiwyg
  Bootstrap: 3.3.5

 */

//Allows to update the Image path easily if need be
var image_path  = function(name){
    // return "../images/header-final-NYRO-marketing-email-" + name + "-with-bg.gif";
    return "https://secure2.convio.net/adl/images/content/pagebuilder/header-final-NYRO-marketing-email-" + name.toLowerCase() + "-with-bg.gif";
};

var app = angular.module("EmailTempApp", ['colorpicker.module', 'wysiwyg.module']);

app.controller("AppCntrl", ['$scope', '$filter', function ($scope, $filter){
    $scope.radioValue = "radioValue";

    $scope.date = new Date();
    $scope.subject = $filter('date')(new Date(), 'MMMM, y');
    $scope.radioValue='../images/header-final-NYRO-marketing-email-engages-with-bg.gif';// Adds in starting Banner
    $scope.actionImage = 'https://secure2.convio.net/adl/images/content/pagebuilder/email-place-holder-image-20029754.jpg';// Adds in placeholder Image

    //$http.get('NewYorkRegion.js').success(function(data) {
    //    $scope.radioData = data;
    //});

    $scope.radioData = [
        {
            name: 'Advocates',
            imageURL: image_path('advocates')
        },
        {
            name: 'Builds',
            imageURL: image_path('builds')
        },
        {
            name: 'Educates',
            imageURL: image_path('educates')
        },
        {
            name: "Empowers",
            imageURL: image_path('empowers')
        },
        {
            name: "Engages",
            imageURL: image_path('engages')
        },
        {
            name: 'Leads',
            imageURL: image_path('leads')
        },
        {
            name: 'Responds',
            imageURL: image_path('responds')
        },
        {
            name: 'Trains',
            imageURL: image_path('trains')
        },
        {
            name: 'Unites',
            imageURL: image_path('unites')
        }
    ];
    $scope.Region = {
        regionName: 'New York',
        newsletter: '',
        preHeader: '',
        donate_url: 'http://newyork.adl.org/donate',
        //Social Media Links
        facebook: 'https://www.facebook.com/ADL.NY',
        twitter: 'https://www.twitter.com/ADL_NY',
        pinterest: 'http://pinterest.com/adlnational/adl-new-york/',
        google: 'http://plus.google.com/+Anti-Defamation-League',
        youtube: 'http://www.youtube.com/ADLNewYork',
        linkedin: 'http://www.linkedin.com/company/anti-defamation-league/',
        tumblr: 'http://youradl.tumblr.com'
    };
    $scope.$apply(function(){
        wysiwig();
    });

}]);

function wysiwig(){

        /* wysiwyg */
        $scope.data = { text: "" };
        $scope.menu = [
            ['bold', 'italic'],
            ['font-size'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['link']
        ];
}

//angular.bootstrap(document, ['app']);
function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}


/* This will add in the body section.  It first is taken from hidden div to then import into the body.
 * It will remove the old code if the button is clicked on and then add in the new updated formated text  */
$('#ADD').on('click', function(){
    console.log('ADD');
    var somestuff = $('#bodyIn').text();
    $('#bodyOut').contents().remove();
    $('#bodyOut').append(somestuff);
});

/* converts the live preview of the email in to code below to add into Email Sender/Convio */
$('#convert').on('click', function(){
    var htmlString = $("#emailPreview").html();
    $('#email2').text( htmlString);
    
});

/* Deletes image section and input fields since they are not needed */
$('#DELETE').on('click', function(){
    if (confirm('Are you sure you want to remove the image?')) {
        // Save it!
        $('#DELETE').css('display', 'none');
        $('#actionImage2, #actionImage, #imageCredit, #imageCopy').remove();
        //$('#ADDimage').css('display', 'block');

    } else {
        // Do nothing!
    }
});

$(document).ready(function(){
    $()
});



/* Will add back in the image section
 * * (need to figure out how to allow Agnular injection of fields after deleted and brought back)
 */
//$('#ADDimage').on('click', function(){
//    $('#ADDimage').css('display', 'none');
//    $('#DELETE').css('display', 'block');
//
//    $("#emailBody").append('<table id="actionImage2" style="border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0" align="right"><tr><td style="border-collapse: collapse; padding-left: 10px;" valign="top" > <table style="border-collapse: collapse; background-color: #D8D8D8; padding:5px;" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="border-collapse: collapse;" valign="top"> <table style="border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="border-collapse: collapse; padding:8px;" valign="top" > <table style="border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="border-collapse: collapse; padding-bottom:2px;" valign="top" > <img src="{{actionImage}}" alt="" width="300" /> </td> </tr> <tr> <td style="border-collapse: collapse;" valign="top" > <p style="font-family: Calibri,Arial,Helvetica,sans-serif; text-decoration: none; text-align: left; font-size: 11px; color: #606060; font-weight: bold; display: block;">{{imageCredit}}</p> <p style="font-family: Calibri,Arial,Helvetica,sans-serif; text-decoration: none; text-align: left; font-size: 11px; color: #606060; font-weight: bold; display: block;">{{imageCopy}}</p> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table></td></tr></table>');
//});

/* This will inject greetings in the body intro */
//$('#ADDgreeting').on('click', function(){
//    var greetings = '<p style="font-family: Calibri,Arial,Helvetica,sans-serif; text-decoration: none; text-align: left; font-size: 20px; color: #505050;">Dear&nbsp;<convio:choose><convio:when title="Not empty" test="nempty" selected="selected"><convio:op><convio:session name="1" param="first_name"></convio:session></convio:op><convio:then><convio:session name="1" param="first_name"></convio:session></convio:then></convio:when><convio:otherwise title="Empty">Friend</convio:otherwise></convio:choose>,</p>';
//
//});




