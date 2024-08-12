<script setup>
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();
</script>

<template>
    <div class="layout-footer">
        <img id="footer-logo" :src="'/content/layout/images/logo-' + (layoutConfig.colorScheme.value === 'light' ? 'poseidon' : 'poseidon-dark') + '.png'" alt="posedion-layout" />
        <div class="flex gap-2">
            <Button type="button" icon="pi pi-github" rounded text plain />
            <Button type="button" icon="pi pi-facebook" rounded text plain />
            <Button type="button" icon="pi pi-twitter" rounded text plain />
        </div>
    </div>
</template>
