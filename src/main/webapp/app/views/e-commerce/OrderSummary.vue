<script setup>
import { ref } from 'vue';

const products = ref([
    {
        name: 'Cotton Sweatshirt',
        size: 'Medium',
        color: 'White',
        price: '$12',
        quantity: '1',
        image: '/demo/images/ecommerce/ordersummary/order-summary-1-1.png'
    },
    {
        name: 'Regular Jeans',
        size: 'Large',
        color: 'Black',
        price: '$24',
        quantity: '1',
        image: '/demo/images/ecommerce/ordersummary/order-summary-1-2.png'
    }
]);
</script>

<template>
    <div class="card">
        <span class="text-700 text-xl">Thanks!</span>
        <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
        <p class="text-700 text-xl mt-0 mb-4 p-0">Your order is on the way. It&lsquo;ll be shipped today. We&lsquo;ll inform you.</p>
        <div :style="{ height: '3px', background: 'linear-gradient(90deg, var(--primary-color) 0%, rgba(33, 150, 243, 0) 50%)' }"></div>

        <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
            <div class="mb-3 sm:mb-0">
                <span class="font-medium text-xl text-900 mr-2">Order number:</span>
                <span class="font-medium text-xl text-blue-500">451234</span>
            </div>
            <div>
                <Button label="Details" icon="pi pi-list" class="mr-2" outlined></Button>
                <Button label="Print" icon="pi pi-print" outlined></Button>
            </div>
        </div>
        <div class="border-round surface-border border-1">
            <ul class="list-none p-0 m-0">
                <li v-for="(product, i) in products" :key="i" class="p-3 surface-border flex align-items-start sm:align-items-center" :class="{ 'border-bottom-1': i !== products.length - 1 }">
                    <img :src="product.image" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" :alt="product.name" />
                    <div class="flex flex-column">
                        <span class="text-900 font-semibold text-xl mb-2">{{ product.name }}</span>
                        <span class="text-700 font-medium mb-3"> {{ product.color }} | {{ product.size }} </span>
                        <span class="text-900 font-medium">Quantity: {{ product.quantity }}</span>
                    </div>
                    <span class="text-900 font-medium text-lg ml-auto">{{ product.price }}</span>
                </li>
            </ul>
        </div>
        <div class="flex flex-wrap mt-5 pb-3">
            <div class="w-full lg:w-6 pl-3">
                <span class="font-medium text-900">Shipping Address</span>
                <div class="flex flex-column text-900 mt-3 mb-5">
                    <span class="mb-1">Celeste Slater</span>
                    <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                    <span>(786) 713-8616</span>
                </div>

                <span class="font-medium text-900">Payment</span>
                <div class="flex align-items-center mt-3">
                    <img src="/content/demo/images/ecommerce/ordersummary/visa.png" class="w-4rem mr-3" alt="visa" />
                    <div class="flex flex-column">
                        <span class="text-900 mb-1">Visa Debit Card</span>
                        <span class="text-900 font-medium">**** **** **** 1234</span>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
                <ul class="list-none p-0 m-0 w-full">
                    <li class="mb-3">
                        <span class="font-medium text-900">Summary</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                        <span class="text-900">Subtotal</span>
                        <span class="text-900 font-medium text-lg">$36.00</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                        <span class="text-900">Shipping</span>
                        <span class="text-900 font-medium text-lg">$5.00</span>
                    </li>
                    <li class="flex justify-content-between mb-3">
                        <span class="text-900">Tax</span>
                        <span class="text-900 font-medium text-lg">$4.00</span>
                    </li>
                    <li class="flex justify-content-between border-top-1 surface-border py-3">
                        <span class="text-900 font-medium">Total</span>
                        <span class="text-900 font-bold text-lg">$41.00</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
            <span class="text-2xl font-medium text-900">Thanks for your order!</span>
            <div class="flex mt-3 sm:mt-0">
                <div class="flex flex-column align-items-center">
                    <span class="text-900 font-medium mb-2">Order ID</span>
                    <span class="text-700">451234</span>
                </div>
                <div class="flex flex-column align-items-center ml-6 md:ml-8">
                    <span class="text-900 font-medium mb-2">Order Date</span>
                    <span class="text-700">7 Feb 2023</span>
                </div>
            </div>
        </div>
        <div class="flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5">
            <img src="/content/demo/images/ecommerce/ordersummary/order-summary-2-1.png" class="w-15rem flex-shrink-0 md:mr-6" alt="summary-1-2" />
            <div class="flex-auto mt-3 md:mt-0">
                <span class="text-xl text-900">Product Name</span>
                <div class="font-medium text-2xl text-900 mt-3 mb-5">Order Processing</div>
                <div class="border-round overflow-hidden surface-300 mb-3" :style="{ height: '7px' }">
                    <div class="bg-primary border-round w-4 h-full"></div>
                </div>
                <div class="flex w-full justify-content-between">
                    <span class="text-900 text-xs sm:text-base">Ordered</span>
                    <span class="text-900 font-medium text-xs sm:text-base">Processing</span>
                    <span class="text-500 text-xs sm:text-base">Shipping</span>
                    <span class="text-500 text-xs sm:text-base">Delivered</span>
                </div>
            </div>
        </div>
        <div class="py-5 flex justify-content-between flex-wrap">
            <div class="flex sm:mr-5 mb-5">
                <span class="font-medium text-900 text-xl mr-8">Product Name</span>
                <span class="text-900 text-xl">$21.00</span>
            </div>
            <div class="flex flex-column sm:mr-5 mb-5">
                <span class="font-medium text-900 text-xl">Shipping Address</span>
                <div class="flex flex-column text-900 mt-3">
                    <span class="mb-1">Celeste Slater</span>
                    <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                    <span>(786) 713-8616</span>
                </div>
            </div>
            <div class="flex flex-column">
                <span class="font-medium text-900 text-xl">Payment</span>
                <div class="flex align-items-center mt-3">
                    <img src="/content/demo/images/ecommerce/ordersummary/visa.png" class="w-4rem mr-3" alt="visa-2" />
                    <div class="flex flex-column">
                        <span class="text-900 mb-1">Visa Debit Card</span>
                        <span class="text-900 font-medium">**** **** **** 1234</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
