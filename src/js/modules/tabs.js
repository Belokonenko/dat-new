export default function tabs() {
    const accountTitle = document.querySelector('.account__title');

    const tabs = document.querySelectorAll('.tab__item');
    const tabContent = document.querySelectorAll('.tab__content');
    const tabsParent = document.querySelector('.tab__list');

    const hideTabContent = () => {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('account__tab-btn_active');
        });
    };

    const showTabContent = (i = 0) => {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('account__tab-btn_active');
    };

    console.log('tabs');

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    // <<<
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
