<template>
  <div class="px-2 py-1 rounded w-full flex items-center justify-center" :class="statusStyle">{{ statusDescription }}</div>
</template>

<script>
export default {
  name: "SubmissionStatus",
  props: {
    status: String,
  },
  computed: {
    statusStyle() {
      switch (this.status) {
        case "assigned":
          return ['bg-blue-mibig', 'text-white'];
        case "waiting":
          return ['bg-green-ok', 'text-white'];
        case "changes":
          return ['bg-orange-warning'];
        default:
          return ['bg-red-error'];
      }
    },
    statusDescription() {
      switch (this.status) {
        case "assigned":
          return "Accession assigned";
        case "waiting":
          return "Waiting for review";
        case "changes":
          return "Changes requested";
        default:
          return "Unknown status";
      }
    },
  },
};
</script>