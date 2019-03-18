import moment from 'moment';

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
            SenderID: message.body.SenderID,
            receiverID: message.body.receiverID,
            ParrentMessageId: message.body.ParrentMessageId,
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
        return this.messages.find(msge => msge.id === parseInt(id,10));
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
