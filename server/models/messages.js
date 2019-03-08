import moment, { parseTwoDigitYear } from 'moment';

class Message {

    constructor() {
        this.messages = []
    }

    CreateMessage(message) {
        const newMessage = {
            id: this.messages.length + 1,
            createdOn: moment(new Date()),
            subject: message.body.subject,
            message: message.body.message,
            SenderID: this.messages.length + 2,
            receiverID: 1,
            ParrentMessageId: this.messages.length + 1,
            status: message.body.status
        }
        this.messages.push(newMessage);
        return newMessage
    }
    



    getAllMessages() {
        return this.messages;
    }

    getUnreadMessage(status) {
        return this.messages.filter(msg => msg.status === status)
    }

    getOneMessage(id) {
        return this.messages.find(msg => msg.id === parseInt(id,10));
    }


    deleteMessage(id) {
        const messageIndex = this.messages.findIndex(msg => {
            return msg.id === parseInt(id,10);

        });
        if (messageIndex > -1){
            this.messages.splice(messageIndex,1);
            return {
                message: 'The message is successfully deleted!'
            }
        }
    }

    
}

export default new Message;