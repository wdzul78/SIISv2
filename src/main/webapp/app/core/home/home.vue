<template>
  <div class="home row">
    <div class="col-md-3">
      <span class="hipster img-fluid rounded"></span>
    </div>
    <div class="col-md-9">
      <h1 class="display-4" v-text="t$('home.title')"></h1>
      <p class="lead" v-text="t$('home.subtitle')"></p>

      <div>
        <div class="alert alert-success" v-if="authenticated">
          <span v-if="username" v-text="t$('home.logged.message', { username: username })"></span>
        </div>

        <div class="alert alert-warning" v-if="!authenticated">
          <span v-text="t$('global.messages.info.authenticated.prefix')"></span>
          <a class="alert-link" v-on:click="openLogin()" v-text="t$('global.messages.info.authenticated.link')"></a
          ><span v-html="t$('global.messages.info.authenticated.suffix')"></span>
        </div>
      </div>

      <span>IS FUN WORK = {{ testFuncVue }}</span><br>
            <v-btn @click.stop="testFuncVue = !testFuncVue;">Custom loader</v-btn>
            <v-card
              class="mx-auto"
              subtitle="The #1 Vue UI Library"
              width="400"
            > Yes what the </v-card>

            <br>
            <v-btn @click.stop="openLogin()">LogIn</v-btn>
            <br>
            <v-btn v-on:click="logout()">LogOut</v-btn>
            <br>
            <b-dropdown-item data-cy="logout" v-if="authenticated" v-on:click="logout()" id="logout" active-class="active">
            <font-awesome-icon icon="sign-out-alt" />
            <span v-text="t$('global.menu.account.logout')"></span>
          </b-dropdown-item>

        <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">Agencies Portal</v-btn>
            </template>
            <v-list rounded="md" width="360" elevation="10">
                <v-list-item v-for="agencies in listOfAgencies" :key="agencies.title">
                    <a :href="agencies.link" target="_blank" style="text-decoration: none; color: inherit;">
                        <v-list-item-title> {{ agencies.title }} </v-list-item-title>
                    </a>
                </v-list-item>
            </v-list>
        </v-menu>

      <p v-text="t$('home.question')"></p>

      <ul>
        <li><a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer" v-text="t$('home.link.homepage')"></a></li>
        <li>
          <a
            href="https://stackoverflow.com/tags/jhipster/info"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.stackoverflow')"
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/jhipster/generator-jhipster/issues?state=open"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.bugtracker')"
          ></a>
        </li>
        <li>
          <a
            href="https://gitter.im/jhipster/generator-jhipster"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.chat')"
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer" v-text="t$('home.link.follow')"></a>
        </li>
      </ul>

      <p>
        <span v-text="t$('home.like')"></span>
        <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer" v-text="t$('home.github')"></a>!
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
