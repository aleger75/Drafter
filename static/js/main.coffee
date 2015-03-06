'use strict'

$(document).ready ->

    handleActive = (tag) ->
        $('.active').removeClass('active')
        tag.addClass('active')
        return

    $(window).hashchange ->
        hash = window.location.hash

        hash = hash.substring(2, hash.length - 1)
        hash = if hash != '/' then hash else 'home'
        handleActive $('#' + hash)
        return

    $(window).hashchange()

    return
