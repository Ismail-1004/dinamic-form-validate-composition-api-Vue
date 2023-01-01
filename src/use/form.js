import { computed, reactive } from 'vue'
import { useField } from '@/use/field'

export function useForm (init = {}) {
    const form = reactive({})
    const validKey = 'valid'

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value)
    }

    const withOutValid = k => k !== validKey

    form[validKey] = computed(() => {
        return Object.keys(form).filter(withOutValid).reduce((acc, k) => {
            acc = form[k].valid
            return acc
        }, true)
    })

    return form 
}   