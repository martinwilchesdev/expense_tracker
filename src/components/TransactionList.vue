<script setup>
import { useTransactionStore } from '@/stores/transaction'

const store = useTransactionStore()

const transactions = store.transactions
</script>

<template>
    <section class="mt-10">
        <header class="border-b-2 border-light-grey pb-4">
            <h3 class="text-xl font-bold">History</h3>
        </header>
        <ul>
            <li
                v-for="item in transactions"
                :key="item.id"
                class="flex justify-between mt-5 text-lg box-content border border-light-grey relative"
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
