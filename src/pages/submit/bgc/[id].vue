<template>
  <div id="submit" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
    <h1
      class="
        py-6
        mb-4
        text-4xl
        font-semibold
        text-gray-700
        border-b border-gray-300
      "
    >
      Submit an MIBiG entry
    </h1>
    <div v-if="entry">
      <form action="" method="post">
        <h2>{{ entry.cluster.mibig_accession }} - {{ entry.cluster.loci.accession }} - {{ compoundList }}</h2>
        <div>
          <label for=""></label>
          <input type="text" name="" id="" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      entry: null,
      FAKE_DB: {
        BGC0000536: {
          changelog: "",
          cluster: {
            biosyn_class: ["RiPP"],
            compounds: [
              {
                compound: "nisin Q",
              },
            ],
            loci: {
              accession: "AB362350.1",
              completeness: "Unknown",
            },
            mibig_accession: "BGC0000536",
            minimal: true,
            ncbi_tax_id: "1358",
            organism_name: "Lactococcus lactis",
            publications: ["pubmed:19120645"],
            ripp: {
              subclass: "Lanthipeptide",
            },
          },
        },
      },
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(value) {
        this.fakeFetch(value).then((data) => {
          console.log(data.cluster);
          this.entry = data;
        });
      },
    },
  },
  computed: {
    compoundList() {
      if (!this.entry || !this.entry.cluster || !this.entry.cluster.compounds) {
        return 'meh';
      }
      return this.entry.cluster.compounds.map((c) => {
        return c.compound;
      }).join(", ");
    },
  },
  methods: {
    async fakeFetch(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.FAKE_DB[id]);
        }, 250);
      });
    },
  },
};
</script>