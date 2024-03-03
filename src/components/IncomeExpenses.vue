<script setup>
import { useTransactionStore } from '@/stores/transaction'

const store = useTransactionStore()
</script>

<template>
    <article class="flex justify-evenly border border-light-grey shadow-xl mt-10 py-5 px-3">
        <section
            class="flex flex-1 flex-col justify-center items-center border-r-4 border-light-grey"
        >
            <h3 class="text-xl">INCOME</h3>
            <span class="text-at-light-green">$ {{ store.income.toFixed(2) }}</span>
        </section>
        <section class="flex flex-1 flex-col justify-center items-center">
            <h3 class="text-xl">EXPENSE</h3>
            <span class="text-at-light-red">$ {{ store.expense.toFixed(2) }}</span>
        </section>
    </article>
</template>
