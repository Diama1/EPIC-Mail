import messageModel from '../models/messages';
import jwt from '../helper/user'


class Messages {

    static createMessage(req, res) {
        
        const newMessage = messageModel.CreateMessage(req)
        
        newMessage.then((message) => {
            if (!message.status) {
              return res.status(message.code).send({
                status: message.code,
                error: message.message,
              });
            }
            return res.status(201).send({
              status: 201,
              data: message.data,
            });
          });
        
        
    }

    static getAllMessages(req, res) {

        const allMessages = messageModel.getAllMessages();
        
        allMessages.then((message) => {
            if(!message.status){
                return res.status(400).send({
                    status: 400,
                    Error: message.message
                })
                
            }
            return res.status(200).send({
                status: 200,
                data: message.data
            })
        })
        
        

    }

    static getSpecifiMessage(req, res) {
        const specificMessage = messageModel.getOneMessage(req.params.id);
        specificMessage.then((oneMessage) =>{
            if(!oneMessage.status){
                return res.status(404).send({
                    status: 404,
                    error: oneMessage.message,
            })
        }
        return res.status(200).json({
            status: 200,
            data: oneMessage.data,
          });

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
        const messageToDelete = messageModel.deleteMessage(req);
        
        messageToDelete.then((result) => {
            if(!result.status) {
                return res.status(404).send({
                    status: 404,
                    Error: result.message
                })
            }
            return res.status(200).send({
                status: 200,
                Message: result.message
            })

        })
        

    }
}

export default Messages;
