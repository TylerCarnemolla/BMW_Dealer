const token = 'bdf34de6f09bb9c8c741329a6fcb843581428a78279906c5'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-1okg.onrender.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {  
        console.log(JSON.stringify(data))
        console.log('Im here')
        const response = await fetch(`https://car-inventory-1okg.onrender.com/api/cars`,{          
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
        const body = await response.json()
      
        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
            
        return body
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-1okg.onrender.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error('Failed to update data on server.')
        }
        
    },
    delete: async(id:string) => {
        const response = await fetch(`https://car-inventory-1okg.onrender.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}