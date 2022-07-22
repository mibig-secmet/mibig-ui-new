<template>
  <div id="repo" class="mx-auto p-4 max-w-[85%]">
    <h1 class="
        py-6
        mb-4
        text-4xl
        font-semibold
        text-gray-800
        border-b border-gray-300
      ">
      Repository
    </h1>
    <entry-table :records="entries"></entry-table>
  </div>
</template>

<script>
import EntryTable from "../components/EntryTable.vue";

export default {
  data() {
    return {
      dummy: null,
      entries: [],
    };
  },
  watch: {
    dummy: {
      immediate: true,
      async handler() {
        this.entries = await this.fetchRepo();
      }
    }
  },
  methods: {
    async fetchRepo() {
      const raw = await fetch("/api/v1/repository");
      const data = await raw.json();
      return data;
    }

  },
  components: {
    EntryTable,
  },
};
</script>
