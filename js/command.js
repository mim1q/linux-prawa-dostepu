const change_part = n => {
    $('.code-part').removeClass('checked');
    $('.part-description').removeClass('shown');
    $('.code-part:nth-of-type('+n+')').addClass('checked');
    $('.part-description:nth-of-type('+n+')').addClass('shown');
}

$(document).ready(() => {
    $('.code-part').click(e => { e.preventDefault() })
})

