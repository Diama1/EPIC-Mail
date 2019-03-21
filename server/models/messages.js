import moment from 'moment';
import query from '../db/queries';
import db from '../db/runners';



class Message {


    async CreateMessage( message) {
        
       
        let Response = {};
        const createQuery = query.createMessage;
        
        const newMessage = [
            moment(new Date()),
            message.body.subject,
            message.body.message,
            message.id,
            message.body.receiverid,
            message.body.status

        ]
        
        try {
            const { rows } = await db.query(createQuery, newMessage);
            Response = {
              status: true,
              data: rows[0],
            };
          } catch (error) {
            
            Response = {
              status: false,
              code: 503,
              message: error,
            };
          }
          return Response;
           
    }
    
    async getAllMessages() {
        let Response = {}
        const messageQuery = query.getAllMessages;
        
        try {
            const {rows} = await db.query(messageQuery)
            Response = {
                status:true,
                data: rows
            } 

        }
        catch ( error ) {
            Response = {
                status:false,
                message: error
            } 
        }

        return Response;
        
        
    }

    getUnreadMessage(status) {
        return this.messages.filter(msg => msg.status === status)
    }

    async getOneMessage(id) {
        const createQuery = query.getOneMessage;
            const message = [
                id,
            ]
            try {
                const { rows } = await db.query(createQuery, message)
                
                if (!rows[0]) {
                    return {
                        status: false,
                        message: 'Message Not found!'
                    }
                }
                return {
                    status: true,
                    data: rows[0]
                }
            } catch ( error ) {
                return {
                    status: false,
                    message: error
                }
            }
    }


   async deleteMessage(msg) {
       let userId = msg.id;
       console.log(userId)
        const deleteQuery = query.deleteOneMessage;
        const message = [
            msg.params.id,
            userId
           
        ]
        
        
    try {
      const { rows }  = await db.query(deleteQuery, message);
      
      if(!rows[0]) {
        return {
            status: false,
            message: 'Message Not found!'
        }
    }
    return {
        status: true,
        message: 'Message successfully deleted!'
      };

    } catch (error) {
      return {
        status: false,
        message: error,
      };
    }
    

}

    

    

    
}

export default new Message;
