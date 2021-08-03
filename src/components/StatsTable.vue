<template>
  <div class="py-4">
    <h2 class="text-2xl font-semibold text-gray-800">
      {{ title }}
      <small class="text-base font-normal text-gray-500">{{ subtitle }}</small>
    </h2>
    <ul class="grid grid-cols-2 text-sm font-semibold">
      <li
        :class="[
          'p-2',
          'rounded-sm',
          'border',
          'border-gray-200',
          'flex',
          'items-center',
          'justify-between',
          entry.single ? 'col-span-2 bg-gray-200' : '',
        ]"
        v-for="entry in records"
        :key="entry.description"
      >
        <span>{{ entry.description }}:</span>
        <span
          :class="[
            badge
              ? `text-xs rounded-xl px-1.5 py-0.5 ${entry.css_class? entry.css_class: 'text-gray-100 bg-gray-600'}`
              : 'text-blue-mibig',
          ]"
          >{{ entry.count }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StatsTable",
  props: {
    records: Array,
    title: String,
    subtitle: String,
    badge: Boolean,
  },
};
</script>