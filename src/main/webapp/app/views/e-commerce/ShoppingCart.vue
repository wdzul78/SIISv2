<script setup>
import { ref } from 'vue';

const quantityOptions = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
];
const selectedQuantity = ref({ label: '1', value: 1 });
const selectedQuantity2 = ref({ label: '1', value: 1 });
</script>

<template>
    <div class="card">
        <div class="flex flex-column align-items-center mb-6">
            <div class="text-900 text-4xl mb-4 font-medium">Your cart total is $82.00</div>
            <p class="text-700 font-medium text-xl mt-0 mb-4">FREE SHIPPING AND RETURN</p>
            <Button label="Check Out" />
        </div>
        <ul class="list-none p-0 m-0">
            <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
                <img src="/content/demo/images/ecommerce/shopping-cart/shopping-cart-2-1.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-1" />
                <div class="flex-auto py-5 md:pl-5">
                    <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                        <div class="w-full sm:w-6 flex flex-column">
                            <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                            <span class="text-700">Medium</span>
                        </div>
                        <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                            <div>
                                <Dropdown :options="quantityOptions" v-model="selectedQuantity" optionLabel="label"></Dropdown>
                            </div>
                            <div class="flex flex-column sm:align-items-end">
                                <span class="text-900 text-xl font-medium mb-2 sm:mb-3">$20.00</span>
                                <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300" tabindex="0"> Remove </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column">
                        <span class="inline-flex align-items-center mb-3">
                            <i class="pi pi-envelope text-700 mr-2"></i>
                            <span class="text-700 mr-2">Order today.</span>
                        </span>
                        <span class="inline-flex align-items-center mb-3">
                            <i class="pi pi-send text-700 mr-2"></i>
                            <span class="text-700 mr-2"> Delivery by <span class="font-bold">Dec 23.</span> </span>
                        </span>
                        <span class="flex align-items-center">
                            <i class="pi pi-exclamation-triangle text-700 mr-2"></i>
                            <span class="text-700">Only 8 Available.</span>
                        </span>
                    </div>
                </div>
            </li>
            <li class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center">
                <img src="/content/demo/images/ecommerce/shopping-cart/shopping-cart-2-2.png" class="w-12rem flex-shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-2" />
                <div class="flex-auto py-5 md:pl-5">
                    <div class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
                        <div class="w-full sm:w-6 flex flex-column">
                            <span class="text-900 text-xl font-medium mb-3">Product Name</span>
                            <span class="text-700">Medium</span>
                        </div>
                        <div class="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
                            <div>
                                <Dropdown :options="quantityOptions" v-model="selectedQuantity2" optionLabel="label"></Dropdown>
                            </div>
                            <div class="flex flex-column sm:align-items-end">
                                <span class="text-900 text-xl font-medium mb-2 sm:mb-3">$62.00</span>
                                <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300" tabindex="0"> Remove </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column">
                        <span class="inline-flex align-items-center mb-3">
                            <i class="pi pi-envelope text-700 mr-2"></i>
                            <span class="text-700 mr-2">Order today.</span>
                        </span>
                        <span class="inline-flex align-items-center mb-3">
                            <i class="pi pi-send text-700 mr-2"></i>
                            <span class="text-700 mr-2"> Delivery by <span class="font-bold">Dec 23.</span> </span>
                        </span>
                        <span class="flex align-items-center">
                            <i class="pi pi-exclamation-triangle text-700 mr-2"></i>
                            <span class="text-700">Only 2 Available.</span>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="flex">
            <div class="w-12rem hidden md:block"></div>
            <ul class="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
                <li class="flex justify-content-between mb-4">
                    <span class="text-xl text-900 font-semibold">Subtotal</span>
                    <span class="text-xl text-900">$82.00</span>
                </li>
                <li class="flex justify-content-between mb-4">
                    <span class="text-xl text-900 font-semibold">Shipping</span>
                    <span class="text-xl text-900">Free</span>
                </li>
                <li class="flex justify-content-between mb-4">
                    <span class="text-xl text-900 font-semibold">VAT</span>
                    <span class="text-xl text-900">$8.00</span>
                </li>
                <li class="flex justify-content-between border-top-1 surface-border mb-4 pt-4">
                    <span class="text-xl text-900 font-bold text-3xl">Total</span>
                    <span class="text-xl text-900 font-bold text-3xl">$90.00</span>
                </li>
                <li class="flex justify-content-end">
                    <Button label="Check Out"></Button>
                </li>
            </ul>
        </div>
    </div>
</template>
