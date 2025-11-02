(function() {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-menu')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--openned-menu')) {
            document.body.classList.add('body--openned-menu')
        } else {
            document.body.classList.remove('body--openned-menu')
        }
    }
}
)()