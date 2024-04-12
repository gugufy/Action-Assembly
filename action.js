

    if ( !chrome.ActionAssembly )
    {
        chrome.ActionAssembly = (class ActionAssembly
        {
            static record ( target )
            {
                ActionAssembly.memory[ ActionAssembly.family ].push( target );
            }


            static status = "idle";
            static family = "unnamed";

            static memory = // object
            {
                unnamed: [], // fresh record
            }
        });
    };




    globalThis.$Aa = chrome.ActionAssembly; // short ref




    window.addEventListener( "keyup", function record ( event )
    {
        if ( ($Aa.status==="idle") && event.ctrlKey && event.metaKey && (event.key==="a") )
        {
            $Aa.status = "busy";
            console.log( "Action-Assembly :: recording started" );
            return; // not interested
        };


        if ( ($Aa.status==="busy") && (event.code==="Escape") )
        {
            $Aa.status = "idle";
            console.log( "Action-Assembly :: recording ended" );
            console.log( $Aa.memory );
        };
    });




    window.addEventListener("click", function record (event)
    {
        if ( $Aa.status === "busy" )
        { $Aa.record( event.target ) };
    });
