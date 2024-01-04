const token = '###'

export const server_calls = {
    get: async () => {
        const response = await fetch(`####`,{
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
        const response = await fetch(`####`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
        const body = await response.json()
        console.log(body)
        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
            
        return body
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`####/${id}`, {
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
        const response = await fetch(`#####/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}