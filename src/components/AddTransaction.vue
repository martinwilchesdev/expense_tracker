<script setup>
import { ref } from 'vue'
import { useTransactionStore } from '@/stores/transaction'

const store = useTransactionStore()

const text = ref(null)
let amount = ref(null)

const addTransaction = () => {
    if (!text.value || !amount.value) return
    if (isNaN(amount.value)) return
    store.addTransaction({
        text: text.value,
        amount: amount.value
    })

    text.value = null
    amount.value = null
}

const validateNumber = () => {
    const amountToString = amount.value.toString()
    if (amountToString.length > 8) {
        amount.value = Number(amountToString.slice(0, 8))
    }
}
</script>

<template>
    <section class="mt-10">
        <header class="border-b-2 border-light-grey pb-4">
            <h3 class="text-xl font-bold">Add new transaction</h3>
        </header>
        <form
            @submit.prevent="addTransaction"
            autocomplete="off"
            class="text-lg mt-5 flex flex-col gap-5"
        >
            <section class="flex flex-col">
                <label for="text" class="mb-2">Text</label>
                <input
                    class="border-2 border-light-grey py-3 px-2 line-clamp-1 focus:outline-none"
                    type="text"
                    placeholder="Enter text..."
                    maxlength="50"
                    v-model="text"
                    required
                />
            </section>
            <section class="flex flex-col">
                <label class="flex flex-col mb-2" for="amount"
                    >Amount
                    <span class="text-sm">(negative - expensive, positive - income)</span></label
                >
                <input
                    class="border-2 border-light-grey py-3 px-2 focus:outline-none"
                    type="number"
                    placeholder="Enter amount..."
                    v-model="amount"
                    @input="validateNumber"
                    required
                />
            </section>
            <button
                type="submit"
                class="bg-at-light-green text-white py-3 rounded-sm duration-200 border border-transparent hover:bg-white hover:border-at-light-green hover:text-at-light-green"
            >
                Add transaction
            </button>
        </form>
    </section>
</template>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
