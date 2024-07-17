<template>
  <div class="flex justify-center">
    <div class="flex items-center">
      <template v-for="i in 3">
        <StarOutlineIcon class="w-4 h-4 text-yellow-400" v-if="numeric_quality < i" key="i" />
        <StarSolidIcon class="w-4 h-4 text-yellow-400" v-else />
      </template>
    </div>
  </div>
</template>
<script>
import { StarIcon as StarOutlineIcon } from "@heroicons/vue/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/vue/solid";
export default {
  name: "QualityBadge",
  props: {
    quality: String,
  },
  components: {
    StarOutlineIcon,
    StarSolidIcon,
  },
  computed: {
    numeric_quality() {
      if (this.quality === "high") return 3;
      if (this.quality === "medium") return 2;
      if (this.quality === "low") return 1;
      return 0;
    },
  },
};
</script>
