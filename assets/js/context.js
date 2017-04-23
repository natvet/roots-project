$(document).ready(function(){
    let templateScript = $("#index-template").html(),
        template = Handlebars.compile(templateScript),
        context={

        },
        compiledHtml = template(context);
    $('body').append(compiledHtml);
});

