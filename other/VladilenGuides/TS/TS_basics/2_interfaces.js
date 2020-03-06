var course = {
    programId: 11,
    assignId: 1,
    progress: 0,
    notifications: {
        finish: {
            title: 'gc',
            text: 'try another one',
            url: 'google.com'
        }
    }
};
var course1 = {};
var course2 = {
    programId: 12,
    assignId: 2,
    progress: 0,
    notifications: {
        start: {
            title: 'hello',
            text: 'click "about"',
            url: 'google.com'
        },
        finish: {
            title: 'great work',
            text: 'try another one'
        }
    },
    showNotification: function (notif) {
        if (notif === void 0) { notif = this.notifications; }
        console.log(this.notifications.start.title);
        console.log(this.notifications.start.text);
    }
};
course2.showNotification({});
