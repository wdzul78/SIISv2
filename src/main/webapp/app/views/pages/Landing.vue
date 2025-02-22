<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const sidebarVisible = ref(false);
const home = ref(null);
const features = ref(null);
const testimonials = ref(null);
const pricing = ref(null);
const contact = ref(null);

const navigateToDashboard = () => {
    router.push('/');
};

const scrollTo = ($element) => {
    setTimeout(() => {
        $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, 200);
};
</script>

<template>
    <div class="relative overflow-hidden flex flex-column justify-content-center">
        <div class="bg-white landing-wrapper">
            <div style="height: 120px; background: linear-gradient(180deg, #525d72 0%, #69768d 100%)">
                <div class="flex align-items-center justify-content-between relative lg:static py-6 px-4 mx-0 md:px-7 lg:px-8 lg:py-6 lg:mx-8">
                    <a class="cursor-pointer" @click="navigateToDashboard">
                        <img src="/content/layout/images/logo-poseidon-dark.svg" alt="poseidon-layout" />
                    </a>
                    <a v-ripple class="cursor-pointer block md:hidden text-700 text-primary p-ripple" @click="sidebarVisible = true">
                        <i class="pi pi-bars text-2xl text-white"></i>
                    </a>
                    <ul id="menu" style="top: 80px; right: 0%" class="list-none p-3 md:p-0 justify-content-end hidden md:flex absolute md:static w-full md:w-6 md:px-0 z-3 shadow-2 md:shadow-none">
                        <a v-ripple class="cursor-pointer block md:hidden text-700 text-primary absolute z-5 p-ripple" style="top: 1.5rem; right: 1.5rem">
                            <i class="pi pi-times text-3xl"></i>
                        </a>

                        <li class="md:mt-0">
                            <a @click="scrollTo(home)" v-ripple class="flex m-0 md:ml-5 px-0 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a @click="scrollTo(features)" v-ripple class="flex m-0 md:ml-5 px-0 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple">
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a @click="scrollTo(testimonials)" v-ripple class="flex m-0 md:ml-5 px-0 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple">
                                <span>Testimonials</span>
                            </a>
                        </li>
                        <li>
                            <a @click="scrollTo(pricing)" v-ripple class="flex m-0 md:ml-5 px-0 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a @click="scrollTo(contact)" v-ripple class="flex m-0 md:ml-5 px-0 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Sidebar v-model:visible="sidebarVisible" position="right" :style="{ 'background-color': '#69768D' }" pt:closeButton="ml-auto">
                    <template #closeicon>
                        <i class="pi pi-times text-blue-300"></i>
                    </template>
                    <ul id="menu" class="list-none m-0 p-0">
                        <li class="md:mt-0">
                            <a
                                @click="
                                    scrollTo(contact);
                                    sidebarVisible = false;
                                "
                                v-ripple
                                class="flex m-0 px-5 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple"
                            >
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="
                                    scrollTo(contact);
                                    sidebarVisible = false;
                                "
                                v-ripple
                                class="flex m-0 px-5 py-3 text-white font-medium line-height-3 cursor-pointer"
                            >
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="
                                    scrollTo(contact);
                                    sidebarVisible = false;
                                "
                                class="flex m-0 px-5 py-3 text-white font-medium line-height-3 cursor-pointer"
                            >
                                <span>Testimonials</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="
                                    scrollTo(contact);
                                    sidebarVisible = false;
                                "
                                v-ripple
                                class="flex m-0 px-5 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple"
                            >
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a
                                @click="
                                    scrollTo(contact);
                                    sidebarVisible = false;
                                "
                                v-ripple
                                class="flex m-0 px-5 py-3 text-white font-medium line-height-3 cursor-pointer p-ripple"
                            >
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </Sidebar>
            </div>
            <div style="background: linear-gradient(180deg, #69768d 0%, #ffffff 100%)">
                <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2" ref="home">
                    <div class="grid grid-nogutter justify-content-between align-items-center mb-6 py-6 md:mb-8 md:py-8">
                        <div class="col-12 md:col-4 flex flex-column gap-4 flex-order-1 md:flex-order-0 align-items-center md:align-items-start text-center text-center">
                            <div>
                                <h2 class="font-semibold m-0 mb-3 text-white">
                                    PrimeVue Proudly Presents
                                    <span>Poseidon 2.0</span>
                                </h2>
                                <h6 class="font-normal m-0 mb-4 text-white" style="max-width: 480px">Modern and elegant responsive application template with a premium look for PrimeVue components.</h6>
                                <button type="button" class="p-button p-button-info">
                                    <span class="p-button-text">Learn More</span>
                                </button>
                            </div>
                        </div>

                        <div class="col-12 md:col-7 text-right md:block hidden mb-6 md:mb-0 border-round">
                            <div class="text-right md:block hidden">
                                <img src="/content/demo/images/landing/asset-hero-2.svg" alt="poseidon-layout" class="w-10 h-auto opacity-80" style="max-height: 400px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-0 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2" ref="features">
                <div class="flex justify-content-center align-items-center text-center px-8 flex-column">
                    <h2 class="font-medium m-0 mb-3">Features</h2>
                    <h6 class="m-0 font-normal line-height-3 max-w-30rem">Modern and elegant responsive application template with a premium look for PrimeVue components.</h6>
                </div>

                <div>
                    <div class="grid grid-nogutter pt-8">
                        <div class="col-12 md:col-6 xl:col-3">
                            <div class="border-round-xs bg-white pt-5 pb-8 px-3 text-center cursor-pointer flex md:block text-center flex-column">
                                <img src="/content/demo/images/landing/responsive.svg" alt="poseidon-layout" style="width: auto; height: 7rem" />
                                <h5>Responsive Layout</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis mi sed malesuada mollis. Nulla bibendum tortor est, eu tincidunt justo porta posuere.</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <div class="border-round-xs bg-white pt-5 pb-8 px-3 text-center cursor-pointer flex md:block text-center flex-column">
                                <img src="/content/demo/images/landing/design.svg" alt="poseidon-layout" style="width: auto; height: 7rem" />
                                <h5>Modern Design</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis mi sed malesuada mollis. Nulla bibendum tortor est, eu tincidunt justo porta posuere.</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <div class="border-round-xs bg-white pt-5 pb-8 px-3 text-center cursor-pointer flex md:block text-center flex-column">
                                <img src="/content/demo/images/landing/documented.svg" alt="poseidon-layout" style="width: auto; height: 7rem" />
                                <h5>Well Documented</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis mi sed malesuada mollis. Nulla bibendum tortor est, eu tincidunt justo porta posuere.</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 xl:col-3">
                            <div class="border-round-xs bg-white pt-5 pb-8 px-3 text-center cursor-pointer flex md:block text-center flex-column">
                                <img src="/content/demo/images/landing/code.svg" alt="poseidon-layout" style="width: auto; height: 7rem" />
                                <h5>Clean Code</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis mi sed malesuada mollis. Nulla bibendum tortor est, eu tincidunt justo porta posuere.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex align-items-center justify-content-between p-6 md:p-8" style="background: linear-gradient(360deg, #69768d 0%, #78849b 100%)">
                <div style="max-width: 600px">
                    <h2 class="font-semibold m-0 mb-3 text-white text-center text-center"><span>Poseidon 2.0</span> Comes with uniquely designed dark and dim modes.</h2>
                    <h6 class="font-normal m-0 mb-3 text-white line-height-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tellus placerat, maximus tortor sit amet, congue felis. Curabitur id posuere libero. Aenean a feugiat metus, vel posuere sapien. Aliquam erat volutpat. In
                        pulvinar arcu et urna hendrerit consectetur eu at nulla. Etiam et lectus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
                </div>
                <div class="text-right hidden md:block">
                    <img src="/content/demo/images/landing/darkMode.svg" alt="poseidon-layout" style="width: 60%; height: auto; max-height: 400px" />
                </div>
            </div>
            <div class="py-8 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2" ref="testimonials">
                <div class="flex flex-column justify-content-center align-items-center text-center mb-8">
                    <h2>Testimonials</h2>
                    <h6 class="m-0 font-normal line-height-3" style="max-width: 480px">Modern and elegant responsive application template with a premium look for PrimeVue components.</h6>
                </div>
                <div class="flex justify-content-center">
                    <div class="overflow-hidden relative max-w-full">
                        <div class="grid grid-nogutter">
                            <div class="col-12 md:col-4">
                                <div class="flex justify-content-between flex-column m-0 mx-3 relative h-full bg-white">
                                    <span class="block flex-grow-1 line-height-2 mb-5"
                                        >"Maecenas rutrum, orci nec lacinia auctor, enim lectus condimentum magna, pulvinar laoreet augue magna a turpis. Quisque id accumsan nulla. Nulla tempus est libero, ut mattis dui ullamcorper."</span
                                    >
                                    <h5 class="font-medium line-height-1 m-0">Trienke van Aartsen</h5>
                                    <h6 class="m-0 font-medium line-height-2 text-600">Porto</h6>
                                </div>
                            </div>
                            <div class="col-12 md:col-4 mt-5 md:mt-0">
                                <div class="flex justify-content-between flex-column m-0 mx-3 relative h-full bg-white">
                                    <span class="block flex-grow-1 line-height-2 mb-5"
                                        >"Quisque a dui porta, volutpat metus sit amet, tincidunt velit. Suspendisse consequat lectus dui, sed ornare diam luctus vitae. In sapien risus, efficitur in mattis vitae, aliquam in lectus."</span
                                    >
                                    <h5 class="font-medium line-height-1 m-0">Xenie Doleželová</h5>
                                    <h6 class="m-0 font-medium line-height-2 text-600">Rabat</h6>
                                </div>
                            </div>
                            <div class="col-12 md:col-4 mt-5 md:mt-0">
                                <div class="flex justify-content-between flex-column m-0 mx-3 relative h-full bg-white">
                                    <span class="block flex-grow-1 line-height-2 mb-5">
                                        "Nulla auctor dignissim nunc, ut aliquam eros tincidunt et. Cras facilisis ex in ligula placerat venenatis. Vestibulum vitae tortor libero. Aenean venenatis tempor pretium. Pellentesque eget consectetur
                                        libero."</span
                                    >
                                    <h5 class="font-medium line-height-1 m-0">Abbie Wilson</h5>
                                    <h6 class="m-0 font-medium line-height-2 text-600">Belgrade</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2" ref="pricing">
                <div id="pricing" class="my-3 py-3 md:my-5 md:py-5">
                    <div class="flex justify-content-center align-items-center text-center flex-column">
                        <h2 class="font-medium">Pricing</h2>
                        <h6 class="font-normal" style="max-width: 480px">Modern and elegant responsive application template with a premium look for PrimeVue components.</h6>
                    </div>
                    <div class="md:px-8 md:py-7 px-5 grid grid-nogutter">
                        <div class="col-12 md:col-4">
                            <div class="m-2 h-auto text-center pb-4" style="background: linear-gradient(360deg, #66768d 0%, #7a899f 100%); border-radius: 5px">
                                <div class="border-bottom-3 border-0 px-3 py-4">
                                    <span class="text-white text-2xl">$0.00</span>
                                    <h5 class="text-white mt-2">BEGINNER</h5>
                                    <span class="text-white block text-sm">Good starting point for startups</span>
                                </div>
                                <div>
                                    <ul class="list-none p-0 pb-3 my-4">
                                        <li class="text-white mb-2">Responsive</li>
                                        <li class="text-white mb-2">10 Support Tickets</li>
                                        <li class="text-white mb-2">Free Shipping</li>
                                        <li class="text-white mb-2">Unlimited Space</li>
                                        <li class="text-white mb-2">Push Messages</li>
                                    </ul>
                                    <button type="button" class="p-button p-button-info">
                                        <span class="p-button-text">TRY FREE</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 md:col-4">
                            <div class="m-2 h-auto text-center pb-4" style="background: linear-gradient(360deg, #66768d 0%, #7a899f 100%); border-radius: 5px">
                                <div class="border-bottom-3 border-cyan-200 border-0 px-3 py-4">
                                    <span class="text-cyan-200 text-2xl">$19.40</span>
                                    <h5 class="text-white mt-2">PRO</h5>
                                    <span class="text-white block text-sm">Good starting point for startups</span>
                                </div>
                                <div>
                                    <ul class="list-none p-0 pb-3 my-4">
                                        <li class="text-white mb-2">Responsive</li>
                                        <li class="text-white mb-2">Push Messages</li>
                                        <li class="text-white mb-2">10 Support Tickets</li>
                                        <li class="text-white mb-2">Free Shipping</li>
                                        <li class="text-white mb-2">Unlimited Space</li>
                                    </ul>
                                    <button type="button" class="p-button p-button-info">
                                        <span class="p-button-text">BUY NOW</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 md:col-4">
                            <div class="m-2 h-auto text-center pb-4" style="background: linear-gradient(360deg, #66768d 0%, #7a899f 100%); border-radius: 5px">
                                <div class="border-bottom-3 border-yellow-200 border-0 px-3 py-4">
                                    <span class="text-yellow-200 text-2xl">$29.99</span>
                                    <h5 class="text-white mt-2">ENTERPRISE</h5>
                                    <span class="text-white block text-sm">Good starting point for startups</span>
                                </div>
                                <div>
                                    <ul class="list-none p-0 pb-3 my-4">
                                        <li class="text-white mb-2">Responsive</li>
                                        <li class="text-white mb-2">Push Messages</li>
                                        <li class="text-white mb-2">10 Support Tickets</li>
                                        <li class="text-white mb-2">Free Shipping</li>
                                        <li class="text-white mb-2">Unlimited Space</li>
                                    </ul>
                                    <button type="button" class="p-button p-button-info">
                                        <span class="p-button-text">BUY NOW</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background: linear-gradient(360deg, #69768d 0%, #ffffff 100%)">
                <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2">
                    <div ref="contact">
                        <div class="justify-content-center align-items-center text-center">
                            <h2 class="font-normal">Contact</h2>
                            <div class="flex justify-content-center text-center">
                                <h6 class="font-normal line-height-3" style="max-width: 486px">Modern and elegant responsive application template with a premium look for PrimeVue components.</h6>
                            </div>
                        </div>
                        <div class="flex justify-content-center py-5 px-8 relative text-center">
                            <div class="md:p-5">
                                <input type="input" id="name" placeholder="Full Name" class="p-inputtext w-full mb-3 border-round-sm border-1 surface-border py-2 px-3 surface-0" />
                                <input type="input" id="email" placeholder="Email" class="p-inputtext w-full mb-3 border-round-sm border-1 surface-border py-2 px-3 surface-0" />
                                <textarea rows="8" placeholder="Your Message" autoResize="false" class="p-inputtext p-inputtextarea w-full mb-3 border-round-sm border-1 surface-border py-2 px-3 surface-0"></textarea>
                                <button type="button" class="p-button p-button-info">
                                    <span class="p-button-text">SEND MESSAGE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5 px-8 flex justify-content-between align-items-center" style="background: linear-gradient(360deg, #525d72 0%, #69768d 100%)">
                    <a href="#">
                        <img src="/content/layout/images/logo-poseidon-dark.svg" alt="poseidon-layout" height="30px" class="w-auto" />
                    </a>
                    <div class="flex align-items-center">
                        <a class="text-white ml-3 cursor-pointer p-2"><i class="pi pi-github text-2xl"></i></a>
                        <a class="text-white ml-3 cursor-pointer p-2"><i class="pi pi-facebook text-2xl"></i></a>
                        <a class="text-white ml-3 cursor-pointer p-2"><i class="pi pi-twitter text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
