<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLayout } from '@/layout/composables/layout';

const route = useRoute();
const router = useRouter();

const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle, isHorizontal, isDesktop, isOverlay, isStatic, openTab } = useLayout();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

const isActiveMenu = ref(false);
const itemKey = ref(null);
const subMenuRef = ref(null);
const menuItemRef = ref(null);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

    const activeItem = layoutState.activeMenuItem.value;

    isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
    handleRouteChange(route.path);
});

watch(
    () => layoutState.activeMenuItem.value,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);

watch(
    () => layoutConfig.menuMode.value,
    () => {
        isActiveMenu.value = false;
    }
);

watch(
    () => layoutState.overlaySubmenuActive.value,
    (newValue) => {
        if (!newValue) {
            isActiveMenu.value = false;
        }
    }
);
watch(
    () => route.path,
    (newPath) => {
        if (!isHorizontal.value && props.item.to && props.item.to === newPath) {
            setActiveMenuItem(itemKey);
        } else if (isHorizontal.value) {
            isActiveMenu.value = false;
        }
    }
);

const handleRouteChange = (newPath) => {
    if (!isHorizontal.value && props.item.to && props.item.to === newPath) {
        setActiveMenuItem(itemKey);
    } else if (isHorizontal.value) {
        isActiveMenu.value = false;
    }
};

watch(() => route.path, handleRouteChange);

const itemClick = async (event, item) => {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    const { overlayMenuActive, staticMenuMobileActive } = layoutState;

    if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
        onMenuToggle();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    // add tab
    if (event.metaKey && item.to && (!item.data || !item.data.fullPage)) {
        router.push(item.to);
        openTab(item);
        event.preventDefault();
    }

    if (item.items) {
        if (props.root && isActiveMenu.value && isHorizontal.value) {
            layoutState.overlaySubmenuActive.value = false;
            layoutState.menuHoverActive.value = false;

            return;
        }

        setActiveMenuItem(isActiveMenu.value ? props.parentItemKey : itemKey);

        if (props.root && !isActiveMenu.value && isHorizontal.value) {
            layoutState.overlaySubmenuActive.value = true;
            layoutState.menuHoverActive.value = true;
            isActiveMenu.value = true;
        }
    } else {
        if (!isDesktop) {
            layoutState.staticMenuMobileActive.value = !layoutState.staticMenuMobileActive.value;
        }

        if (isHorizontal.value) {
            layoutState.overlaySubmenuActive.value = false;
            layoutState.menuHoverActive.value = false;

            return;
        }

        setActiveMenuItem(itemKey);
    }
};

const onMouseEnter = () => {
    if (props.root && isHorizontal.value && isDesktop) {
        if (!isActiveMenu.value && layoutState.menuHoverActive.value) {
            setActiveMenuItem(itemKey);
        }
    }
};

const checkActiveRoute = (item) => {
    return route.path === item.to;
};
</script>

<template>
    <li ref="menuItemRef" :class="{ 'layout-root-menuitem': root, 'active-menuitem': isStatic || isOverlay ? !root && isActiveMenu : isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">
            <span>{{ item.label }}</span> <i class="layout-menuitem-root-icon"></i>
        </div>
        <a v-if="(!item.to || item.items) && item.visible !== false" :href="item.url" @click="itemClick($event, item, index)" :class="item.class" :target="item.target" tabindex="0" @mouseenter="onMouseEnter">
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </a>
        <router-link v-if="item.to && !item.items && item.visible !== false" @click="itemClick($event, item, index)" :class="[item.class, { 'active-route': checkActiveRoute(item) }]" tabindex="0" :to="item.to" @mouseenter="onMouseEnter">
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </router-link>

        <ul ref="subMenuRef" :class="{ 'layout-root-submenulist': root }" v-if="item.items && item.visible !== false">
            <AppMenuItem v-for="(child, i) in item.items" :key="child" :index="i" :item="child" :parentItemKey="itemKey" :root="false"></AppMenuItem>
        </ul>
    </li>
</template>
