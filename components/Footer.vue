<template>
  <footer class="w-full bg-bg-main shadow-[0_-4px_5px_rgba(0,0,0,0.05)]">
    <div
      class="mx-auto flex max-w-container flex-col gap-4 px-5 py-6 font-primary text-base laptop:flex-row laptop:items-center laptop:justify-between laptop:px-0 laptop:py-12"
    >
      <div class="flex items-center gap-3">
        <NuxtLink class="font-logo text-3xl text-content-main laptop:text-5xl" to="/">MITech</NuxtLink>
        <p class="max-w-[231px] text-sm font-medium text-black laptop:font-normal">
          13 лет перевозим грузы по России, Беларуси и странам СНГ
        </p>
      </div>

      <div class="flex flex-col gap-4 laptop:flex-row laptop:items-center laptop:gap-12">
        <div class="flex flex-col gap-0.5">
          <p class="font-medium text-black laptop:font-normal">Беларусь, г. Гродно, 230005</p>
          <p class="text-content-light">ул. Гаспадарчая, 23/4-1, оф. 205</p>
        </div>

        <a class="flex flex-col gap-0.5" href="mailto:contact@mitech.ooo">
          <span class="font-medium text-black laptop:font-normal">contact@mitech.ooo</span>
          <span class="text-content-light">Почта для связи</span>
        </a>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <img src="~/assets/svg/app-footer/social-1.svg" alt="Telegram" class="h-[38px] w-[38px] laptop:h-11 laptop:w-11" />
            <img src="~/assets/svg/app-footer/social-2.svg" alt="WhatsApp" class="h-[38px] w-[38px] laptop:h-11 laptop:w-11" />
          </div>
          <a class="flex flex-col gap-0.5" href="tel:+375297827334">
            <span class="font-medium text-black laptop:font-normal">+375297827334</span>
            <span class="text-content-light">Ежедневно с 07:00 - 21:00</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
