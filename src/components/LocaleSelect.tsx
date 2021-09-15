import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const locales = [
  {
    flag: "https://cdn-icons-png.flaticon.com/512/299/299730.png",
    value: "tr",
  },
  {
    flag: "https://cdn-icons-png.flaticon.com/512/299/299688.png",
    value: "en",
  },
  {
    flag: "https://cdn-icons-png.flaticon.com/512/299/299786.png",
    value: "de",
  },
  {
    flag: "https://cdn-icons-png.flaticon.com/512/299/299935.png",
    value: "it",
  },
];

export default function Example() {
  const [selected, setSelected] = useState(locales[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="p-2">
          <img src={selected.flag} className="sm:w-7 sm:h-7 w-5 h-5" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {locales.map((locale, key) => (
              <Listbox.Option
                key={key}
                className="px-2 py-1 cursor-pointer"
                value={locale}
              >
                {({ selected }) => (
                  <>
                    {!selected ? (
                      <img
                        src={locale.flag}
                        className="sm:w-7 sm:h-7 w-5 h-5"
                      />
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
