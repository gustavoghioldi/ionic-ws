<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>
        <hello-component></hello-component>
      </p>
      <div class="center-button">
        <ion-button @click="clickMeHandler">Click Me</ion-button>
        <ion-button router-link="/catalog">Catalogo</ion-button>
        <ion-button router-link="/adecash">Adecash</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import HelloComponent from '../components/HelloComponent.vue';
const clickMeHandler = () => {
  console.log('Button clicked!');
};


</script>

<style scoped>
.center-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
