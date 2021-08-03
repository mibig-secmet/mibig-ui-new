<template>
  <div id="home" class="mx-auto p-4 max-w-5xl 2xl:max-w-full">
    <h1 class="py-6 mb-4 text-2xl text-gray-500 border-b border-gray-300">
      <img class="inline h-12" alt="MIBiG logo" src="../assets/logo.svg" />
      Minimum Information about a Biosynthetic Gene cluster
    </h1>
    <div class="grid grid-cols-1 2xl:grid-cols-2">
      <div class="mx-auto">
        <img
          class="mx-auto"
          alt="MIBiG summary"
          src="../assets/MIBiG_figure_online_600.jpg"
        />
      </div>
      <div class="mt-4 mx-auto max-w-4xl text-justify">
        <p class="mb-2">
          The Minimum Information about a Biosynthetic Gene cluster (MIBiG)
          specification provides a robust community standard for annotations and
          metadata on biosynthetic gene clusters and their molecular products.
          <br />
          MIBiG is a Genomic Standards Consortium project that builds on the
          Minimum Information about any Sequence (MIxS) framework.
        </p>

        <p class="mb-2">
          MIBiG will facilitate the standardized deposition and retrieval of
          biosynthetic gene cluster data as well as the development of
          comprehensive comparative analysis tools. It will empower
          next-generation research on the biosynthesis, chemistry and ecology of
          broad classes of societally relevant bioactive secondary metabolites,
          guided by robust experimental evidence and rich metadata components.
        </p>

        <p class="mb-2">
          The JSON specifications of the MIBiG schema and options are freely
          available for download and can be used to validate MIBiG data from
          other sources. Also, a tarball with all MIBiG entries in raw JSON
          format is available for download. To get an idea of what kind of
          information is included in MIBiG entries, please have a look at the
          visualized entries for erythromycin, actinorhodin, calcium-dependent
          antibiotic, microbisporicin and marneral. They can be downloaded in
          JSON format by clicking the corresponding button (down-pointing arrow)
          at the top right of their page.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
