<template>
  <div class="my-2 mx-auto max-w-4xl">
    <span class="font-bold">Version {{ props.version }} ({{ props.date }})</span><br>
    All entries in <a class="text-blue-mibig" :href="`https://dl.secondarymetabolites.org/mibig/mibig_json_${props.version}.tar.gz`">JSON</a> format.<br>
    All entries in <a class="text-blue-mibig" :href="`https://dl.secondarymetabolites.org/mibig/mibig_gbk_${props.version}.tar.gz`">GBK</a> format.<br>
    All genes from MIBiG entries in <a class="text-blue-mibig" :href="`https://dl.secondarymetabolites.org/mibig/mibig_prot_seqs_${props.version}.fasta`">FASTA</a> format (amino acid sequences).<br>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(['version', 'date']);
</script>
