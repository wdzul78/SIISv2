import { type ComputedRef, defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store';
import type LoginService from '@/account/login.service';
import { useRouter } from 'vue-router';

export default defineComponent({
  compatConfig: { MODE: 3 },
  setup() {
    const router = useRouter();
    const loginService = inject<LoginService>('loginService');

    const authenticated = inject<ComputedRef<boolean>>('authenticated');
    const username = inject<ComputedRef<string>>('currentUsername');
    const store = useStore();

    const openLogin = () => {
      loginService?.login();
    };
    
    const logout = async () => {
      const response = await loginService?.logout();
      store.logout();
      window.location.href = response?.data.logoutUrl;
      const next = response?.data?.logoutUrl ?? '/';
      if (router.currentRoute.value.path !== next) {
        await router.push(next);
      }
    };
    
    const listOfAgencies = [
      {
          link: "https://mis.sarawak.gov.my/web/home/index/",
          title: "Majlis Islam Sarawak",
      },
      {
          link: "https://jais.sarawak.gov.my/web/home/index/",
          title: "Jabatan Agama Islam Sarawak",
      },
      {
          link: "https://muftinegeri.sarawak.gov.my/web/home/index/",
          title: "Jabatan Mufti Sarawak",
      },
      {
          link: "https://syariah.sarawak.gov.my/web/home/index/",
          title: "Jabatan Kehakiman Syariah Sarawak",
      },
      {
          link: "https://www.tbs.org.my/www/?",
          title: "Tabung Baitulmal Sarawak",
      },
      {
          link: "https://sarawakiic.org.my/",
          title: "Sarawak Islamic Information Centre",
      },
      {
          link: "http://bppmis.com/",
          title: "Biro Perkhidmatan Pendidikan - Majlis Islam Sarawak",
      },
    ];

    const testFuncVue = ref(false);

    return {
      authenticated,
      username,
      openLogin,
      logout,
      t$: useI18n().t,
      testFuncVue,
      listOfAgencies
    };
  },
});
