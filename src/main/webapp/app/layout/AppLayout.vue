<script setup>
import { computed, watch, ref, onBeforeUnmount } from 'vue';
import { usePrimeVue } from 'primevue/config';
import AppTopbar from './AppTopbar.vue';
import AppConfig from './AppConfig.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppSidebar from './AppSidebar.vue';
import AppFooter from './AppFooter.vue';
import AppRightMenu from './AppRightMenu.vue';
import { useLayout } from '@/layout/composables/layout';

const $primevue = usePrimeVue();
const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);
const sidebarRef = ref(null);
const topbarRef = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const containerClass = computed(() => {
    return [
        'layout-container',
        {
            'layout-light': layoutConfig.colorScheme.value === 'light',
            'layout-dark': layoutConfig.colorScheme.value === 'dark',
            'layout-dim': layoutConfig.colorScheme.value === 'dim',
            'layout-static': layoutConfig.menuMode.value === 'static',
            'layout-horizontal': layoutConfig.menuMode.value === 'horizontal',
            'layout-overlay': layoutConfig.menuMode.value === 'overlay',
            'layout-overlay-active': layoutState.overlayMenuActive.value,
            'layout-mobile-active': layoutState.staticMenuMobileActive.value,
            'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
            'p-ripple-disabled': $primevue.config.ripple === false
        },
        'layout-topbar-' + layoutConfig.topbarTheme.value,
        'layout-menu-' + layoutConfig.menuTheme.value
    ];
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.overlaySubmenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
                layoutState.rightMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!sidebarRef.value) return;

    const sidebarEl = sidebarRef?.value.$el;
    const topbarDesktopEl = topbarRef?.value.$el.querySelector('.layout-menu-button-desktop');
    const topbarMobileEl = topbarRef?.value.$el.querySelector('.layout-menu-button-mobile');

    return !(
        sidebarEl.isSameNode(event.target) ||
        sidebarEl.contains(event.target) ||
        topbarDesktopEl.isSameNode(event.target) ||
        topbarDesktopEl.contains(event.target) ||
        topbarMobileEl.isSameNode(event.target) ||
        topbarMobileEl.contains(event.target)
    );
};
</script>

<template>
    <div :class="containerClass">
        <AppTopbar ref="topbarRef" />
        <AppRightMenu />
        <AppSidebar ref="sidebarRef" />

        <div class="layout-content-wrapper">
            <AppBreadcrumb />
            <div class="layout-content">
                <router-view />
            </div>
            <AppFooter />
        </div>

        <AppConfig />

        <div v-if="layoutState.staticMenuMobileActive" class="layout-mask"></div>
    </div>
    <Toast />
</template>
