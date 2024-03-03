import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', () => {
    // Variables
    const transactions = ref([])
    const expense = ref(0)
    const income = ref(0)

    // Functions
    function addTransaction(param) {
        transactions.value.push({
            id: transactions.value.length + 1,
            text: param.text,
            amount: param.amount
        })

        param.amount > 0 ? (income.value += Number(param.amount)) : (expense.value += Number(param.amount))
    }

    // Computed
    const balance = computed(() => {
      return Number(income.value) - Math.abs(Number(expense.value))
    })

    return { transactions, addTransaction, expense, income, balance }
})
