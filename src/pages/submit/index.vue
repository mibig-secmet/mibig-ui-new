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
      Submit MIBiG entries
    </h1>
    <div>
      <h2 class="text-lg text-gray-700 font-semibold mb-2 py-4">
        Ongoing requests
      </h2>
      <div class="w-2/3 mx-auto">
        <div class="rounded w-full shadow-md">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <td
                  class="
                    py-2
                    px-3
                    bg-gray-50
                    font-bold
                    uppercase
                    text-gray-700
                    border-b border-gray-400
                  "
                >
                  Accession
                </td>
                <td
                  class="
                    py-2
                    px-3
                    bg-gray-50
                    font-bold
                    uppercase
                    text-gray-700
                    border-b border-gray-400
                  "
                >
                  Locus
                </td>
                <td
                  class="
                    py-2
                    px-3
                    bg-gray-50
                    font-bold
                    uppercase
                    text-gray-700
                    border-b border-gray-400
                  "
                >
                  Compound
                </td>
                <td
                  class="
                    py-2
                    px-3
                    bg-gray-50
                    font-bold
                    uppercase
                    text-gray-700
                    border-b border-gray-400
                  "
                >
                  Status
                </td>
                <td
                  class="
                    py-2
                    px-3
                    bg-gray-50
                    font-bold
                    uppercase
                    text-gray-700
                    border-b border-gray-400
                  "
                >
                  Actions
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(entry, idx) in ongoing"
                :key="entry.accession"
                :class="[
                  'hover:bg-gray-200',
                  idx % 2 == 0 ? '' : 'bg-gray-100',
                ]"
              >
                <td class="py-2 px-3">{{ entry.accession }}</td>
                <td class="py-2 px-3">{{ entry.locus }}</td>
                <td class="py-2 px-3">{{ entry.compound }}</td>
                <td class="py-2 px-3">
                  <submission-status :status="entry.status"></submission-status>
                </td>
                <td class="py-2 px-3">
                  <router-link
                    class="text-blue-mibig"
                    :to="`/submit/bgc/${entry.accession}`"
                    >Edit</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="my-6">
        <router-link
          class="
            bg-blue-mibig
            text-white
            rounded-lg
            shadow-lg
            py-2
            px-4
            hover:bg-blue-mibig-light
            active:bg-blue-mibig-dark
          "
          to="/submit/new"
          >Request a new accession number</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmissionStatus from "../../components/SubmissionStatus.vue";

const ongoing = [
  {
    accession: "BGC0000536",
    locus: "AB362350.1",
    compound: "nisin Q",
    status: "changes",
  },
  {
    accession: "BGC2345678",
    locus: "NC_234567.8",
    compound: "Examplomycin B",
    status: "waiting",
  },
  {
    accession: "BGC3456789",
    locus: "NC_345678.9",
    compound: "Examplomycin C",
    status: "assigned",
  },
];
</script>
