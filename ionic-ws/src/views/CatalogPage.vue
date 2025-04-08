<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Catalogo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>
        <hello-component name="GUstavo"></hello-component>
      </p>
      <ion-list>
        <ion-item v-for="(element, index) in elements" :key="index">
          <ion-label>
            <p>{{ index }}</p>
            <h2>{{ element.name }}</h2>
            <p>{{ element.description }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/vue';
import HelloComponent from  '../components/HelloComponent.vue';

const elements = [
  { name: 'Elemento 1', description: 'Descripción del elemento 1' },
  { name: 'Elemento 2', description: 'Descripción del elemento 2' },
  { name: 'Elemento 3', description: 'Descripción del elemento 3' },
];
</script>

<style scoped>

</style>
