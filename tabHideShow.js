function tabHideShow(infoHeaderTab, infoHeader, infoTabContent, classShow, classHide) {
    let tab = document.querySelectorAll(infoHeaderTab),
        info = document.querySelector(infoHeader),
        tabContent = document.querySelectorAll(infoTabContent);
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove(classShow.slice(1));
            tabContent[i].classList.add(classHide.slice(1));
        }
    }
    // Hide Content besides the first card
    hideTabContent(1);
    function showTabContent(b) {
        if (tabContent[b].classList.contains(classHide.slice(1))) {
            tabContent[b].classList.remove(classHide.slice(1));
            tabContent[b].classList.add(classShow.slice(1));
        }
    }
    info.addEventListener('click', (event) => {
        let target = event.target;
         // infoHeaderTab.slice(1) - cut dot 
        if (target && target.classList.contains(infoHeaderTab.slice(1))) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}
