<script setup>
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();

const print = () => {
    window.print();
};
</script>

<template>
    <div>
        <Button label="Print" type="button" icon="pi pi-print" @click="print" style="display: block; margin-bottom: 20px; margin-left: 6px"></Button>

        <div class="card py-8 px-6 md:px-8 overflow-auto">
            <div class="flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between border-bottom-1 surface-border pb-5 min-w-max">
                <div class="flex flex-column">
                    <div>
                        <img id="invoice-logo" :src="'/layout/images/logo-' + (layoutConfig.colorScheme.value === 'light' ? 'poseidon' : 'poseidon-dark') + '.png'" alt="poseidon-layout" />
                    </div>
                    <div class="my-3 text-2xl font-bold">YOUR COMPANY</div>
                    <span class="mb-2">9137 3rd Lane California City</span>
                    <span>CA 93504, U.S.A.</span>
                </div>
                <div class="flex flex-column mt-5 md:mt-0">
                    <div class="text-2xl mb-3 text-4xl text-left md:text-right">INVOICE</div>
                    <div class="flex flex-column">
                        <div class="flex justify-content-between align-items-center mb-2">
                            <span class="font-semibold mr-6">DATE</span>
                            <span>30/08/2019</span>
                        </div>
                        <div class="flex justify-content-between align-items-center mb-2">
                            <span class="font-semibold mr-6">INVOICE #</span>
                            <span>8523</span>
                        </div>
                        <div class="flex justify-content-between align-items-center">
                            <span class="font-semibold mr-6">CUSTOMER ID</span>
                            <span>C1613</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 mb-8 flex flex-column">
                <div class="mb-3 text-xl font-bold">BILL TO</div>
                <span class="mb-2">Claire Williams, 148 Hope Lane</span>
                <span>Palo Alto, CA 94304.</span>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full" style="border-collapse: collapse; table-layout: auto">
                    <thead>
                        <tr>
                            <th class="text-left font-semibold py-3 border-bottom-1 surface-border white-space-nowrap">Description</th>
                            <th class="text-right font-semibold py-3 border-bottom-1 surface-border white-space-nowrap px-3">Quantity</th>
                            <th class="text-right font-semibold py-3 border-bottom-1 surface-border white-space-nowrap px-3">Unit Price</th>
                            <th class="text-right font-semibold py-3 border-bottom-1 surface-border white-space-nowrap">Line Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left py-3 border-bottom-1 surface-border white-space-nowrap">Green T-Shirt</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">1</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">$49.00</td>
                            <td class="text-right py-3 border-bottom-1 surface-border">$49.00</td>
                        </tr>
                        <tr>
                            <td class="text-left py-3 border-bottom-1 surface-border white-space-nowrap">Game Controller</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">2</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">$99.00</td>
                            <td class="text-right py-3 border-bottom-1 surface-border">$198.00</td>
                        </tr>
                        <tr>
                            <td class="text-left py-3 border-bottom-1 surface-border white-space-nowrap">Mini Speakers</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">1</td>
                            <td class="text-right py-3 border-bottom-1 surface-border px-3">$85.00</td>
                            <td class="text-right py-3 border-bottom-1 surface-border">$85.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex flex-column md:flex-row md:align-items-start md:justify-content-between mt-8">
                <div class="font-bold mb-3 md:mb-0">NOTES</div>
                <div class="flex flex-column">
                    <div class="flex font-bold justify-content-between align-items-center mb-2">
                        <span class="mr-6">SUBTOTAL</span>
                        <span>$332.00</span>
                    </div>
                    <div class="flex font-bold justify-content-between align-items-center mb-2">
                        <span class="mr-6">VAT #</span>
                        <span>0</span>
                    </div>
                    <div class="flex font-bold justify-content-between align-items-center">
                        <span class="mr-6">TOTAL</span>
                        <span>$332.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
