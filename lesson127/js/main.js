(function () {

    // burger-menu 
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-menu')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--openned-menu')) {
            document.body.classList.add('body--openned-menu')
        } else {
            document.body.classList.remove('body--openned-menu')
        }
    }

    // modal pop-up

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('#modal-call')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--modal-openned')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--modal-openned')
        }
    }

    // tabs

    const tabSelector = document.querySelector('.tab-controls')

    tabSelector.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return

        e.preventDefault()

        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-content--show')
        const activeContent = document.querySelector('.tab-controls__link--active')

        if (activeControl) {
            activeControl.classList.remove('tab-content--show')
        }

        if (activeContent) {
            activeContent.classList.remove('tab-controls__link--active')
        }

        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')

    }

    // accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget;
            const accordionOpennedItem = accordionList.querySelector('.accordion-list__item--openned');
            const accordionOpennedContent = accordionList.querySelector('.accordion-list__item--openned .accordion-list__control')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpennedItem && accordionItem != accordionOpennedItem) {
                accordionOpennedItem.classList.remove('accordion-list__item--openned');
                accordionOpennedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--openned');

            if (accordionItem.classList.contains('accordion-list__item--openned')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })

    // slider in gallery

    new Swiper('.gallery__slider', {
        slidesPerView: 1,
        spaceBetween: 8,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            401: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            601: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    // slider for opinions

    new Swiper('.opinion__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        navigation: {
            nextEl: '.opinion__next',
            prevEl: '.opinion__prev',
        },
        scrollbar: {
            el: '.opinion__scrollbar',
            draggable: true,
        },
        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
}
)()