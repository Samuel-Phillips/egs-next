const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39

dcfg = site_conf[window.location.hostname];

msg = (msg) -> console.log "WKS #{msg}"

function load-as sitecfg
    # find the links
    next = document.query-selector sitecfg.next
    prev = document.query-selector sitecfg.prev

    # sometimes the links are found by selecting children, then going up a level
    # to the parent
    for _ til sitecfg.parenting[0]
        next = next.parent-element

    for _ til sitecfg.parenting[1]
        prev = prev.parent-element

    # add the event listeners
    $(window).keydown (e) !->

        if prev? and e.key-code == KEY_CODE_LEFT
            e.prevent-default!
            location.href = prev.href

        else if next? and e.key-code == KEY_CODE_RIGHT
            console.log "moving fwd"
            e.prevent-default!
            location.href = next.href

    msg "enabled; " + "this site hosts #{sitecfg.name}"

    unless next?
        msg "Will not be able to move forward on this page"
    unless prev?
        msg "Will not be able to move backwards on this page"

# wait for the DOM to load
$ !->
    loaded = false
    # find which one it is
    for sitecfg in dcfg
        if sitecfg.path and location.pathname.starts-with(sitecfg.path)
            load-as sitecfg
            loaded = true
            break
    if not loaded
        for sitecfg in dcfg
            if not sitecfg.path
                load-as sitecfg
                loaded = true
                break
    if not loaded
        msg "Could not find site"
