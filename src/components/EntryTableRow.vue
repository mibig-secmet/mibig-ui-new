<template>
  <div @click.prevent="showEntry" class="grid grid-cols-4 grid-flow-row-dense lg:grid-cols-6 2xl:grid-cols-12 items-center cursor-pointer text-black" :class="bgClass">
    <div class="col-span-1">{{ entry.accession }}</div>
    <div class="col-span-1">
      <QualityBadge :quality="entry.quality" />
    </div>
    <div class="col-span-1">{{ entry.status }}</div>
    <div class="col-span-1">
      <ClusterCompleteBadge :completeness="entry.completeness" />
    </div>
    <div class="col-span-4">{{ products }}</div>
    <div class="col-span-2 flex flex-col justify-center">
      <BgcType v-for="tag in entry.classes" :key="tag.name" :tag="tag" />
    </div>
    <div class="col-span-2 px-2 font-light">{{ entry.organism }}</div>
  </div>
</template>

<script>
import ClusterCompleteBadge from './ClusterCompleteBadge.vue';
import QualityBadge from './QualityBadge.vue';
import BgcType from './BgcType.vue';


export default {
  name: "EntryTableRow",
  props: {
    entry: Object,
    idx: Number,
  },
  components: {
    ClusterCompleteBadge,
    QualityBadge,
    BgcType
  },
  computed: {
    bgClass() {
      let muted = this.entry.status === 'retired' || this.entry.status === 'pending';
      return {
        'bg-white': this.idx % 2 == 0,
        'bg-gray-100': this.idx % 2 == 1,
        'text-opacity-50': muted,
      }
    },
    products() {
      const products = [];
      this.entry.products.forEach((entry) => {
        products.push(entry.name);
      });
      return products.join(", ");
    },
  },
  methods: {
    showEntry() {
      window.open('/go/' + this.entry.accession, '_blank');
    }
  },
};

</script>
