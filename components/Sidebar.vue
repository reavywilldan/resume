<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}

const props = defineProps({
  social: Object,
})
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/loading.png" alt="Photo">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Reavy Willdan Kurniawan">
          Reavy Willdan
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Back End Developer</span>
          <span class="xl:after:content-[''] after:content-[',']">Full Stack Developer</span>
          <span>Beat Maker</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li v-for="social in social" :key="social.id" class="contact-item">
          <div class="icon-box">
            <ion-icon :name="social.icon" />
          </div>
          <div class="contact-info">
            <p class="contact-title">
              {{ social.name }}
            </p>

            <a :href="social.link" href="https://twitter.com/reavywilldan_" class="contact-link" target="_blank">{{
              social.displayName }}</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Indonesia</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:reavywilldan@gmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
