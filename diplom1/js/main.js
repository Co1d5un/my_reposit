(function () {
    new Granim({
        element: '#canvas-basic',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#022335', '#043A41']
                ],
                transitionSpeed: 500,
                loop: true,
            }
        },
        options: {
            fullsize: true,
        }
    });

    const checkbox = document.getElementById('main__switcher');

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                setTimeout(() => {
                    const currentScrollPos = window.scrollY;
                    const viewportHeight = window.innerHeight;

                    const sections = Array.from(document.querySelectorAll('section'))
                        .map(section => ({
                            element: section,
                            top: section.offsetTop,
                            bottom: section.offsetTop + section.offsetHeight
                        }))
                        .sort((a, b) => a.top - b.top);

                    let nextSection = null;

                    for (let section of sections) {
                        if (section.bottom > currentScrollPos + viewportHeight + 10) {
                            nextSection = section.element;
                            break;
                        }
                    }

                    // Если не нашли следующую секцию (достигли конца) - скроллим к первой
                    if (!nextSection && sections.length > 0) {
                        nextSection = sections[0].element;
                    }

                    if (nextSection) {
                        const headerHeight = 0;
                        window.scrollTo({
                            top: nextSection.offsetTop - headerHeight,
                            behavior: 'smooth',
                        });
                    }

                    setTimeout(() => {
                        this.checked = false;
                    }, 500);
                }, 800);
            }
        });
    }

    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.modal-call-link');

    if (modalButtons.length > 0) {
        modalButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });
    }

    if (modal) {
        modal.addEventListener('click', closeModal);
    }

    function openModal(e) {
        e.preventDefault();
        document.body.classList.add('body--modal-opened');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--modal-opened');
        }
    }

    const telInputs = document.querySelectorAll('input[type="tel"]');
    if (telInputs.length > 0) {
        const im = new Inputmask('+7 (999) 999-99-99');
        im.mask(telInputs);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const accordionControls = document.querySelectorAll('.accordion-list__control');
        let isFirstLoad = true;

        function openAccordionItem(accordionItem) {
            const content = accordionItem.querySelector('.accordion-list__content');
            const icon = accordionItem.querySelector('.accordion-list__control-icon svg');

            accordionItem.classList.add('active');
            if (content) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function closeAccordionItem(accordionItem) {
            const content = accordionItem.querySelector('.accordion-list__content');
            const icon = accordionItem.querySelector('.accordion-list__control-icon svg');

            accordionItem.classList.remove('active');
            if (content) {
                content.style.maxHeight = null;
            }
            if (icon) {
                icon.style.transform = 'rotate(180deg)';
            }
        }

        function closeAllAccordionItems() {
            const allItems = document.querySelectorAll('.accordion-list__item');
            allItems.forEach(item => {
                closeAccordionItem(item);
            });
        }

        const firstAccordionItem = document.querySelector('.accordion-list__item');
        if (firstAccordionItem) {
            setTimeout(() => {
                openAccordionItem(firstAccordionItem);
                isFirstLoad = false;
            }, 100);
        }

        accordionControls.forEach(control => {
            control.addEventListener('click', function () {
                const accordionItem = this.closest('.accordion-list__item');
                const isOpen = accordionItem.classList.contains('active');

                if (isOpen) {
                    closeAccordionItem(accordionItem);
                } else {
                    if (!isFirstLoad) {
                        closeAllAccordionItems();
                    }
                    openAccordionItem(accordionItem);

                    const planSection = document.querySelector('.plan');
                    if (planSection && !isFirstLoad) {
                        planSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }

                    isFirstLoad = false;
                }
            });
        });
    });

    new Swiper('.slider', {
        direction: 'horizontal',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        effect: 'slide',
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        breakpoints: {
            850: {
                slidesPerView: 2,
                spaceBetween: 20,
        centeredSlides: false,
            },
            1250: {
                slidesPerView: 3,
                spaceBetween: 20,
        centeredSlides: false,
            }
        }
    })

    document.addEventListener('DOMContentLoaded', function () {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        const btnUpContainer = document.querySelector('.btn-up');
        const fixedOffset = 240;

        function checkScrollPosition() {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            const distanceFromBottom = pageHeight - (scrollTop + viewportHeight);
            const halfPageHeight = pageHeight / 2;

            if (scrollTop + viewportHeight > halfPageHeight) {
                btnUpContainer.classList.add('show');
                scrollToTopBtn.classList.add('show');

                if (distanceFromBottom <= fixedOffset) {
                    btnUpContainer.classList.add('fixed-bottom');
                    scrollToTopBtn.classList.add('fixed-bottom');
                } else {
                    btnUpContainer.classList.remove('fixed-bottom');
                    scrollToTopBtn.classList.remove('fixed-bottom');
                }
            } else {
                btnUpContainer.classList.remove('show');
                scrollToTopBtn.classList.remove('show');
                btnUpContainer.classList.remove('fixed-bottom');
                scrollToTopBtn.classList.remove('fixed-bottom');
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        let ticking = false;
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(function () {
                    checkScrollPosition();
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        scrollToTopBtn.addEventListener('click', scrollToTop);

        checkScrollPosition();
    });

    document.addEventListener('DOMContentLoaded', function () {
        const widget = document.querySelector('.wa-insert');
        const openBtn = document.querySelector('.wa-btn');
        const closeBtn = document.querySelector('.wa__cancel');

        function openWidget() {
            widget.classList.add('active');
        }

        function closeWidget() {
            widget.classList.remove('active');
        }

        openBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openWidget();
        });

        closeBtn.addEventListener('click', closeWidget);

        document.addEventListener('click', function (e) {
            if (widget.classList.contains('active') &&
                !widget.contains(e.target) &&
                !openBtn.contains(e.target)) {
                closeWidget();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && widget.classList.contains('active')) {
                closeWidget();
            }
        });
    });
})();