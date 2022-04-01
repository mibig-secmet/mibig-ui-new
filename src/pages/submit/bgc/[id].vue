<template>
	<div id="submit" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
		<h1 class="py-6 mb-4 text-4xl font-semibold text-gray-700 border-b border-gray-300">
			Submit an MIBiG entry
		</h1>
		<div v-if="entry" class="flex space-x-10">
			<form action="" method="post">
				<h2 class="text-gray-700 text-sm font-bold mb-1">
					{{ entry.cluster.mibig_accession }} - {{ entry.cluster.loci.accession }} -
					{{ compoundList }}
				</h2>
				<div>
					<label for=""></label>
					<input type="text" name="" id="" class="border rounded w-full" />
				</div>
				<div class="mb-4">
					<label class="text-gray-700 text-sm font-bold mb-2" for="locus">
						Locus :
					</label>

					<div class="flex rounded-md shadow">
						<router-link
							class="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md hover:bg-blue-500 bg-blue-700 text-white"
							to="/submit/locus"
						>
							AB0123456
						</router-link>
					</div>
					<div>
						<h2>Biosynthetic classes :</h2>

						<div class="mb-4 flex space-x-10">
							<input
								class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="locus"
								type="text"
								placeholder="MRP"
							/>
							<input
								class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="biosynthentic"
								type="text"
								placeholder="Sacharrides"
							/>
							<button
								class="cursor-pointer hover:bg-blue-500 bg-blue-700 px-3 text-white rounded-full"
							>
								Add
							</button>
						</div>
					</div>
					<div>
						<h2>Organism Name :</h2>
						<div class="mb-4 flex space-x-10">
							<input
								class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="locus"
								type="text"
								placeholder="streptomyces"
							/>
						</div>
					</div>
					<div>
						<h2>NCBI Tax ID :</h2>
						<div class="mb-4 flex space-x-10">
							<input
								class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="locus"
								type="text"
								placeholder="NCBI Tax ID"
							/>
						</div>
					</div>
					<div>
						<h2>Publications :</h2>
						<div class="mb-4 flex space-x-10">
							<input
								class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="compounds"
								type="text"
								placeholder="PubMed 1234567"
							/>
						</div>
					</div>
				</div>
				<button
					class="cursor-pointer bg-blue-700 p-2 hover:bg-blue-500 text-white rounded-full"
				>
					Submit
				</button>
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
			};
		},

		mounted() {
			fetch('http://localhost:6424/api/v1/prefill/new/abc' + this.id)
				.then((res) => res.json())
				.then((data) => {
					this.ongoing = [data];
					console.log(data);
				})
				.catch((err) => console.log(err.message));
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
				return this.entry.cluster.compounds
					.map((c) => {
						return c.compound;
					})
					.join(', ');
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
