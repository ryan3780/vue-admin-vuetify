<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row :style="{ height: '120px' }" class="red" align="center">
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
      </v-row>
      <v-row :style="{ height: '120px' }" class="yellow">
        <v-col align-self="end">
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined> col </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang="ts">
export default {};
</script>
<style></style>
