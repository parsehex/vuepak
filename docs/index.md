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

#### Code

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

#### Preview

<DemoJsonViewer />

### Spinner

#### Code

```vue
<template>
	<Spinner />
</template>

<script setup>
import { Spinner } from '@parsehex/vuepak';
</script>
```

#### Preview

<DemoSpinner />
