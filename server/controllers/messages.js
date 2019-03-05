import messageModel from '../models/messages';


const Messages = {

    createMessage(req,res) {
        const newMessage = messageModel.CreateMessage(req)
        res.status(201).send({
            status:201,
            data : [newMessage]
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