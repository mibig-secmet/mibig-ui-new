<template>
  <div id="download">
    <div class="mt-4 mx-auto max-w-4xl text-justify">
      MIBiG data are available for download in several formats. The MIBiG annotations/metadata themselves are available
      in JSON format, while the sequences of the biosynthetic gene clusters are available in GBK format. A FASTA file
      with amino acid sequence translations of all genes from MIBiG entries is also available; this can e.g., be used
      for BLAST searches to identify homologues of a query gene within any of the experimentally characterized gene
      clusters.
    </div>

    <ReleaseEntry v-for="release in releases" :version="release.version" :date="release.date" />
  </div>
</template>

<script setup>

import ReleaseEntry from "../components/ReleaseEntry.vue";

const releases = [
  {
    version: "4.0rc1",
    date: "September 15, 2024",
  },
  {
    version: "3.1",
    date: "October 7, 2022",
  },
  {
    version: "3.0",
    date: "September 15, 2022",
  },
  {
    version: "2.0",
    date: "October 16, 2021",
  },
  {
    version: "1.4",
    date: "August 6, 20218",
  },
  {
    version: "1.3",
    date: "September 3, 2016",
  },
  {
    version: "1.2",
    date: "Decembe 24, 2015",
  },
  {
    version: "1.1",
    date: "August 17, 2015",
  },
  {
    version: "1.0",
    date: "June 12, 2015",
  },
];

</script>
