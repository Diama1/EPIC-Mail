import messageModel from '../models/messages';


const Messages = {

    createMessage(req,res) {
        const newMessage = messageModel.CreateMessage(req)
        res.status(201).send({
            status:201,
            data : [newMessage]
        })
    },
    

    getAllMessages(req, res) {

        const allMessages = messageModel.getAllMessages();
        res.status(200).send({
            status:200,
            data: allMessages
        })

    },
    getSpecifiMessage(req,res) {
        const specific_message = messageModel.getOneMessage(req.params.id);
        res.status(200).send({
            status:200,
            data : [specific_message]
        })
    },
    getUnreadMessage(req,res) {
        const unread_message = messageModel.getUnreadMessage(req.params.status);
        res.status(200).send({
            status:200,
            data : [unread_message]
        })

    },




    deleteMessage(req,res) {
        const message_to_delete = messageModel.getOneMessage(req.params.id);
        if (!message_to_delete) {
            res.status(404).send({
                status: 404,
                Error: message_to_delete.message
                
            })
        }
        else {
            const delete_message = messageModel.deleteMessage(req.params.id);
            res.status(200).send({
                status:200,
                data:[{ 
                    message: delete_message.message
                }]
            })
            
            
        }

    }

    
}

export default Messages;