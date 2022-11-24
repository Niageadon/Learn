class Inviter {
    totalPersonsInvited = 0;
    paginationPage = '';

    paginateNext() {
        try {
            const btn = document.querySelector('.artdeco-pagination__button--next');
            btn.click();
        } catch (e) {
            console.error(document.querySelector('.artdeco-pagination__button--next'))
            throw new Error('in paginateNext', e)
        }
    }

    sleep(ms) {
        // @ts-ignore
        this.activateUserAction();
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    hasLimitErrorModal() {
        const modal = document.querySelector('.ip-fuse-limit-alert__header');
        return modal?.textContent.includes('Достигнуто максимально допустимое число приглашений в неделю');
    }

    activateUserAction(final = false) {
        window.scrollTo({
            top: final ? 3000 : getRandomInt(0, 3000),
            left: 0,
            behavior: 'smooth'
        });
    }

    validatePagination() {
        return new Promise(((resolve, reject) => {
            const selectedPage = document.querySelector('.selected');
            if (selectedPage && selectedPage.textContent !== this.paginationPage) {
                this.paginationPage = selectedPage.textContent;
                resolve();
            } else {
                console.error(selectedPage);
                reject(`err in pagination prev: ${this.paginationPage} \ current: ${selectedPage?.textContent}`);
            }
        }))
    }

    findUsersBtns() {
        try {
            const result = [];
            const searchText = '\n\n    Установить контакт\n';

            const block = document.querySelectorAll('.entity-result__item');
            block.forEach(block => {
                const btn = block.querySelector('button');
                if(btn?.textContent === searchText) result.push(btn);
            })
            return result
        } catch (e) {
            console.error(document.querySelectorAll('.entity-result__item'));
            debugger
            throw new Error('in findUsersBtns', e)
        }
    }

    confirmInvite() {
        try {
            const sendButton = document
                .getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1');
            sendButton[0]?.click();
        } catch (e) {
            throw new Error('in confirmInvite', e)
        }
    }


    async run(inviteLimit = Infinity) {
        try {
            if (this.totalPersonsInvited > inviteLimit) {
                return Promise.resolve();
            }
            let startTime = +new Date();
            this.activateUserAction(true);
            await this.sleep(getRandomInt(555, 600));

            const btns = this.findUsersBtns()
            for(let btn of btns) {
                if (window.q || this.hasLimitErrorModal()) return

                btn.click();
                this.totalPersonsInvited++;
                console.log('total invited:', this.totalPersonsInvited)
                await this.sleep(getRandomInt(300, 400));
                await this.confirmInvite();
                await this.sleep(getRandomInt(300, 400));
            }
            this.activateUserAction(true);
            await this.sleep(getRandomInt(300, 500));
            await this.validatePagination();

            await this.paginateNext();
            await this.sleep(getRandomInt(2500, 4000));
        } catch (e) {
            debugger
            throw new Error('in catch', e)
        }

        return await this.run(inviteLimit);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bot = new Inviter();
bot.run(20);