import { ref } from 'vue'

export function useFetch(url, options) {
    const resposne = ref()

    const request = async () => {
        const res = await fetch(url, options)
        resposne.value = await res.json()
    }

    return { resposne, request }
}