import messageModel from '../models/messages';


class Messages {

    static createMessage(req, res) {
        const newMessage = messageModel.CreateMessage(req)
        res.status(201).send({
            status:201,
            data : [newMessage]
        })
    }

    static getAllMessages(req, res) {

        const allMessages = messageModel.getAllMessages();
        res.status(200).send({
            status:200,
            data: allMessages
        })

    }

    static getSpecifiMessage(req, res) {
        const specificMessage = messageModel.getOneMessage(req.params.id);
        res.status(200).send({
            status:200,
            data : [specificMessage]
        })
    }

    static getUnreadMessage(req, res) {
        const unreadMessage = messageModel.getUnreadMessage(req.params.status);
        res.status(200).send({
            status:200,
            data : unreadMessage
        })

    }

    static deleteMessage(req,res) {
        const messageToDelete = messageModel.getOneMessage(req.params.id);
        if (!messageToDelete) {
            res.status(404).send({
                status: 404,
                Error: messageToDelete.message
                
            })
        }
        else {
            const deleteMessage = messageModel.deleteMessage(req.params.id);
            res.status(200).send({
                status:200,
                data:[{ 
                    message: deleteMessage.message
                }]
            })
            
            
        }

    }
}

export default Messages;
