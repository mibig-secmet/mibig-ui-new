<template>
  <div class="flex justify-center">
    <component :is="minimal ? 'XIcon' : 'CheckIcon'" class="w-4 h-4" />
  </div>
</template>
<script>
import { CheckIcon, XIcon } from "@heroicons/vue/outline";
export default {
  name: "DetailedAnnotationBadge",
  props: {
    minimal: Boolean
  },
  components: {
    CheckIcon,
    XIcon,
  }
};
</script>
