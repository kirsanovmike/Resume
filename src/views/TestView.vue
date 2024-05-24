<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="10">
        <!-- hello -->
        <section class="mt-10 mb-15">
          <v-row>
            <v-col cols="2">
              <v-img
                class="image--style-round"
                src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520597_gas-kvas-com-p-kartinki-kvadratnie-24.jpg"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <h1>h1</h1>
              <h2>h2</h2>
              <p>about</p>
              <v-btn>
                Button
              </v-btn>
            </v-col>
          </v-row>
        </section>
        <!-- /hello -->
        <!-- skills -->
        <section class="mt-10 mb-15">
          <h2>Skills</h2>
          <v-row dense>
            <v-card
              class="mx-auto"
              max-width="180"
              subtitle="Greyhound divisely hello coldly fonwderfully"
              title="skill 1"
            >
            </v-card>
            <v-card
              class="mx-auto"
              max-width="180"
              subtitle="Greyhound divisely hello coldly fonwderfully"
              title="skill 1"
            >
            </v-card>
            <v-card
              class="mx-auto"
              max-width="180"
              subtitle="Greyhound divisely hello coldly fonwderfully"
              title="skill 1"
            >
            </v-card>
          </v-row>
        </section>
        <!-- /skills -->
        <!-- experience -->
        <section class="mt-10 mb-15">
          <h2>Experience</h2>
          <h3>h3</h3>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Место работы
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Описание
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </section>
        <!-- /experience -->
        <!-- projects -->
        <section class="mt-10 mb-15">
          <h2>Projects</h2>
          <v-row>
            <v-col cols="4">
              <v-card
                class="mx-auto"
              >
                <v-card-text>
                  123
                </v-card-text>
            </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="mx-auto"
              >
                <v-card-text>
                  123
                </v-card-text>
            </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="mx-auto"
              >
                <v-card-text>
                  123
                </v-card-text>
            </v-card>
            </v-col>
          </v-row>
        </section>
        <!-- /projects -->
        <!-- contact -->
        <section class="mt-10 mb-15">
          <v-row>
            <v-col cols="6">
              <h2>Contact Details</h2>
              <p>p</p>
              <p>e-mail</p>
              <p>e-mail</p>
              <p>e-mail</p>
              <p>e-mail</p>
            </v-col>
            <v-col cols="6">
              <v-form fast-fail @submit.prevent>
                <v-text-field
                  label="First name"
                />
                <v-text-field
                  label="Last name"
                />
                <v-text-field
                  label="Last name"
                />
                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </section>
        <!-- /contact -->
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<style>
.image--style-round {
  border-radius: 100px;
  width: 240px;
  height: 240px;
}
</style>
