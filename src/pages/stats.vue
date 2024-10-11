<template>
  <div id="stats" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
    <h1 class="
        py-6
        mb-4
        text-4xl
        font-semibold
        text-gray-800
        border-b border-gray-300
      ">
      Statistics
    </h1>
    <stats-table title="General Statistics" subtitle="database contains" :records="general_stats" />
    <stats-table title="Secondary Metabolite Record Count" subtitle="by type" :records="record_count" :badge="true" />
    <stats-table title="Enntries" subtitle="by phylum" :records="taxon_count" :badge="true" />
  </div>
</template>

<script>
import StatsTable from "../components/StatsTable.vue";

export default {
  data() {
    return {
      dummy: null,
      general_stats: [
        {
          description: "Total secondary metabolite clusters",
          count: 0,
          single: true,
          highlight: true,
        },
        { description: "Active entries", count: 0, single: true },
        { description: "Pending entries", count: 0 },
        { description: "Retired entries", count: 0 },
        { description: "Complete entries", count: 0, single: true },
        { description: "Entries with unknown completion", count: 0 },
        { description: "Partial entries", count: 0 },
      ],
      record_count: [
        { description: "Loading...", count: 0 },
      ],
      taxon_count: [
        { description: "Loading...", count: 0 },
      ]
    };
  },
  watch: {
    dummy: {
      immediate: true,
      async handler() {
        const data = await this.fetchStats();
        this.general_stats[0].count = data.counts.total;
        this.general_stats[1].count = data.counts.active;
        this.general_stats[2].count = data.counts.pending;
        this.general_stats[3].count = data.counts.retired;
        this.general_stats[4].count = data.counts.complete;
        this.general_stats[5].count = data.counts.total - data.counts.complete - data.counts.partial;
        this.general_stats[6].count = data.counts.partial;

        this.record_count = data.clusters;

        this.taxon_count = data.phyla;

      }
    }
  },
  methods: {
    async fetchStats() {
      const raw = await fetch("/api/v1/stats");
      const data = await raw.json();
      return data;
    }

  },
  components: {
    StatsTable,
  },
};
</script>
