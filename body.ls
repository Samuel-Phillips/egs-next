const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39

sitecfg = site_conf[window.location.hostname];

# wait for the DOM to load
$ !->
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

    console.log "Webcomic Keyboard Shortcuts enabled; " +
        "this site hosts #{sitecfg.name}"

    unless next?
        console.log "Will not be able to move forward on this page"
    unless prev?
        console.log "Will not be able to move backwards on this page"
