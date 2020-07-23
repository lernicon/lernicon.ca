<script>
  import Tailwindcss from './Tailwindcss.svelte';
  const company = "Lernicon Academy Inc.";
  const email = "info(at)lernicon.ca";
  const message = "Learn Svelte";
  //const slogan = 'Every child is born a genious';
  const slogan = "Каждый ребенок рождается гением";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }
  .App-logo {
    height: 40vmin;
    pointer-events: none;
    margin-bottom: 1rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="App">
  <!-- start navigation -->
  <nav
    class="fixed inset-x-0 top-0 z-40 w-full py-4 bg-transparent"
    id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="bg-logo rounded-md">
          <a href="#" title="">
            <svg class="h-8" viewBox="0 0 200 52">
              <defs id="LogoDefs">
                <linearGradient id="GoldenGradient">
                  <stop id="SvgjsStop1016" stop-color="#fbb040" offset="0" />
                  <stop id="SvgjsStop1017" stop-color="#f9ed32" offset="1" />
                </linearGradient>
              </defs>
              <g
                id="Logo"
                featurekey="symbolFeature-0"
                transform="matrix(0.6,0,0,0.6,-5,-14)"
                fill="url(#GoldenGradient)">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M81.61,82V77.83a1.1,1.1,0,0,0-1.1-1.1H78L94.47,59.1a1.1,1.1,0,0,0,0-1.54L74.09,37.95l4.1-4.43A1.1,1.1,0,0,0,78.13,32L76,30l2.12-2.29a1.1,1.1,0,0,0-.06-1.55l-2.75-2.55a1.06,1.06,0,0,0-.79-0.29,1.09,1.09,0,0,0-.76.35L71.67,26,70,24.43a1.1,1.1,0,0,0-1.55.06l-11.11,12A16.81,16.81,0,0,0,53,35.91,20.92,20.92,0,0,0,37.72,43a1.1,1.1,0,0,0,.07,1.55l23.58,21.5A1.1,1.1,0,0,0,62.91,66c5.59-6.13,7.1-14.38,4.43-20.76l5.25-5.67L92.13,58.39,74.94,76.73H70.33a1.1,1.1,0,0,0-1.1,1.1V82c-6.88,1.61-11.81,5.95-13.13,12a1.1,1.1,0,0,0,1.07,1.33H93.66A1.1,1.1,0,0,0,94.74,94C93.41,87.94,88.48,83.61,81.61,82Zm-7-56L75.79,27l-1.37,1.48-1.14-1.06ZM62,63.68l-21.91-20A18.55,18.55,0,0,1,53,38.11a14.41,14.41,0,0,1,4.32.66h0a13.26,13.26,0,0,1,2.57,1.12h0c0.37,0.21.72,0.44,1.06,0.68l0.12,0.08a12.42,12.42,0,0,1,1,.85,12.75,12.75,0,0,1,.92.94c0.16,0.19.32,0.38,0.47,0.58l0.31,0.4q0.29,0.4.55,0.83l0.11,0.17c0.19,0.33.38,0.67,0.55,1C67.64,50.88,66.59,58.09,62,63.68Zm3.21-22L65,41.34a14.86,14.86,0,0,0-1.36-1.44,15.13,15.13,0,0,0-1.8-1.39l-0.18-.12a15,15,0,0,0-2.07-1.11l9.72-10.49L71,28.33h0l2.75,2.55h0l2.1,1.95L66.28,43.14,66.21,43A14.82,14.82,0,0,0,65.22,41.63Zm6.21,37.3h8v2.65a28.08,28.08,0,0,0-8,0V78.93ZM58.62,93.09c2-5.88,8.45-9.61,16.8-9.61s14.77,3.73,16.8,9.61H58.62Z"
                  style="fill:url(#GoldenGradient)" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M11.45,82.87a5.94,5.94,0,0,0,0,11.88H51.21v-1.5H11.45a4.44,4.44,0,0,1,0-8.88H51.21v-1.5H11.45Z"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="85.33"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="87.99"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="90.84"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M48.32,74.79a6,6,0,0,0-5.94-5.94H12.12v1.5H42.38a4.44,4.44,0,1,1,0,8.88H12.12v1.5H42.38A6,6,0,0,0,48.32,74.79Z"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="76.95"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="74.11"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="71.26"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
              </g>
              <g transform="translate(-193 -27)">
                <text
                  transform="translate(280 56)"
                  fill="url(#GoldenGradient)"
                  font-size="24"
                  font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="0" y="-8">Lernicon</tspan>
                  <tspan x="0" y="16">Academy</tspan>
                </text>
              </g>
            </svg>
          </a>
        </div>
        <div class="block md:hidden">
          <button
            type="button"
            class="flex items-center justify-center navbar-toggler text-gray-600">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <nav class="flex items-center hidden md:flex">
          <a href="#prices" class="font-medium hover:text-gray-600 text-sm">
            Стоимость обучения
          </a>

          <a
            href="#"
            class="hidden block max-w-3xl mt-4 font-medium md:ml-6 lg:inline
            hover:text-gray-600 md:mt-0 text-sm">
            About Us
          </a>

          <a
            href="#questions"
            class="block mt-3 font-medium md:ml-6 hover:text-gray-600 md:mt-0
            text-sm">
            Часто задаваемые вопросы
          </a>

          <a
            href="#"
            class="block px-4 py-2 mt-3 font-medium text-white bg-blue-500
            rounded hover:bg-blue-700 md:ml-6 md:mt-0 text-sm leading-tight">
            Зарегистрироваться
          </a>
        </nav>
      </div>
    </div>
  </nav>
  <!-- end navigation -->
        <div class="">
          <img src="images/construction.png" alt="" class="object-cover w-full" />
        </div>

  <!-- start hero section -->
  <section class="bg-blue-100 relative pt-24 pb-40 md:pb-32 lg:pt-32 xl:pb-56">
    <div class="absolute bottom-0 left-100 right-0 w-full z-10">
      <img src="images/school.jpg" alt="" class="object-cover w-full" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="bg-blue-300 opacity-30 rounded-md">
          <h1 class="text-3xl font-bold tracking-tight leading-tight">
            {slogan}
          </h1>
          <p class="mt-4 text-gray-700">
            Индивидуальная учебная нагрузка, позволяет найти подход к каждому.
          </p>
          <p class="text-sm text-gray-600 mt-4">
            Всё новое это хорошо забытое старое. Мы опираемся на методический
            опыт классической советской школы и .....
          </p>
          <a
            href="#"
            role="button"
            title="Подробнее о нашем подходе"
            class="inline-block px-6 py-3 mt-6 font-bold text-white bg-blue-500
            rounded hover:bg-blue-600 focus:bg-blue-600">
            Подробнее о нашем подходе
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end hero section -->

  <!-- start how it works -->
  <section class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold leading-tight text-center lg:text-3xl">
        Как это работает?
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center mt-8">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="px-4 py-8">
            <div class="h-24">
              <img
                src="images/classroom.jpg"
                alt=""
                class="mx-auto h-32 w-56" />
            </div>
            <h4
              class="mt-10 text-lg font-medium tracking-wide uppercase
              leading-tight">
              Организация учебной работы
            </h4>
              <ul class="list-disc text-left ml-2 mt-2 text-sm text-gray-700">
              <li>Комбинация групповой работы с работой в парах и индивидуальной
              работой.</li>
              <li>не более 10 учеников в классе</li>
              <li>5 дней в неделю</li>
              <li>6 уроков в день (для группы с 2мя языками)</li>
              <li>4 урока в день (для группы с 1м языком)</li>
              <li>1-2 урока в зале в день</li>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <div class="px-4 py-8">
            <div class="h-24">
              <img src="images/tables.png" alt="" class="mx-auto h-32 w-56" />
            </div>
            <h4
              class="mt-10 text-lg font-medium tracking-wide uppercase
              leading-tight">
              Здоровьеразвивающая педагогика
            </h4>
              <ul class="list-disc text-left ml-2 mt-2 text-sm text-gray-700">
              <li>чередование работы сидя и стоя</li>
              <li>чередование уроков в классе с уроками в зале</li>
              <li>парты с наклоном</li>
              <li>подставки под учебник</li>
              <li>минимизация экранного времени</li>
              <li>физкульт-минутки во время уроков</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg">
          <div class="px-4 py-8">
            <div class="h-24">
              <img src="images/brain.png" alt="" class="mx-auto h-32 w-56" />
            </div>
            <h4
              class="mt-10 text-lg font-medium tracking-wide uppercase
              leading-tight">
              Учим учиться
            </h4>
              <ul class="list-disc text-left ml-2 mt-2 text-sm text-gray-700">
                <li>обучение методам запоминания</li>
                <li>устный счет</li>
                <li>карты памяти</li>
                <li>методы генерации идей</li>
                <li>поиск зависимостей</li>
                <li>диаграммы</li>
                <li>ведение дневника</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end how it works -->

  <!-- start testimonials -->
  <!--
  <section class="pb-16 text-center bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full sm:max-w-2xl sm:mx-auto">
        <p class="text-lg font-medium text-md lg:text-xl">
          “{company} is ...”
        </p>
        <p class="mt-4 text-lg font-medium text-blue-500">
          Mr. Bond
        </p>
        <p class="text-gray-600">
          Director of ...
        </p>
      </div>
    </div>
  </section>
  -->
  <!-- end testimonials -->

  <!-- start features -->
  <section class="bg-blue-500 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-2xl font-bold leading-tight text-white lg:text-3xl
        text-center">
        Ищете качественную альтернативу массовому образованию? Разрываетесь на части, тратя время на дорогу, организуя дополнительные кружки?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
        <div>
          <img src="images/kids.jpg" alt="" class="mx-auto" />
        </div>

        <div>
          <h4 class="text-xl font-bold text-white">Пора остановиться!</h4>
          <p class="mt-2 text-base text-white">
            Скоро открывается набор в 1-2 класс для детей в возрасте 5-7.
            Школа обслуживает следующие районы: East Burnaby, Coquitlam, PoCo, Port Moody, North Surrey.
            Мы Вас ждём!
          </p>
          <ul class="mt-8 text-left">
            <li class="flex items-start">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Литературное чтение и Русский язык
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Математика
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Вокал и Фортепиано
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Изобразительное искусство
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Актерское мастерство
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Окружающий мир
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Бальные Танцы
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Гимнастика
              </p>
            </li>
            <li class="flex items-start mt-3">
              <svg
                class="w-6 h-6 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-white">
                Восточные единоборства
              </p>
            </li>
          </ul>

          <a
            href="#"
            class="block px-6 py-3 mt-6 font-medium text-center text-blue-500
            bg-white rounded sm:inline-block">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end features -->
  <!-- start prices -->
<section class="bg-gray-100 py-8" id="prices">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Цена обучения (два языка)
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
        >
          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                70/25/5(RE)
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 25%</li>
                <li class="border-b py-4">Индивидуальные 5%</li>
                <li class="border-b py-4">Русский и Английский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                $820 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="w-full p-8 text-3xl font-bold text-center">70/20/10(RE)</div>
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 20%</li>
                <li class="border-b py-4">Индивидуальные 10%</li>
                <li class="border-b py-4">Русский и Английский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-4xl font-bold text-center">
                $900 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                70/15/15(RE)
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 15%</li>
                <li class="border-b py-4">Индивидуальные 15%</li>
                <li class="border-b py-4">Русский и Английский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                $980 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Цена обучения (один язык)
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
        >
          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                70/25/5(R)
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 25%</li>
                <li class="border-b py-4">Индивидуальные 5%</li>
                <li class="border-b py-4">Русский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                $550 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="w-full p-8 text-3xl font-bold text-center">70/20/10(R)</div>
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 20%</li>
                <li class="border-b py-4">Индивидуальные 10%</li>
                <li class="border-b py-4">Русский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-4xl font-bold text-center">
                $600 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                70/15/15(R)
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Групповые 70%</li>
                <li class="border-b py-4">В парах 15%</li>
                <li class="border-b py-4">Индивидуальные 15%</li>
                <li class="border-b py-4">Русский</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                $650 <span class="text-base">/ месяц</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  <!-- end prices-->
  <!-- start cta -->
  <section
    class="px-4 py-12 text-center bg-white lg:px-16 md:px-8 xl:px-24 xxl:px-40" id="questions">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold lg:text-3xl">Остались вопросы?</h2>
      <p class="w-full mx-auto mt-6 text-base text-gray-700 lg:w-1/2">
        Свяжитесь с нами и мы всегда будем рады ответить на все ваши вопросы.
      </p>
      <a href="#" class="block mt-4 text-xl font-semibold text-blue-500">
        {email}
      </a>
    </div>
  </section>
  <!-- end cta -->

  <!-- start footer -->
  <footer class="bg-gray-200 py-12 lg:pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-5 gap-8 text-center sm:text-left">
        <div class="md:col-span-2">
          <div class="bg-logo rounded-md">
              <svg class="mx-auto sm:mx-0" viewBox="0 0 200 52">
              <defs id="LogoDefs">
                <linearGradient id="GoldenGradient">
                  <stop id="SvgjsStop1016" stop-color="#fbb040" offset="0" />
                  <stop id="SvgjsStop1017" stop-color="#f9ed32" offset="1" />
                </linearGradient>
              </defs>
              <g
                id="Logo"
                featurekey="symbolFeature-0"
                transform="matrix(0.6,0,0,0.6,-5,-14)"
                fill="url(#GoldenGradient)">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M81.61,82V77.83a1.1,1.1,0,0,0-1.1-1.1H78L94.47,59.1a1.1,1.1,0,0,0,0-1.54L74.09,37.95l4.1-4.43A1.1,1.1,0,0,0,78.13,32L76,30l2.12-2.29a1.1,1.1,0,0,0-.06-1.55l-2.75-2.55a1.06,1.06,0,0,0-.79-0.29,1.09,1.09,0,0,0-.76.35L71.67,26,70,24.43a1.1,1.1,0,0,0-1.55.06l-11.11,12A16.81,16.81,0,0,0,53,35.91,20.92,20.92,0,0,0,37.72,43a1.1,1.1,0,0,0,.07,1.55l23.58,21.5A1.1,1.1,0,0,0,62.91,66c5.59-6.13,7.1-14.38,4.43-20.76l5.25-5.67L92.13,58.39,74.94,76.73H70.33a1.1,1.1,0,0,0-1.1,1.1V82c-6.88,1.61-11.81,5.95-13.13,12a1.1,1.1,0,0,0,1.07,1.33H93.66A1.1,1.1,0,0,0,94.74,94C93.41,87.94,88.48,83.61,81.61,82Zm-7-56L75.79,27l-1.37,1.48-1.14-1.06ZM62,63.68l-21.91-20A18.55,18.55,0,0,1,53,38.11a14.41,14.41,0,0,1,4.32.66h0a13.26,13.26,0,0,1,2.57,1.12h0c0.37,0.21.72,0.44,1.06,0.68l0.12,0.08a12.42,12.42,0,0,1,1,.85,12.75,12.75,0,0,1,.92.94c0.16,0.19.32,0.38,0.47,0.58l0.31,0.4q0.29,0.4.55,0.83l0.11,0.17c0.19,0.33.38,0.67,0.55,1C67.64,50.88,66.59,58.09,62,63.68Zm3.21-22L65,41.34a14.86,14.86,0,0,0-1.36-1.44,15.13,15.13,0,0,0-1.8-1.39l-0.18-.12a15,15,0,0,0-2.07-1.11l9.72-10.49L71,28.33h0l2.75,2.55h0l2.1,1.95L66.28,43.14,66.21,43A14.82,14.82,0,0,0,65.22,41.63Zm6.21,37.3h8v2.65a28.08,28.08,0,0,0-8,0V78.93ZM58.62,93.09c2-5.88,8.45-9.61,16.8-9.61s14.77,3.73,16.8,9.61H58.62Z"
                  style="fill:url(#GoldenGradient)" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M11.45,82.87a5.94,5.94,0,0,0,0,11.88H51.21v-1.5H11.45a4.44,4.44,0,0,1,0-8.88H51.21v-1.5H11.45Z"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="85.33"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="87.99"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="9.92"
                  y="90.84"
                  width="41.28"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  d="M48.32,74.79a6,6,0,0,0-5.94-5.94H12.12v1.5H42.38a4.44,4.44,0,1,1,0,8.88H12.12v1.5H42.38A6,6,0,0,0,48.32,74.79Z"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="76.95"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="74.11"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-cls"
                  x="12.12"
                  y="71.26"
                  width="31.78"
                  height="1.5"
                  style="fill:url(#GoldenGradient)" />
              </g>
              <g transform="translate(-193 -27)">
                <text
                  transform="translate(280 56)"
                  fill="url(#GoldenGradient)"
                  font-size="24"
                  font-family="ArialRoundedMTBold, Arial Rounded MT">
                  <tspan x="0" y="-8">Lernicon</tspan>
                  <tspan x="0" y="16">Academy</tspan>
                </text>
              </g>
            </svg>
          </div>

          <p class="mt-4 text-base text-gray-600">{slogan}</p>

          <div class="flex justify-center md:justify-start mt-6">
            <a href="#" class="hidden text-gray-600 hover:text-gray-900">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657
                  9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506
                  1.492-3.89 3.777-3.89 1.094 0 2.238.195
                  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991
                  22 12z"
                  clip-rule="evenodd" />
              </svg>
            </a>

            <a href="https://www.instagram.com/lernicon.academy" class="text-gray-600 hover:text-gray-900 ml-6">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218
                  2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153
                  1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06
                  4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218
                  1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0
                  01-1.772
                  1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
                  0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902
                  4.902 0 01-1.772-1.153 4.902 4.902 0
                  01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902
                  4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247
                  1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081
                  1.802h-.468c-2.456
                  0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748
                  1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058
                  3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344
                  1.857.182.466.399.8.748 1.15.35.35.683.566
                  1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058
                  4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207
                  1.858-.344.466-.182.8-.398
                  1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097
                  3.097 0 00-.748-1.15 3.098 3.098 0
                  00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12
                  6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0
                  1.802a3.333 3.333 0 100 6.666 3.333 3.333 0
                  000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd" />
              </svg>
            </a>

            <a
              href="https://twitter.com/lernicon1?ref_src=twsrc%5Etfw"
              class="text-gray-600 hover:text-gray-900 ml-6">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178
                  0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0
                  01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0
                  01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0
                  01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8
                  9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0
                  01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012
                  18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h6 class="text-sm font-bold text-gray-600 uppercase">О компании</h6>

          <ul class="mt-4">
            <li>
              <a href="#">О нашей компании</a>
            </li>

            <li class="mt-3">
              <a href="#">Вакансии</a>
            </li>

            <li class="hidden mt-3">
              <a href="#">Наш адрес</a>
            </li>
          </ul>
        </div>

        <div>
          <h6 class="text-sm font-bold text-gray-600 uppercase">
            Пользователю
          </h6>
          <ul class="mt-4">
            <li class="mt-3">
              <a href="#">Конфиденциальность</a>
            </li>

            <li class="mt-3">
              <a href="#">Пользовательское соглашение</a>
            </li>

          </ul>
        </div>

        <div>
          <h6 class="text-sm font-bold text-gray-600 uppercase">
            Контактная информация
          </h6>

          <div class="mt-4">
            <a href="#" class="block text-gray-900 text-md">{email}</a>

            <a href="#" class="hidden block mt-3 text-gray-900 text-md">+604 (TBD)</a>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-sm text-gray-600">
          ©
          <span id="year" />
          Lernicon Academy Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  <!-- end footer -->
</div>
