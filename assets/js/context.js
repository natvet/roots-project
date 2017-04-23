$(document).ready(function(){
    let templateScript = $("#index-template").html(),
        template = Handlebars.compile(theTemplateScript),
        context={

        },
        compiledHtml = theTemplate(context);
    $('body').append(compiledHtml);
});

