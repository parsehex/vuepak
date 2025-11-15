<template>
	<ClientOnly>
		<JsonViewer :data="jsonData" />
	</ClientOnly>
</template>
<script setup lang="ts">
import { JsonViewer } from '@parsehex/vuepak'

const jsonData = {
	name: "Vuepak",
	version: "0.1.6",
	components: ["JsonViewer", "Spinner"]
}
</script>
