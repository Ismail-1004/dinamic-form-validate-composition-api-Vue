import { ref } from 'vue'
import { useFetch } from "./fetch";

export async function useUsers () {
    const loaded = ref(false)
    const {resposne: users, request} = useFetch('https://jsonplaceholder.typicode.com/users')

    if (!loaded.value) {
        await request()
        loaded.value = true
    }

    console.log(users);

    return { users }
}