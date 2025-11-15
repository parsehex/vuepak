<template>
	<ClientOnly>
		<JsonViewer :data="jsonData" />
	</ClientOnly>
</template>
<script setup lang="ts">
import { JsonViewer } from '@parsehex/vuepak'

const jsonData = 'Test value'
</script>
