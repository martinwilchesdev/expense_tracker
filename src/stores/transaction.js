import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', () => {
    // Variables
    const transactions = ref([])
    const expense = ref(0)
    const income = ref(0)

    // Functions
    function updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(transactions.value))
        localStorage.setItem('balance', balance.value)
        localStorage.setItem('expense', expense.value)
        localStorage.setItem('income', income.value)
    }

    function addTransaction(param) {
        transactions.value.push({
            id: transactions.value.length + 1,
            text: param.text,
            amount: param.amount
        })

        param.amount > 0
            ? (income.value += Number(param.amount))
            : (expense.value += Number(param.amount))

        updateLocalStorage()
    }

    function deleteTransaction(param) {
        transactions.value = transactions.value.filter((transaction) => transaction.id != param.id)
        param.amount > 0 ? (income.value -= param.amount) : (expense.value -= param.amount)

        updateLocalStorage()
    }

    // Computed
    const balance = computed(() => {
        return Number(income.value) - Math.abs(Number(expense.value))
    })

    onMounted(() => {
        if (
            localStorage.getItem('transactions') ||
            localStorage.getItem('balance') ||
            localStorage.getItem('expense') ||
            localStorage.getItem('income')
        ) {
            transactions.value = JSON.parse(localStorage.getItem('transactions'))
            balance.value = Number(localStorage.getItem('balance'))
            expense.value = Number(localStorage.getItem('expense'))
            income.value = Number(localStorage.getItem('income'))
        }
    })

    return { transactions, addTransaction, expense, income, balance, deleteTransaction }
})
