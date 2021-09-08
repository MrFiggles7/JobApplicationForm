$(document).ready(
    function () {
        //event handlers
        $('#myTab a').on('click', function (event) {
            event.preventDefault();
            $(this).tab('show');
        });

        //$('#disclaimer').hide();
        $('#myTab').hide();
        $('#myTabContent').hide();
        //other functions

        $('#personalInfo button').on('click', function (event) {
            event.preventDefault();
            $('#positions-tab').tab('show');
        });
        $('#positionsApplied button').on('click', function (event) {
            event.preventDefault();
            $('#workExperience-tab').tab('show');
        });
        $('#workExperience button').on('click', function (event) {
            event.preventDefault();
            $('#education-tab').tab('show');
        });
        $('#education button').on('click', function (event) {
            event.preventDefault();
            $('#workEligibility-tab').tab('show');
        });
        $('#workEligibility button').on('click', function (event) {
            event.preventDefault();
            $('#generalInformation').tab('show');
        });
    }
);


$('.disclaimer-next--button').on('click', function f() {
    $('#disclaimer').hide();
    $('#myTabContent').show();
    $('#myTab').show();
});
