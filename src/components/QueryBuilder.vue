<template>
    <div class="mx-auto py-10 w-full">
        <div class="my-2 px-5 py-2 flex flex-col w-full border-dashed border-2 border-gray-800 border-opacity-25">
            <label for="simple-search">Todo</label>
        </div>
        <div class="pt-5 flex justify-between">
            <div>&nbsp;</div>
            <div class="w-[25%] py-1 rounded-lg font-semibold text-center bg-blue-mibig text-white" :class="searchCss"
                @click="search">
                Search
            </div>
            <div class="w-[25%] py-1 rounded-lg text-center cursor-pointer bg-gray-200" @click="loadExample">
                Load example</div>
        </div>
    </div>
</template>

<script>
const main_button_active = ['cursor-pointer'];
const main_button_inactive = ['cursor-not-allowed', 'bg-opacity-50'];

export default {
    name: "QueryBuilder",
    data() {
        return {
            valid: false,
        }
    },
    computed: {
        queryValid() {
            return this.valid;
        },
        searchCss() {
            return this.queryValid ? main_button_active : main_button_inactive;
        },
    },

    emits: ['search'],
};
</script>
