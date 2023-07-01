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
            <p className="mt-6 text-lg leading-8 text-gray-600">Ini adalah persembahan dari tim Front-end untuk GDSC Unsri, disini kami akan menunjukkan progress kami. Jadi jangan lari ya!</p>
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
      </main>
    </Layout>
  );
}
