<template>
	<div id="submit" class="mx-auto p-4 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
		<h1 class="py-6 mb-4 text-4xl font-semibold text-gray-700 border-b border-gray-300">
			Locus
		</h1>
		<div class="mt-8">
			<h3 class="text-lg">Databases:</h3>
			<select name="" id="" class="w-80"></select>
		</div>
		<div class="mt-8">
			<h3 class="text-lg">Identifier:</h3>
			<input v-model="Identifier" placeholder="add identifier" class="border w-80" />
		</div>
		<div class="mt-8 flex gap-x-5">
			<div>
				<span><h3>Contains Whole Cluster ?</h3></span>
			</div>
			<div class="px-10 space-x-4">
				<input
					type="radio"
					id="yes"
					value="yes"
					v-model="cluster"
					checked
					name="cluster"
					class="cursor-pointer"
				/>
				<label for="yes">Yes</label>
				<input
					type="radio"
					id=""
					value="no"
					v-model="cluster"
					name="cluster"
					class="cursor-pointer"
				/>
				<label for="no">No</label>
				<input
					type="radio"
					id=""
					value="unknown"
					v-model="cluster"
					name="cluster"
					class="cursor-pointer"
				/>
				<label for="unknown" class="label-checked:bg-blue-200">Unknown</label>
			</div>
		</div>
		<div class="mt-8">
			<div>
				<span><h3>Evidence for locus-compound link :</h3></span>
				<span
					class="inline-flex items-center justify-center mr-2 text-xs font-bold leading-none text-white bg-blue-500 hover:bg-blue-700 rounded-full mb-2 py-2 px-4 mt-3"
					>Add :</span
				>
				<input
					class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
					type="text"
					placeholder="Add link here"
				/>
			</div>
		</div>
		<div class="mt-4 bg-blue-700 max-w-min text-white p-2 rounded-full">
			<h2>Evidence</h2>
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
				FAKE_DB: {
					BGC0000536: {
						changelog: '',
						cluster: {
							biosyn_class: ['RiPP'],
							compounds: [
								{
									compound: 'nisin Q',
								},
							],
							loci: {
								accession: 'AB362350.1',
								completeness: 'Unknown',
							},
							mibig_accession: 'BGC0000536',
							minimal: true,
							ncbi_tax_id: '1358',
							organism_name: 'Lactococcus lactis',
							publications: ['pubmed:19120645'],
							ripp: {
								subclass: 'Lanthipeptide',
							},
						},
					},
				},
			};
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

<style></style>
