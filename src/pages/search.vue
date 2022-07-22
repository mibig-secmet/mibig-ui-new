<template>
  <div id="search" class="mx-auto p-4 max-w-[80%]">
    <h1 class="
        py-6
        mb-4
        text-4xl
        font-semibold
        text-gray-800
        border-b border-gray-300
      ">
      Search
    </h1>
    <div v-show="!search_done && !search_pending" class="flex items-stretch justify-center space-x-5">
      <div class="w-[33%] py-3 text-center rounded-lg cursor-pointer" :class="simpleStyles" @click="simpleMode">
        Simple search
      </div>
      <div class="w-[33%] py-3 text-center rounded-lg cursor-pointer" :class="builderStyles" @click="builderMode">
        Build a query
      </div>
    </div>
    <KeepAlive>
      <component v-show="!search_done && !search_pending" :is="mode === 'simple' ? 'SimpleSearch' : 'QueryBuilder'"
        @search="search" />
    </KeepAlive>
    <div v-if="search_pending">Searching, please wait...</div>
    <div v-if="search_done" class="pt-5">
      <div class="pb-5 flex items-center justify-between">
        <div>Your search gave <span class="font-semibold">{{ result.total }}</span> results.</div>
        <div class="px-2 py-1 rounded-lg text-center cursor-pointer bg-gray-200" @click="reset">
          Reset search
        </div>
      </div>
      <EntryTable :records="result.clusters" />
    </div>
  </div>
</template>

<script>
import SimpleSearch from "../components/SimpleSearch.vue";
import QueryBuilder from "../components/QueryBuilder.vue";
import EntryTable from "../components/EntryTable.vue";

const active_styles = ['bg-blue-mibig', 'text-white'];

export default {
  data() {
    return {
      mode: "simple",
      result: null,
      search_done: false,
      search_pending: false,
    };
  },
  computed: {
    simpleStyles() {
      return this.mode === "simple" ? active_styles : [];
    },
    builderStyles() {
      return this.mode === "builder" ? active_styles : [];
    },
  },
  methods: {
    simpleMode() {
      this.mode = "simple";
    },
    builderMode() {
      this.mode = "builder";
    },
    async search(query) {
      this.search_pending = true;
      let raw = await fetch("/api/v1/search", {
        method: "POST",
        body: JSON.stringify(query),
      });
      let data = await raw.json();
      this.result = data;
      this.search_pending = false;
      this.search_done = true;
    },
    reset() {
      this.search_pending = false;
      this.search_done = false;
      this.results = [];
    },
  },
  components: { SimpleSearch, QueryBuilder, EntryTable }
};
</script>
