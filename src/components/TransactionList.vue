<script setup>
import { computed } from 'vue'
import { useTransactionStore } from '@/stores/transaction'

const store = useTransactionStore()

const transactions = computed(() => store.transactions)

const deleteTransaction = (param) => {
    store.deleteTransaction(param)
}
</script>

<template>
    <section class="mt-10">
        <header class="border-b-2 border-light-grey pb-4">
            <h3 class="text-xl font-bold">History</h3>
        </header>
        <ul>
            <li
                v-for="item in transactions"
                class="flex justify-between mt-5 text-lg box-content border border-light-grey relative"
            >
                <span
                    class="absolute -left-5 top-1/3 px-1 bg-red-500 text-white cursor-pointer select-none"
                    @click="deleteTransaction(item)"
                    >X</span
                >
                <span class="break-all py-5 px-3">{{ item.text }}</span>
                <span class="py-5 px-3 mr-3">$ {{ item.amount }}</span>
                <div
                    :class="[
                        item.amount > 0 ? 'bg-at-light-green' : 'bg-at-light-red',
                        'absolute h-full w-2 right-0'
                    ]"
                ></div>
            </li>
        </ul>
    </section>
</template>
