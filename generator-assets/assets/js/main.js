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
            local: [{"name":"assetmanager","value":"lib/assetmanager","tokens":["assetmanager","assetmanager"]},{"name":"asyncqueue","value":"lib/asyncqueue","tokens":["asyncqueue","asyncqueue"]},{"name":"componentmanager","value":"lib/componentmanager","tokens":["componentmanager","componentmanager"]},{"name":"bounds","value":"lib/dom/bounds","tokens":["bounds","bounds"]},{"name":"layer","value":"lib/dom/layer","tokens":["layer","layer"]},{"name":"layereffects","value":"lib/dom/layereffects","tokens":["layereffects","layereffects"]},{"name":"mask","value":"lib/dom/mask","tokens":["mask","mask"]},{"name":"path","value":"lib/dom/path","tokens":["path","path"]},{"name":"errormanager","value":"lib/errormanager","tokens":["errormanager","errormanager"]},{"name":"filemanager","value":"lib/filemanager","tokens":["filemanager","filemanager"]},{"name":"headlights","value":"lib/headlights","tokens":["headlights","headlights"]},{"name":"parsermanager","value":"lib/parsermanager","tokens":["parsermanager","parsermanager"]},{"name":"renderer","value":"lib/renderer","tokens":["renderer","renderer"]},{"name":"rendermanager","value":"lib/rendermanager","tokens":["rendermanager","rendermanager"]},{"name":"statemanager","value":"lib/statemanager","tokens":["statemanager","statemanager"]},{"name":"main","value":"main","tokens":["main","main"]}]
        }
    ]).on("typeahead:selected", function(evt){
        window.location.href = window.moduleLevel + "/modules/" + evt.currentTarget.value + ".html";
    });
});