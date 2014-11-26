var templateLoader = (function($,host){
    return{
        loadExtTemplateWithData: function(path, tag, data){
            var tmplLoaderWithData = $.get(path)
                .success(function(result){
                    var tmpl = $(result).html();
                    var templateContent = kendo.template(tmpl);
                    var finalResult = templateContent(data);
                    var tagdiv = "#" + tag;
                    $(tagdiv).empty();
                    $(tagdiv).append(finalResult);
                })
                .error(function(result){
                    alert("Error Loading Templates -- TODO: Better Error Handling");
                })

            tmplLoader.complete(function(){
                $(host).trigger("TEMPLATE_LOADED", [path]);
            });
        },        
        loadExtTemplate: function(path, tag){
            var tmplLoader = $.get(path)
                .success(function(result){
                    var tmpl = $(result).html();
                    var tagdiv = "#" + tag;
                    $(tagdiv).empty();
                    $(tagdiv).append(tmpl);
                })
                .error(function(result){
                    alert("Error Loading Templates -- TODO: Better Error Handling");
                })

            tmplLoader.complete(function(){
                $(host).trigger("TEMPLATE_LOADED", [path]);
            });
        }
       
    };
})(jQuery, document);
