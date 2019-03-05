import moment from 'moment';

class Message {

    constructor() {
        this.messages = []
    }

    CreateMessage(message) {
        const newMessage = {
            id: this.messages.length + 1,
            createdOn: moment(new Date()),
            subject:message.body.subject,
            message:message.body.message,
            status: 'sent'
        }
        this.messages.push(newMessage);
        return newMessage
    }

    
}

export default new Message;