<template>
  <div class="mt-20 overflow-x-hidden">
    <div class="max-w-container px-4 mx-auto">
      <div class="text-base font-light font-primary text-primary">
        <h1 class="text-4xlg font-medium mb-6">Экспедирование грузов</h1>
        <div class="flex flex-col laptop:flex-row mb-4">
          <div class="mb-20 laptop:mb-0">
            <p class="indent-6 mb-4">
              Услуга по экспедированию грузов включает в себя организацию
              транспортировки груза, таможенное оформление и страхование груза.
            </p>
            <ul class="list-disc [&>li]:ml-6">
              <li>
                Компания берет на себя полный спектр работ, связанных с
                доставкой груза от отправителя до получателя,
              </li>
              <li>Оформляет необходимые документы,</li>
              <li>Выбирает оптимальный маршрут и способ транспортировки,</li>
              <li>Защищает груз от потенциальных рисков.</li>
            </ul>
            <p class="indent-6 mt-4">
              Такой подход позволяет клиентам сосредоточиться на своих
              бизнес-целях и не тратить время и ресурсы на логистические
              вопросы.
            </p>
          </div>
          <img
            class="self-center relative bottom-20 float-right max-w-[16rem] laptop:max-w-md laptop:ml-20"
            src="~/assets/svg/services-pages/opened_bus_big.svg"
            alt="a bus"
          />
        </div>
      </div>
    </div>
    <NuxtLink to="../contacts">
      <button
        class="w-screen py-8 mx-auto font-primary text-2xl tablet:text-3xlg font-medium text-primary bg-button hover:shadow-xl active:shadow-buttonActive active:translate-y-[3px]"
      >
        Получить консультацию по услуге
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'Перевозка и экспедирование грузов от компании MiTech',
  meta: {
    name: 'description',
    content: 'Экспедирование грузов по РБ, РФ и странам СНГ'
  }
});
</script>
