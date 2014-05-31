$(function () {
    $(".show-code").click(function () {
        var block = $(this).parent().find('pre[class*="language-"]');
        block.toggle();
        if (block.is(":visible")) {
            $(this).html("Hide code");
        } else {
            $(this).html("Show code");
        }
    });
    $("#toggle-other-modules").click(function(){
        var block = $("#other-module");
        block.toggle();
        $(this).find("i").removeClass();
        if (block.is(":visible")) {
            $(this).find("i").addClass("icon-folder-open");
        } else {
            $(this).find("i").addClass("icon-folder-close");
        }
    });
    $("input.toggle-public").click(function(){
        var section = $(this).parents("section:eq(0)");
        if($(this).is(":checked")){
            section.addClass("show-private");
        }else{
            section.removeClass("show-private");
        }
    });

    $(".toggle-package").click(function() {
        var package = $(this).data().package,
            $modules = $("#" + package);
        
        $modules.toggle();
        $(this).find("i").removeClass();
        if ($modules.is(":visible")) {
            $(this).find("i").addClass("icon-folder-open");
        } else {
            $(this).find("i").addClass("icon-folder-close");
        }
    });
    
    // Typeahead initialization
    $("input.typeahead").typeahead([
        {
            name: "modules",
            local: [{"name":"app","value":"app","tokens":["app","app"]},{"name":"config","value":"lib/config","tokens":["config","config"]},{"name":"convert","value":"lib/convert","tokens":["convert","convert"]},{"name":"generator","value":"lib/generator","tokens":["generator","generator"]},{"name":"logging","value":"lib/logging","tokens":["logging","logging"]},{"name":"photoshop","value":"lib/photoshop","tokens":["photoshop","photoshop"]},{"name":"png2base64","value":"lib/png2base64","tokens":["png2base64","png2base64"]},{"name":"ps_crypto","value":"lib/ps_crypto","tokens":["ps_crypto","ps_crypto"]},{"name":"stdlog","value":"lib/stdlog","tokens":["stdlog","stdlog"]},{"name":"utils","value":"lib/utils","tokens":["utils","utils"]},{"name":"xpm","value":"lib/xpm","tokens":["xpm","xpm"]}]
        }
    ]).on("typeahead:selected", function(evt){
        window.location.href = window.moduleLevel + "/modules/" + evt.currentTarget.value + ".html";
    });
});