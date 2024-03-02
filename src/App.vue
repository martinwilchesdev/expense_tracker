<script setup>
import Header from '@/components/Header.vue'
import Balance from '@/components/Balance.vue'
import IncomeExpenses from '@/components/IncomeExpenses.vue'
import AddTransaction from '@/components/AddTransaction.vue'
import TransactionList from '@/components/TransactionList.vue'
</script>

<template>
    <main class="container text-2xl font-Poppins py-10 mx-auto w-10/12 xl:w-1/2">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
