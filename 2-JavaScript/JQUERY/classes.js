class rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width
    }
}


let newRectangle = new Rectangle (12, 10);
let area = newRectangle.getArea();

let secRectangle = {
    height: 10,
    width: 12,
    getArea: () => {
        return this.height * this.width;
    }
};


class User {
    constructor(name) {
        this.name = name;
        this.chat = [];
    }
    openChats (chat) {
        this.chat.push(chat);
    }
}

class Chat {
    constructor(user = [], name){
        this.name = name;
        this.user = user;
        this.messages = [];
    }
    addUser(user) {
        this.user.push(user);
    }
    addMessage(message) {
        this.messages.push(message);
    }
}
let kei = new User("kei");
kei.openChats(new Chat([kei], "study group"))