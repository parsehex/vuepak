<template>
	<ClientOnly>
		<button @click="toggleLoading">Toggle</button>
		<Spinner v-if="loading" />
	</ClientOnly>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Spinner } from '@parsehex/vuepak'

const loading = ref(true)

function toggleLoading() {
	loading.value = !loading.value
}
</script>
<style scoped>
button {
	margin-bottom: 10px;
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
}

button:hover {
	background-color: #0056b3;
}
</style>
