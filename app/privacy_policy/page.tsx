import type { Metadata } from "next";
import { headers } from "next/headers";
import { getPrivacyPolicyDictionary } from "../[lang]/dictionaries";
import { ReactNode } from "react";

interface ChapterProps {
  id: string
  title: string
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Dokoya - Privacy Policy",
  description: "Dokoya privacy policy page",
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

export default async function PrivacyPolicyPage(){
  const headersList = await headers()
  const preferredLanguage = headersList.get("Accept-Language")
  // return japanese when the user's preferred language is japanese, otherwise return english
  const language = preferredLanguage?.includes("ja") ? "ja" : "en"
  const dict = await getPrivacyPolicyDictionary(language)
  return (
    <main className="relative w-svw flex flex-col items-center">
      <div className="mt-16 md:mt-24 px-7">
        <h1 className="font-bold text-2xl md:text-3xl">
          {dict.header.title}
        </h1>
      </div>
      <div className="container mb-8">
        <Chapter id="chapter-1" title={dict.chapter1.title}>
          {dict.chapter1.content.map((content, index) => (
            <p key={`chapter-1-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-2" title={dict.chapter2.title}>
          {dict.chapter2.content.map((content, index) => (
            <p key={`chapter-2-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-2a" title={dict.chapter2a.title}>
          {dict.chapter2a.content.map((content, index) => (
            <p key={`chapter-2a-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-2b" title={dict.chapter2b.title}>
          {dict.chapter2b.content.map((content, index) => (
            <p key={`chapter-2b-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3" title={dict.chapter3.title}>
          {dict.chapter3.content.map((content, index) => (
            <p key={`chapter-3-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-a" title={dict.chapter3a.title}>
          {dict.chapter3a.content.map((content, index) => (
            <p key={`chapter-3a-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-b" title={dict.chapter3b.title}>
          {dict.chapter3b.content.map((content, index) => (
            <p key={`chapter-3b-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-b-i" title={dict.chapter3bi.title}>
          {dict.chapter3bi.content.map((content, index) => (
            <p key={`chapter-3bi-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-b-ii" title={dict.chapter3bii.title}>
          {dict.chapter3bii.content.map((content, index) => (
            <p key={`chapter-3bii-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-b-iii" title={dict.chapter3biii.title}>
          {dict.chapter3biii.content.map((content, index) => (
            <p key={`chapter-3biii-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-c" title={dict.chapter3c.title}>
          {dict.chapter3c.content.map((content, index) => (
            <p key={`chapter-3c-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-3-c-i" title={dict.chapter3ci.title}>
          {dict.chapter3ci.content.map((content, index) => (
            <p key={`chapter-3ci-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-4" title={dict.chapter4.title}>
          {dict.chapter4.content.map((content, index) => (
            <p key={`chapter-4-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-5" title={dict.chapter5.title}>
          {dict.chapter5.content.map((content, index) => (
            <p key={`chapter-5-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-5-a" title={dict.chapter5a.title}>
          {dict.chapter5a.content.map((content, index) => (
            <p key={`chapter-5a-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-5-b" title={dict.chapter5b.title}>
          {dict.chapter5b.content.map((content, index) => (
            <p key={`chapter-5b-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-6" title={dict.chapter6.title}>
          {dict.chapter6.content.map((content, index) => (
            <p key={`chapter-6-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-7" title={dict.chapter7.title}>
          {dict.chapter7.content.map((content, index) => (
            <p key={`chapter-7-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-8" title={dict.chapter8.title}>
          {dict.chapter8.content.map((content, index) => (
            <p key={`chapter-8-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-8-a" title={dict.chapter8a.title}>
          {dict.chapter8a.content.map((content, index) => (
            <p key={`chapter-8a-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-8-a-i" title={dict.chapter8ai.title}>
          {dict.chapter8ai.content.map((content, index) => (
            <p key={`chapter-8ai-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-8-a-ii" title={dict.chapter8aii.title}>
          {dict.chapter8aii.content.map((content, index) => (
            <p key={`chapter-8aii-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-9" title={dict.chapter9.title}>
          {dict.chapter9.content.map((content, index) => (
            <p key={`chapter-9-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-10" title={dict.chapter10.title}>
          {dict.chapter10.content.map((content, index) => (
            <p key={`chapter-10-content-${index}`} className="mt-2">
              {content}
            </p>
          ))}
        </Chapter>
        <Chapter id="chapter-11" title={dict.chapter11.title}>
            <p key={`chapter-11-content-${0}`} className="mt-2">
              {dict.chapter11.content[0]}
            </p>
            <a href={dict.chapter11.content[1]} target="_blank" className="mt-2 text-blue-600 visited:text-purple-600">
              {dict.chapter11.content[1]}
            </a>
        </Chapter>
      </div>
    </main>
  )
}