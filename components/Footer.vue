<template>
  <footer class="w-full bg-bg-main shadow-[0_-4px_5px_rgba(127,127,127,0.05)]">
    <div
      class="mx-auto flex max-w-screen-desktop flex-col gap-6 px-5 py-6 font-primary text-base leading-[22px] tablet:gap-5 tablet:px-8 tablet:py-[30px] tablet:text-sm tablet:leading-[19px] desktop:flex-row desktop:items-center desktop:justify-between desktop:py-12 desktop:text-base desktop:leading-[22px]"
    >
      <div class="flex items-center gap-3">
        <NuxtLink class="font-logo text-[28px] leading-[normal] text-content-main tablet:text-5xl" to="/">MITech</NuxtLink>
        <p class="max-w-[231px] text-sm font-medium leading-5 text-black">
          13 лет перевозим грузы по России, Беларуси и странам СНГ
        </p>
      </div>

      <div class="flex flex-col gap-4 tablet:flex-row tablet:items-center tablet:gap-9 desktop:gap-12">
        <div class="flex flex-col gap-0.5">
          <p class="font-medium text-black">Беларусь, г. Гродно, 230005</p>
          <p class="text-content-light">ул. Гаспадарчая, 23/4-1, оф. 205</p>
        </div>

        <a class="flex flex-col gap-0.5" href="mailto:contact@mitech.ooo">
          <span class="font-medium text-black">contact@mitech.ooo</span>
          <span class="text-content-light">Почта для связи</span>
        </a>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <img src="~/assets/svg/app-footer/social-1.svg" alt="Telegram" class="h-[38px] w-[38px] tablet:h-10 tablet:w-10 desktop:h-11 desktop:w-11" />
            <img src="~/assets/svg/app-footer/social-2.svg" alt="WhatsApp" class="h-[38px] w-[38px] tablet:h-10 tablet:w-10 desktop:h-11 desktop:w-11" />
          </div>
          <a class="flex flex-col gap-0.5" href="tel:+375297827334">
            <span class="font-medium text-black">+375 (29) 782-73-34</span>
            <span class="text-content-light">Ежедневно с 07:00 - 21:00</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
