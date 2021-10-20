import React from "react";
import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <div className="bg-yellow-100 border-red-600 border-3 rounded-3xl">
        <Disclosure>
         {({ open }) => (
                <>
                <Disclosure.Button className="py-2 flex items-center gap-3">
                    {open ? <BiChevronUp /> : <BiChevronDown />}
                    <span className={open? "text-pink-600" : "text-gray-800"}>
                    {props.title}
                    </span>
        
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
                <div className="flex item-center gap-3 flex-wrap">
                    {props.tags.map((tag) => (
                            <>
                            <div className="border-2 border-gray-200 p-1">
                                <span className="text-red-600">{tag}</span>
                            </div>
                            </>

                    ))}
                </div>
      </Disclosure.Panel>
                </>
         )}
      
    </Disclosure>
    </div>
  );
};



export default PlaysFilter;