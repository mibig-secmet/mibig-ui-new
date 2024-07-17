<template>
  <div class="flex justify-center">
    <CheckIcon v-if="this.completeness === 'complete'" class="w-4 h-4" />
    <XIcon v-else-if="this.completeness === 'partial'" class="w-4 h-4" />
    <div v-else class="font-normal text-center">?</div>
  </div>
</template>
<script>
import { CheckIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "ClusterCompleteBadge",
  props: {
    completeness: String
  },
  components: {
    CheckIcon,
    XIcon,
  },
};
</script>
