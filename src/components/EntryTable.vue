<template>
  <div class="mb-3 flex items-center space-x-2">
    <label for="filter" class="font-semibold">Filter:</label>
    <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
      <SearchIcon class="w-5 h-5 absolute ml-3 pointer-events-none" />
      <input id="filter" name="filter" v-model="filter" @input="resetLimit" type="text" placeholder="Filter"
        class="pr-3 pl-10 form-input rounded-lg border-blue-mibig-dark border-opacity-50 focus:border-opacity-100">
    </div>
  </div>
  <div>
    <div class="grid grid-cols-4 grid-flow-row-dense lg:grid-cols-6 2xl:grid-cols-12 font-semibold border-b-2 border-blue-mibig-dark border-opacity-50">
      <div id="accession" @click="setSort" class="col-span-1 flex items-center overflow-auto">
        Accession
        <component v-if="sortValue === 'accession'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="quality" @click="setSort" class="col-span-1 text-center flex items-center overflow-auto">
        Quality
        <component v-if="sortValue === 'quality'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="status" @click="setSort" class="col-span-1 text-center flex items-center overflow-auto">
        Status
        <component v-if="sortValue === 'status'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="completeness" @click="setSort" class="col-span-1 text-center flex items-center overflow-auto">
        Completeness
        <component v-if="sortValue === 'completeness'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="main-product" @click="setSort" class="col-span-4 flex items-center overflow-auto">
        Main product(s)
        <component v-if="sortValue === 'main-product'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="bgc-type" @click="setSort" class="col-span-2 flex items-center overflow-auto">
        Biosynthetic class(es)
        <component v-if="sortValue === 'bgc-type'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
      <div id="organism" @click="setSort" class="col-span-2 flex items-center overflow-auto">
        Organism
        <component v-if="sortValue === 'organism'" class="w-4 h-4"
          :is="sortDirection > 0 ? 'ArrowNarrowUpIcon' : 'ArrowNarrowDownIcon'" />
      </div>
    </div>
    <EntryTableRow v-for="(entry, idx) in finalData" :key="entry.accession" :entry="entry" :idx="idx" />
  </div>
</template>


<script>
import { nextTick } from 'vue';
import { SearchIcon, ArrowNarrowDownIcon, ArrowNarrowUpIcon } from "@heroicons/vue/outline";

import EntryTableRow from "../components/EntryTableRow.vue";

const STEP = 200;

const stringContains = (string, text) => {
  return string.toLowerCase().indexOf(text) >= 0;
}

const arrayContains = (array, text) => {
  if (!array) return false;
  return array.some((element) => {
    return stringContains(element.name, text);
  });

}

const sortString = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0
}

const sortName = (a, b) => {
  if (a === undefined || b === undefined ){
    return 0;
  }
  return sortString(a.name, b.name);
}

const sortNameArray = (a, b) => {
  const sorted_a = [...a].sort(sortName);
  const sorted_b = [...b].sort(sortName);
  return sortName(sorted_a[0], sorted_b[0]);
}

export default {
  computed: {
    filteredData() {
      if (!this.filter || this.filter.length < 3) return this.records;

      const text = this.filter.toLowerCase();
      let data = this.records.filter((entry) => {
        if (stringContains(entry.accession, text)) return true;
        if (arrayContains(entry.products, text)) return true;
        if (arrayContains(entry.classes, text)) return true;
        if (stringContains(entry.organism, text)) return true;
        if (stringContains(entry.status, text)) return true;
        if (stringContains(entry.completeness, text)) return true;
        if (stringContains(entry.quality, text)) return true;

      });
      return data;
    },
    sortedData() {
      let data = this.filteredData;
      let sort_fn = null;

      switch (this.sortValue) {
        case "accession": sort_fn = (a, b) => sortString(a.accession, b.accession); break;
        case "completeness": sort_fn = (a, b) => sortString(a.completeness, b.completeness); break;
        case "quality": sort_fn = (a, b) => sortString(a.quality, b.quality); break;
        case "status": sort_fn = (a, b) => sortString(a.status, b.status); break;
        case "main-product": sort_fn = (a, b) => sortNameArray(a.products, b.products); break;
        case "bgc-type": sort_fn = (a, b) => sortNameArray(a.classes, b.classes); break;
        case "organism": sort_fn = (a, b) => sortString(a.organism, b.organism); break;
      }

      return data.sort((a, b) => {
        const res = sort_fn(a, b);
        return res * this.sortDirection;
      });
    },
    finalData() {
      let data = this.sortedData;
      return data.slice(0, this.limit + 1);
    },

  },
  data() {
    return {
      limit: STEP,
      filter: "",
      sortValue: "accession",
      sortDirection: 1,
      recordsLength: 0,
    }
  },
  methods: {
    resetLimit() {
      this.limit = STEP;
      this.loadMoreWhenIdle();
    },
    setSort(event) {
      if (this.sortValue === event.target.id) {
        this.sortDirection = -this.sortDirection;
      } else {
        this.sortValue = event.target.id;
        this.sortDirection = 1;
      }
    },
    bumpLimit() {
      this.limit = this.limit + STEP;
      if (this.limit < this.recordsLength) {
        this.loadMoreWhenIdle();
      };
    },
    loadMoreWhenIdle() {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(this.bumpLimit);
      } else {
        setTimeout(() => {
          nextTick(this.bumpLimit);
        }, 300);
      }
    },
  },
  watch: {
    records: {
      immediate: true,
      handler() {
        this.recordsLength = this.records.length;
      },
    },
    recordsLength(oldLen, newLen) {
      this.loadMoreWhenIdle();
    },
  },
  name: "EntryTable",
  components: {
    ArrowNarrowDownIcon,
    ArrowNarrowUpIcon,
    EntryTableRow,
    SearchIcon,
  },
  props: {
    records: Array,
  },
  mounted() {
    this.loadMoreWhenIdle();
  }
}
</script>

<style></style>
