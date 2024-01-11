
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
            method: 'PUT',
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
        // if(!response.ok){
        //     throw new Error('Failed to update data on server.')
        // }
        // return;
        
    }
}
// const API_BASE_URL = 'https://car-inventory-1okg.onrender.com/api/cars';
// const token = 'bdf34de6f09bb9c8c741329a6fcb843581428a78279906c5';

// export const server_calls = {
//   get: async (brand: string, model: string, year: number) => {
//     const response = await fetch(`${API_BASE_URL}?brand=${brand}&model=${model}&year=${year}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data from server. Status: ${response.status}`);
//     }

//     return await response.json();
//   },

//   create: async (data: any = {}) => {
//     console.log(JSON.stringify(data))
//     const response = await fetch(API_BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     });

//     const body = await response.json();

//     if (!response.ok) {
//       throw new Error(`Failed to create new data on server. Status: ${response.status}`);
//     }

//     return body;
//   },

//   update: async (id: string, data: any = {}) => {
//     const response = await fetch(`${API_BASE_URL}/${id}`, {
//       method: 'PUT', // or 'PATCH' based on your backend API
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to update data on server. Status: ${response.status}`);
//     }
//   },

//   delete: async (id: string) => {
//     const response = await fetch(`${API_BASE_URL}/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to delete data on server. Status: ${response.status}`);
//     }

//     return;
//   },
// };