<template>
    <div class="mx-auto py-10 w-[80%]">
        <div class="flex flex-col w-full">
            <label for="simple-search">Enter your search term</label>
            <input class="rounded-lg border-blue-mibig-dark border-opacity-50 focus:border-opacity-100"
                id="simple-search" type="text" placeholder="e.g. lanthipeptide" v-model="term" />
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
    name: "SimpleSearch",
    data() {
        return {
            term: "",
        }
    },
    computed: {
        termValid() {
            return this.term.length > 0;
        },
        searchCss() {
            return this.termValid ? main_button_active : main_button_inactive;
        },
    },
    methods: {
        search() {
            this.$emit('search', { 'search_string': this.term });
        },
        loadExample() {
            this.term = "lanthipeptide";
        }
    },
    emits: ['search'],
};
</script>
