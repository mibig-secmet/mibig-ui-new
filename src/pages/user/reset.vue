<template>
  <div id="reset" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
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
      Reset Password
    </h1>
    <form @submit.prevent="reset">
      <div class="mx-auto mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label for="email" class="block">
            <span class="text-gray-700">Email Address</span>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              class="
                mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-black
              "
              placeholder="alice@example.edu"
            />
          </label>
          <input
            type="submit"
            class="
              bg-blue-mibig
              text-white
              font-semibold
              text-center
              rounded-lg
              shadow-lg
              py-2
              px-4
              hover:bg-blue-mibig-light
              active:bg-blue-mibig-dark
            "
            value="Reset password"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async reset() {
      const { email } = this;
      const res = await fetch("/api/v1/user/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
