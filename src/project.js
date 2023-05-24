import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { RappuTappu, EatWalker, GetTH, Paws } from './project-component'

const filters = [
  {
    id: 'RappuTappu',
    name: '電腦比價網',
  },
  {
    id: 'EatWalker',
    name: '美食交友軟體',
  },
  {
    id: 'GetTH',
    name: '實時溫濕度網',
  },
  {
    id: 'Paws',
    name: '爪爪打地鼠',
  },
]

export default function Project() {
  return (
    <div className="min-h-screen">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-baseline flex-1 justify-between pb-6 pt-16">
            <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900 text-titletxt sm:text-4xl bg-all-bg py-4 drop-shadow-md">參與專案</h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="gap-x-8 gap-y-10 block">
              {/* Filters */}
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-2 border-white py-6 text-txtcolor bg-spanbg">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between px-5 p-3 text-sm text-gray-400 hover:text-white">
                            <span className="font-bold text-2xl">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-7 w-7" aria-hidden="true"/>
                              ) : (
                                <PlusIcon className="h-7 w-7" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                              { section.id === 'RappuTappu' ? (
                                <RappuTappu />
                              ) : section.id === 'EatWalker' ? (
                                <EatWalker />
                              ) : section.id === 'GetTH' ? (
                                <GetTH />
                              ) : section.id === 'Paws' ? (
                                <Paws />
                              ) : (
                                ''
                              ) }
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}