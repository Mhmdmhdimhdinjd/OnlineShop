import axios from "axios"
import { useMutation } from "react-query"

function LoginQuery__handler ()  {


    const { mutate , } = useMutation({
        mutationKey:'login',
        mutationFn:(data) =>{
            return axios.post('https://jsonplaceholder.typicode.com/posts', data)
        },
        
    })


    return {mutate} 
}

export default LoginQuery__handler