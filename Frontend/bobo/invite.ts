const findUsersBtns = (): HTMLButtonElement[] => {
    const result = [];
    const searchText = '\n\n    Установить контакт\n';

    const block = document.querySelectorAll('.entity-result__item');
    block.forEach(block => {
        const btn = block.querySelector('button');
        if(btn.textContent === searchText) result.push(btn);
    })
    return result
}

function scrollToBottom() {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: 'smooth'
    });
}

// @ts-ignore
const confirmInviteModal = async (delay = 500): Promise<void> => {
    // @ts-ignore
    return new Promise((resolve => {
        const sendButton: HTMLButtonElement = document
            .getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1') as unknown as HTMLButtonElement;
        sendButton[0]?.click();
        resolve();
    }))
}


function sleep(ms) {
    // @ts-ignore
    return new Promise(resolve => setTimeout(resolve, ms));
}

const paginateNext = () => {
    const btn: HTMLButtonElement = document.querySelector('.artdeco-pagination__button--next');
    btn.click();
}

const _checkPagination = () => {
    let currentPage: string = '';
    // @ts-ignore
    return new Promise(((resolve, reject) => {
        const selectedPage = document.querySelector('.selected');
        if (selectedPage && selectedPage.textContent !== currentPage) {
            currentPage = selectedPage.textContent;
            resolve();
        } else {
            reject();
        }
    }))
}
const checkPagination = _checkPagination();

// @ts-ignore
const main = async () => {
    try {
        let startTime = +new Date();
        const btns = findUsersBtns()
        for(let btn of btns) {
            btn.click();
            await sleep(400);
            await confirmInviteModal();
            await sleep(200);
        }
        scrollToBottom();
        await sleep(300);
        checkPagination();
        paginateNext();
        await sleep(5000);
    } catch (e) {
        return;
    }

    main();
}
main();