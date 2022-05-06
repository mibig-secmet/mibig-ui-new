<template>
  <div id="activate" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
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
      Activate your account
    </h1>
    <form @submit.prevent="activate">
      <div class="mx-auto mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label for="email" class="block">
            <span class="text-gray-700">Token</span>
            <input
              v-model="token"
              type="text"
              name="token"
              id="token"
              class="
                mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-black
              "
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
            value="Activate my account"
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
      token: "",
    };
  },
  methods: {
    async activate() {
      const { token } = this;
      const res = await fetch("/api/v1/user/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
