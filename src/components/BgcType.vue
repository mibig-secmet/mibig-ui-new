<template>
  <div class="text-center m-0.5 rounded-lg" :class="color">{{ tag.name }}</div>
</template>
<script>
export default {
  computed: {
    color() {
      switch (this.tag.css_class) {
        case "alkaloid": return ['bg-terpene', 'text-white']
        case "pks": return ['bg-pks']
        case "nrps": return ['bg-nrps', 'text-white']
        case "terpene": return ['bg-terpene', 'text-white']
        case "saccharide": return ['bg-saccharide']
        default: return ['bg-other', 'text-white']
      }
    }
  },
  name: "BgcType",
  props: {
    tag: Object
  },
};
</script>
