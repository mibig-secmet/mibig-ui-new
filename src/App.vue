<template>
  <div id="nav" class="
      bg-gray-700
      text-gray-100
      flex flex-col
      lg:flex-row
      flex-wrap
      rounded
      border-b-4 border-blue-mibig
    ">
    <router-link to="/" class="flex-1 flex">
      <img alt="MIBiG logo" class="h-10 m-2" src="./assets/logo.svg" />
      <div class="flex-1 center xl:text-lg self-center">
        Minimum Information about a Biosynthetic Gene Cluster
      </div>
    </router-link>
    <div class="flex flex-wrap justify-between">
      <div class="flex-1 self-center" v-for="target in nav_targets" :key="target.name">
        <router-link class="m-2 flex items-center" :to="target.url">
          <component class="w-4 h-4" :is="target.icon"></component>
          <span class="ml-1">{{ target.name }}</span>
        </router-link>
      </div>
      <div v-if="false" class="flex-1 self-center">
        <router-link class="m-2 flex items-center" to="/user/login">
          <UserIcon class="w-4 h-4"></UserIcon>
          <span class="ml-1">Login</span>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
  <footer class="
      max-w-5xl
      mx-auto
      pt-2
      flex flex-row
      justify-between
      border-t border-blue-mibig
    ">
    <div class="w-2/12">
      <img alt="MIBiG logo" src="./assets/logo.svg" />
    </div>
    <div class="bg-gray-200 rounded-md p-4 w-6/12 text-sm">
      Comments or questions on MIBiG? Please do not hesitate to
      <a class="text-blue-mibig" href="mailto:mibig@secondarymetabolites.org">
        <MailIcon class="w-4 h-4 inline" /> contact
      </a>
      us.
      <div class="flex flex-col md:flex-row justify-between items-center">
        <a class="text-blue-600" rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" loading="lazy" />
        </a>
        <div class="md:pl-2">
          This work is licensed under a
          <a class="text-blue-mibig" rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License.</a>
        </div>
      </div>
      <div>
        If you found MIBiG useful, please cite Terlouw, Blin, et al.
        <i>Nucl. Acids. Res.</i> gkac1049, doi:
        <a class="text-blue-mibig" href="https://doi.org/10.1093/nar/gkac1049">10.1093/nar/gkac1049</a>.
      </div>
    </div>
    <div class="w-3/12">
      <img alt="GSC logo" src="./assets/gsc_logo2.png" />
    </div>
  </footer>
</template>

<script setup>
import {
  HomeIcon,
  ChartBarIcon,
  SearchIcon,
  LibraryIcon,
  PaperAirplaneIcon,
  DownloadIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/vue/outline";

const nav_targets = [
  { name: "Home", icon: HomeIcon, url: "/" },
  { name: "Statistics", icon: ChartBarIcon, url: "/stats" },
//  { name: "Search", icon: SearchIcon, url: "/search" },
  { name: "Repository", icon: LibraryIcon, url: "/repository" },
  //{ name: "Submit", icon: PaperAirplaneIcon, url: "/submit" },
  { name: "Download", icon: DownloadIcon, url: "/download" },
];
</script>
