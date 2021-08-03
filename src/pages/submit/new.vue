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
      Request an MIBiG accession number
    </h1>
    <div>
      The first step in submitting MIBiG information on an experimentally
      characterized biosynthetic gene cluster is to request an MIBiG accession
      number for it. This will be used to pre-fill information in the submission
      form. We will contact you once your accession number has been activated.
    </div>
    <div class="pt-6">
      Please specify the main compound(s) produced by the cluster.
      <form
        class="mb-0 space-y-6"
        action="#"
        method="POST"
        @submit="submitForm"
      >
        <div
          v-for="(compound, index) in compounds"
          :key="index"
          class="flex justify-between items-center"
        >
          <label :for="`compound_${index}`" class="text-gray-700 font-semibold"
            >Compound {{ index + 1 }}</label
          >
          <div class="mt-1 flex-grow">
            <input
              type="text"
              :name="`compound_${index}`"
              :id="`compound_${index}`"
              class="max-w-xl w-full ml-3 rounded-lg shadow-sm"
              v-model="compounds[index]"
            />
          </div>
        </div>
        <div class="max-w-xs">
          <button
            class="
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-700
              bg-gray-200
              active:bg-gray-400
            "
            @click="addCompoundField"
            type="button"
          >
            Add additional compound
          </button>
        </div>
        <div class="flex justify-between items-center max-w-6xl mx-auto">
          <div class="flex justify-end items-center">
            <label for="accession" class="text-gray-700 font-semibold"
              >GenBank accession:</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="accession"
                id="accession"
                class="max-w-xl w-full ml-3 rounded-lg shadow-sm"
                v-model="accession"
              />
            </div>
          </div>
          <div class="flex justify-end items-center">
            <label for="start-nt" class="text-gray-700 font-semibold"
              >Start nt:</label
            >
            <div class="mt-1">
              <input
                type="number"
                name="start-nt"
                id="start-nt"
                class="max-w-xl w-full ml-3 rounded-lg shadow-sm"
                v-model="start_nt"
              />
            </div>
          </div>
          <div class="flex justify-end items-center">
            <label for="end-nt" class="text-gray-700 font-semibold"
              >End nt:</label
            >
            <div class="mt-1">
              <input
                type="number"
                name="end-nt"
                id="end-nt"
                class="max-w-xl w-full ml-3 rounded-lg shadow-sm"
                v-model="end_nt"
              />
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto">
          <button
            class="
              bg-blue-mibig
              text-white
              rounded-lg
              shadow-lg
              py-2
              w-full
              hover:bg-blue-mibig-light
              active:bg-blue-mibig-dark
            "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul class="list-disc">
          <li
            v-for="(error, idx) in errors"
            :key="idx"
            :class="[error.result == 'error' ? 'text-red-error' : 'text-orange-warning']"
          >
            {{ error.reason }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compounds: [""],
      accession: "",
      start_nt: null,
      end_nt: null,
      errors: [],
    };
  },
  methods: {
    addCompoundField() {
      this.compounds.push("");
    },
    async submitForm(e) {
      e.preventDefault();
      this.errors = [];
      if (this.accession === "") {
        this.errors.push({
          result: "error",
          reason: "GenBank accession required.",
        });
      } else {
        // TODO: Actually talk to the server here
        let name_check = await new Promise((resolve) => {
          setTimeout(() => {
            if (this.accession == "NC_003888") {
              resolve({ result: "error", reason: "Duplicate locus!" });
            } else if (this.compounds.includes("vancomycin")) {
              resolve({ result: "warning", reason: "Duplicate compound" });
            } else {
              resolve({ result: "ok", reason: "OK" });
            }
          }, 250);
        });

        if (["error", "warning"].includes(name_check.result)) {
          this.errors.push(name_check);
        }
      }
    },
  },
};
</script>
