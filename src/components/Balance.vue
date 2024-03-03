<script setup>
import { useTransactionStore } from '@/stores/transaction'

const store = useTransactionStore()
</script>

<template>
    <section class="mt-10">
        <header>
            <h4 class="font-bold text-xl">YOUR BALANCE</h4>
            <h1 class="font-extrabold text-3xl" id="balance">$ {{ store.balance.toFixed(2) }}</h1>
        </header>
    </section>
</template>
