/**
 * Created by Mark Onofrio.
 *
 */
console.log('Version: 0.0.9:  Added in CSS Styles to the Body and removes MS Doc styles and meta data');
$(document).ready(function() {
    /* Other Function */
    $("#year").text((new Date).getFullYear()); //Add current year to footer

    //Convio Unsubscribe

    var unsubscribe = '<convio:choose><convio:when title="Not empty" test="nempty" selected="selected"><convio:op><convio:session name="1" param="primary_email"></convio:session></convio:op><convio:then><strong><convio:session name="1" param="primary_email"></convio:session></strong></convio:then></convio:when><convio:otherwise title="Empty"><strong>&nbsp;</strong></convio:otherwise></convio:choose>';
    $("#unsubscribe").append(unsubscribe);


    /* This will add in the body section.  It first is taken from hidden div to then import into the body.
     * It will remove the old code if the button is clicked on and then add in the new updated formated text  */
    cleanHTML = function (input) {
        // 1. remove line breaks / Mso classes
        var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
        var output = input.replace(stringStripper, '');
        // 2. strip Word generated HTML comments
        var commentSripper = new RegExp('<!--(.*?)-->', 'g');
        var output = output.replace(commentSripper, '');
        var tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
        // 3. remove tags leave content if any
        output = output.replace(tagStripper, '');
        // 4. Remove everything in between and including tags '<style(.)style(.)>'
        var badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];

        for (var i = 0; i < badTags.length; i++) {
            tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>', 'gi');
            output = output.replace(tagStripper, '');
        }
        // 5. remove attributes ' style="..."'
        var badAttributes = ['style', 'start'];
        for (var i = 0; i < badAttributes.length; i++) {
            var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
            output = output.replace(attributeStripper, '');
        }
        return output;
    };
    addGreeting = function () {
        var greetSection = '<p id="greetings">Dear <convio:choose> <convio:when title="Not empty" test="nempty" selected="selected"> <convio:op> <convio:session name="1" param="first_name"> </convio:session> </convio:op> <convio:then><convio:session name="1" param="first_name"></convio:session></convio:then></convio:when><convio:otherwise title="Empty">Friend</convio:otherwise></convio:choose>,</p>';

        var greetCheckbox =  $('#greetCheckbox');
        var greetBody = $('#greetBody');

        console.log($(greetCheckbox).is(':checked'));

        if ( $(greetCheckbox).is(':checked') ) {
            console.log('Greet Checkbox True');
            $(greetBody).contents().remove();
            $(greetBody).append(greetSection);

        } else {
            console.log('Greet Checkbox False');
            $(greetBody).contents().remove();
        }

    };

    var imageCreditStyle = {
        "font-family": "'Century Gothic', Calibri, Arial",
        "width": "100%",
        "max-width": "225px",
        "color": "#505050",
        "font-size": "0.75em",
        "text-decoration": "none",
        "text-align": "left",
        "display": "inline-block",
        "margin": "0 0 5px 0",
        "padding": "0",
        "line-height": "120%"};

    addBodyImage = function () {
        var img_1_cb = $('#imageOneCheckbox');
        $('#imageOneBody').hide();
        $('#templateSidebar').find('p').css(imageCreditStyle);
        var showImage = function(){
            if ($(img_1_cb).is(':checked')) {
                $('#ImageOne').show();
                $('#imageOneBody').show();
                $('#templateSidebar').show();
            }
            else {
                $('#ImageOne').hide();
                $('#imageOneBody').hide();
                $('#templateSidebar').hide();
            }
        };
        showImage();
        $(img_1_cb).on('click', function () {
            showImage();
        });
    };
    addBodyImage();
//            addBodyImage2 = function () {
//                var img_1_cb = $('#imageTwoCheckbox');
//
//                $('#imageTwoBody').hide();
//                $('#templateSidebar2').find('p').css(imageCreditStyle);
//
//                var showImage = function(){
//                    if ($(img_1_cb).is(':checked')) {
//                        $('#ImageTwo').show();
//                        $('#imageTwoBody').show();
//                        $('#templateSidebar2').show();
//                    }
//                    else {
//                        $('#ImageTwo').hide();
//                        $('#imageTwoBody').hide();
//                        $('#templateSidebar2').hide();
//                    }
//                };
//
//                showImage();
//
//                $(img_1_cb).on('click', function () {
//                    showImage();
//                });
//            };
//
//            addBodyImage2();

    /* On Click of Add+ Button */
    $('#ADD').on('click', function () {
        $("#ADD").text('Update +').removeClass().addClass('btn btn-danger');

        var bodyOut = $('#bodyOut');
        var bodyIn = $('#bodyIn');
        var outPutHTML = $(bodyIn).text();
        var CleanOutPut = cleanHTML(outPutHTML);
        var BodyStyle = {
            "font-size": "18px",
            "font-family": "Georgia,Calibri,Arial,Helvetica,sans-serif",
            "line-height": "125%",
            "color": "#505050"
        };

        $(bodyOut).contents().remove();
        $(bodyOut).append(CleanOutPut).find('p').css(BodyStyle);
        $(bodyOut).css(BodyStyle);

        addGreeting();
        $('#greetings').css({
            'font-family': 'Georgia,Calibri,Arial,Helvetica,sans-serif',
            'font-size': '18px',
            '-ms-text-size-adjust': '100%',
            '-webkit-text-size-adjust': '100%',
            'color': '#505050',
            'line-height': '24px',
            'font-weight': 'bold',
            'margin-top': '5px',
            'padding-top': '5px',
            'text-align': 'left'
        });

    });
    $('#ADD2').on('click', function () {
        $("#ADD2").text('Update +').removeClass().addClass('btn btn-danger');

        var bodyOut = $('#bodyOut2');
        var bodyIn = $('#bodyIn2');
        var outPutHTML = $(bodyIn).text();
        var CleanOutPut = cleanHTML(outPutHTML);
        var BodyStyle = {
            "font-size": "18px",
            "font-family": "Georgia,Calibri,Arial,Helvetica,sans-serif;",
            "line-height": "125%",
            "color": "#464646"
        };

        $(bodyOut).contents().remove();
        $(bodyOut).append(CleanOutPut).find('p').css(BodyStyle);
        $(bodyOut).css(BodyStyle);

    });

    /* converts the live preview of the email in to code below to add into Email Sender/Convio */
    $('#convert').on('click', function(){
        var htmlString = $("#emailPreview").html();
        $('#email2').text( htmlString);

    });

});

/* Angular */
var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module']);
app.controller('MyCtrl', function($scope) {
    $scope.imageOne = 'http://support.adl.org/images/content/pagebuilder/jonathan-greenblatt-official-300.jpg';
    $scope.imageOneAlt = 'Jonathan Greenblatt';
    $scope.photo_credit_1 = "Jonathan Greenblatt";
    $scope.photo_credit_2 = "ADL National Director";
    $scope.Signature = "Until next time,"

    //DEV - FOR TESTING --
    $scope.preMobile = "TESTING PRE MOBILE HEADER TEXT";
    $scope.PS = "P.S. - Lets Change the world to make a better world tomorrow!"

    $scope.disabled = false;
    $scope.menu = [
        //['bold', 'italic', 'underline'],
        //['format-block'],
        ['remove-format'],
        ['link' /*'image'*/]
        //['ordered-list', 'unordered-list', 'outdent', 'indent'],
        //['left-justify', 'center-justify', 'right-justify'],
        //['css-class'],
        //['font']
    ];

    $scope.setDisabled = function() {
        $scope.disabled = !$scope.disabled;
    }
});
/* Bootstrap */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Selects html text in modal window to copy over to email sender
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