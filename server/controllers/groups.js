import groupModal from '../models/groups';

class Groups {
    static createGroup(req, res) {
        const newGroup = groupModal.createGroup(req)
        newGroup.then((message) => {
            console.log(message)
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
    static getSpecifiGroup(req, res) {
        const specificGroup = groupModal.getOneGroup(req.params.id);
        specificGroup.then((group) =>{
            if(!group.status){
                return res.status(404).send({
                    status: 404,
                    error: group.message,
            })
        }
        return res.status(200).json({
            status: 200,
            data: group.data,
          });

        })
       
    }


    static deleteGroup(req, res) {
        const groupDelete = groupModal.deleteGroup(req.params.id)
        groupDelete.then((result) => {
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

export default Groups