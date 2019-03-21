import query from '../db/queries';
import db from '../db/runners';

class Groups {

    async createGroup(group) {
        let Response = {};

        const groupQuery = query.groupCreate;

        const newGroup = [
            group.body.groupName,
            group.id

        ]

        try {
            const { rows } = await db.query(groupQuery, newGroup);
            console.log( rows[0])
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
    async getOneGroup(id) {
        const groupQuery = query.getOneGroup;
            const group = [
                id,
            ]
            try {
                const { rows } = await db.query(groupQuery, group)
                
                if (!rows[0]) {
                    return {
                        status: false,
                        message: 'Group Not found!'
                    }
                }
                return {
                    status: true,
                    data: rows[0]
                }
            } catch ( error ) {
                return {
                    status: false,
                    message: error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
                }
            }
    }



    async deleteGroup(id) {
        const deleteQuery = query.deleteGroup;
        const group = [
            id,
        ]
        
    try {
      const { rows }  = await db.query(deleteQuery, group);
      
      if(!rows[0]) {
        return {
            status: false,
            message: 'Group with that id is Not found!'
        }
    }
    return {
        status: true,
        message: 'Group successfully deleted!'
      };

    } catch (error) {
      return {
        status: false,
        message: error,
      };
    }
    
    }
    async addGroupMember(user,id) {
        
        
        const memberQuery= query.memberCreate;
        const member = [
            user.body.memberId,
            id   
        ]
        
        try {
            const { rows } = await db.query(memberQuery, member);
            
            // console.log( rows[0])
            return {
              status: true,
              data: rows[0],
            };
          } catch (error) {
            
            return {
              status: false,
              code: 503,
              message: error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
            };
        }

    }

}


export default new Groups