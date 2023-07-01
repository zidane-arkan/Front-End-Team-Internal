import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import custom from '../css/custom.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import banner from '../assets/banner1.png';
import styles from './index.module.css';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import person5 from '../assets/person5.png';
import person6 from '../assets/person6.png';
import frontend from '../assets/frontend.png';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-white">
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="bg-custom-1 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:pb-16 lg:pt-0">
          <div className="w-full text-center">
            <img className=" mb-10 object-cover object-center rounded" alt="hero" src={banner} />
            <h1 className="text-4xl font-bold tracking-tight text-[#D40080] sm:text-6xl">Internal Networking : Front-End Team</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Ini adalah persembahan dari tim Front-end GDSC Unsri, disini kami akan menunjukkan progress kami. Jadi jangan lari ya!</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-[#D40080] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Pencapaian Kami !</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Lebih banyak <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="bg-custom-2 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>
    </header>

  );
}

function ProgressOne() {
  return (
    <section className="bg-white lg:pb-16">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Know <br /> Session <span className="underline decoration-blue-500">Front-End Team</span></h1>

        <p className="mt-4 text-gray-500 xl:mt-6">
          Know Session adalah event yang dilaksanakan antar internal anggota front-end, dengan tujuan untuk mempererat hubungan antar tim.
          <br />
          Know session juga tempat pertama kali kami semua bertemu.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person1} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Zildijan Vito</h1>

            <p className="text-gray-500">
              "Whatever they do,I always win"
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person2} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Cindy Putri Az Zahra</h1>

            <p className="text-gray-500">
              "Pada akhirnya pasti "happy ending"
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person5} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Anharul Zikri</h1>

            <p className="text-gray-500">
              "Jika ada seseorang yang memikirkanmu, maka dialah tempat mu pulang."
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person6} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Erick Prim Caesar</h1>

            <p className="text-gray-500">
              "Keep it simple."
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person4} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Keysha Zascha Medina</h1>

            <p className="text-gray-500">
              "Lakukanlah apa yang ingin kamu lakukan"
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          <div className="space-y-3">
            <img className="object-cover object-center rounded" alt="hero" src={person3} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize">Muhammad Zidane Arkan</h1>

            <p className="text-gray-500">
              'Do your best or Do nothing'
            </p>

            <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadToFE() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Event 2</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Road To Front-End Developer</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Internal Event dimana kami belajar tentang penggunaan Github dan Bahasa yang akan dipakau seorang Front-End Developer;
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={frontend}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className=" space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">System Flow</strong>Menggunakan Git dan Github kami belajar cara berkolaborasi dan mengerjakan projek bersama.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Program Languange.</strong> Mempelajari bahasa seperti Html, CSS dan Javascript ES 6.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Framework.</strong> Bersama kami mempelajari cara menggunakan library React Js serta tools yang ada didalamnya.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Melalui kombinasi penggunaan Git dan Github, penguasaan bahasa pemrograman, serta penggunaan framework dan tools React JS, diharapkan para peserta dapat mengembangkan kemampuan kolaboratif dan teknis dalam mengelola proyek dan menghasilkan aplikasi web yang lebih kompleks dan dinamis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SynteticDev() {
  return (
    <section class="bg-white lg:mb-8">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Synthetic Developer <br /> Front-End x UI/UX <span class="text-blue-500">Team Up Event</span></h1>

        {/* <iframe  src="https://www.youtube.com/watch?v=_XkIupzNAyI" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe> */}
        <iframe class="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden" src="https://www.youtube.com/embed/_XkIupzNAyI" title="2023/02/11 - WebDev Series : Synthetic WebDev Day 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize ">Cara melakukan Slicing Pada Website</h1>

                <p class="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize ">Membuat Design Bersama Kevin</h1>

                <p class="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize ">Mengenal Lebih Dekat Tentang Astro Js</h1>

                <p class="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>

              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-xl font-medium text-gray-700 capitalize ">Melihat Redesign Dari Page Github</h1>

                <p class="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReactDeepDive() {
  return (
    <section id="blog" className="bg-white px-4 xl:px-0 py-12">
      <div className="mx-auto container">
        <h1 className="text-center font-semibold capitalize text-3xl lg:text-4xl text-gray-800">React Deep Dive</h1>
        <div className="mt-12 lg:mt-24">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">Front-End Team</p>
                <p className="text-sm text-white font-semibold tracking-wide">2023</p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Intro To React Js</h1>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Kami berkenalan dengan sebuah library terkenal di dunia Javascript bernama React. Disini kami melihat lebih dekat tentang cara kerja website yang dibuat menggunakan react. Serta belajar bagaimana cara menginstall dan menggunakan website yang dibangun memakai library ini.</p>
                <div className="h-5 w-2" />
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">Front-End Team</p>
                    <p className="text-sm text-white font-semibold tracking-wide">2023</p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Learn About Components</h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Sebuah bagian-bagian kecil yang jika dibangun akan menghasilkan sebuah website utuh merupakan cara website dibangun dalam react js...</p>
                  </div>
                </div>
                <div>
                  <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">Front-End Team</p>
                    <p className="text-sm text-white font-semibold tracking-wide">2023</p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Learn About useState</h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Salah satu tools kuat yang dimiliki react. Dapat digunakan untuk animasi, mengontrol alur website dan lain sebagainya...</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">Front-End Team</p>
                    <p className="text-sm text-white font-semibold tracking-wide">2023</p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Learn About useEffect</h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Sering digunakan ketika berkomunikasi dengan API (Application Programming Interface), namun tidak jarang juga dipakai untuk menangani logic pada sisi front-end...</p>
                  </div>
                </div>
                {/* <div>
                  <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                    <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <ProgressOne />
        <RoadToFE />
        <SynteticDev />
        <ReactDeepDive />
      </main>
    </Layout>
  );
}
