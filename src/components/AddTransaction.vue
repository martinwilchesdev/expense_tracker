<script setup></script>

<template>
    <section class="mt-10">
        <header class="border-b-2 border-light-grey pb-4">
            <h3 class="text-xl font-bold">Add new transaction</h3>
        </header>
        <form autocomplete="off" class="text-lg mt-5 flex flex-col gap-5">
            <section class="flex flex-col">
                <label for="text" class="mb-2">Text</label>
                <input
                    class="border-2 border-light-grey py-3 px-2 focus:outline-none"
                    type="text"
                    placeholder="Enter text..."
                />
            </section>
            <section class="flex flex-col">
                <label class="flex flex-col mb-2" for="amount"
                    >Amount
                    <span class="text-sm">(negative - expensive, positive - income)</span></label
                >
                <input
                    class="border-2 border-light-grey py-3 px-2 focus:outline-none"
                    type="text"
                    placeholder="Enter amount..."
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
