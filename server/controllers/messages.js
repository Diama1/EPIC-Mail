import messageModel from '../models/messages';


const Messages = {

    createMessage(req,res) {
        const newMessage = messageModel.CreateMessage(req)
        res.status(201).send({
            status:201,
            data : [newMessage]
        })
    }

    
}

export default Messages;