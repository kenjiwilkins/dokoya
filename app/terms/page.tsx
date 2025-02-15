import type { Metadata } from "next";
import { headers } from "next/headers";
import { getTermsDictionary } from "../[lang]/dictionaries";
import { ReactNode } from "react";

interface ChapterProps {
  id: string
  title: string
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Dokoya - Terms and Conditions",
  description: "Dokoya terms and conditions page",
}

function Chapter({ id, title, children }: ChapterProps){
  return (
    <section id={id} className="mt-8">
      <h2 className="font-bold text-lg md:text-xl mt-8">
        {title}
      </h2>
      <div className="mt-4 whitespace-pre-wrap">
        {children}
      </div>
    </section>
  )
}

export default async function TermsAndConditionPage(){
  const headersList = await headers()
  const preferredLanguage = headersList.get("Accept-Language")
  // return japanese when the user's preferred language is japanese, otherwise return english
  const language = preferredLanguage?.includes("ja") ? "ja" : "en"
  const dict = await getTermsDictionary(language)
  return (
    <main className="relative w-svw flex flex-col items-center">
      <div className="mt-16 md:mt-24 px-7">
        <h1 className="font-bold text-2xl md:text-3xl">
          {dict.header.title}
        </h1>
      </div>
      <div className="container mb-8">
        <Chapter id="chapter-1" title={dict.chapter1.title}>
          {dict.chapter1.contents.map((content, index) => (
            <p key={`chapter-1-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-2" title={dict.chapter2.title}>
          {dict.chapter2.contents.map((content, index) => (
            <p key={`chapter-2-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3" title={dict.chapter3.title}>
          {dict.chapter3.contents.map((content, index) => (
            <p key={`chapter-3-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-4" title={dict.chapter4.title}>
          {dict.chapter4.contents.map((content, index) => (
            <p key={`chapter-4-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-5" title={dict.chapter5.title}>
          {dict.chapter5.contents.map((content, index) => (
            <p key={`chapter-5-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-6" title={dict.chapter6.title}>
          {dict.chapter6.contents.map((content, index) => (
            <p key={`chapter-6-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-7" title={dict.chapter7.title}>
          {dict.chapter7.contents.map((content, index) => (
            <p key={`chapter-7-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-8" title={dict.chapter8.title}>
          {dict.chapter8.contents.map((content, index) => (
            <p key={`chapter-8-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-9" title={dict.chapter9.title}>
          {dict.chapter9.contents.map((content, index) => (
            <p key={`chapter-9-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-10" title={dict.chapter10.title}>
          {dict.chapter10.contents.map((content, index) => (
            <p key={`chapter-10-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-11" title={dict.chapter11.title}>
          {dict.chapter11.contents.map((content, index) => (
            <p key={`chapter-11-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-12" title={dict.chapter12.title}>
          {dict.chapter12.contents.map((content, index) => (
            <p key={`chapter-12-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-13" title={dict.chapter13.title}>
          {dict.chapter13.contents.map((content, index) => (
            <p key={`chapter-13-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-14" title={dict.chapter14.title}>
          {dict.chapter14.contents.map((content, index) => (
            <p key={`chapter-14-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
      </div>
    </main>
  )
}