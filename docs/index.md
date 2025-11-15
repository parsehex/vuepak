# @parsehex/vuepak

Vuepak is a component library for Vue intended for [my](https://parsehex.github.io/) own use.

## Install

:::code-group

```bash [1. Install]
npm install @parsehex/vuepak
```

```ts [2. Import styles]
// main.js
import '@parsehex/vuepak/vuepak.css';
```

:::

## Components

### JsonViewer

To use, import the `JsonViewer` component and pass data using the `data` prop. The data can be any kind of type.

#### Object

```vue
<template>
  <JsonViewer :data="jsonData" />
</template>

<script setup>
import { JsonViewer } from '@parsehex/vuepak';

const jsonData = {
  name: 'Vuepak',
  version: '0.1.6',
  components: ['JsonViewer', 'Spinner'],
};
</script>
```

Result:

<DemoJsonViewerObject />

#### String

```vue
<template>
  <JsonViewer :data="jsonData" />
</template>
<script setup lang="ts">
import { JsonViewer } from '@parsehex/vuepak';

const jsonData = 'Test value';
</script>
```

Result:

<DemoJsonViewerString />

### Spinner

To use, import the `Spinner` component and use `v-if` to control whether to display it.

```vue{3}
<template>
  <button @click="toggleLoading">Toggle</button>
  <Spinner v-if="loading" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Spinner } from '@parsehex/vuepak';

const loading = ref(true);

function toggleLoading() {
  loading.value = !loading.value;
}
</script>
```

Result:

<DemoSpinner />
