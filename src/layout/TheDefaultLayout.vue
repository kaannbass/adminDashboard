// Path: src\layouts\TheDefaultLayout.vue

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <v-layout>
        <v-main>
            <h2>TheDefaultLayout</h2>
            <slot></slot>
        </v-main>
    </v-layout>
</template>
