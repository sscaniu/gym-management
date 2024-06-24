import { useLayoutEffect, useRef, useState } from 'react'
import { rubik } from './font';
import { Button, ButtonStyles } from './Buttons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


interface Person {
    name: string;
    email: string;
    phone: string;
    location: string;
    trainer: string;
    lastSession: string;
}

const people = [
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        phone: '+15516893667',
        location: 'Queens Gym',
        trainer: 'Kristi Bonds',
        lastSession: '10-03-2023 11:43 AM'
    },
    {
        name: 'Tom Jones',
        email: 'tom.jones@example.com',
        phone: '555-555-3234',
        location: 'Kings Gym',
        trainer: 'Jimmy Smitz',
        lastSession: '11-02-2023 11:43 AM'
    },
    {
        name: 'Adam Smith',
        email: 'a.s@example.com',
        phone: '555-123-3234',
        location: 'UES Gym',
        trainer: 'Jimmy Smitz',
        lastSession: '1-10-2024 8:00 AM'
    }

]



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Table() {

    const [checked, setChecked] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
    const checkbox = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
        setChecked(selectedPeople.length === people.length)
        setIndeterminate(isIndeterminate)
        if (checkbox.current !== null) {
            checkbox.current.indeterminate = isIndeterminate
        }
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : people)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <div className="px-4 bg-delft-blue py-5 text-white">
            <div className="flex items-center">
                <div className="flex-auto">
                    <h1 className={`${rubik.className} font-semibold leading-6 text-white text-[40px]/[48px]`}>Clients</h1>

                </div>
                <div className='flex-auto'>
                    <div className='flex items-center justify-center'>
                        <div className='flex-none'>
                            <Image src={`${selectedPeople.length > 0 ? '/images/icons/trash-100.png' : '/images/icons/trash.svg'}`} alt={'Delete'} width={24} height={24} />
                        </div>
                        <div className={`ml-2 ${selectedPeople.length > 0 ? 'opacity-100' : 'opacity-50'}`}>Delete</div>
                    </div>
                </div>
                <div className='flex-auto'>
                    <div className='flex items-center justify-center'>
                        <div className='flex-none'>
                            <Image src={'/images/icons/message.png'} alt={'Send Message'} width={20} height={20} />
                        </div>

                        <div className={`ml-2 ${selectedPeople.length > 0 ? 'opacity-100' : 'opacity-50'}`}>
                            {/* Need to hide this data from the query string */}
                            <Link
                                href={`./messages?name=${selectedPeople.length > 0 ? selectedPeople[0].name : ""}&phone=${selectedPeople.length > 0 ? selectedPeople[0].phone : ""}`}

                            >
                                Send Message
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-auto'>
                    <div className='flex items-center justify-center'>
                        <div className='flex-none'>
                            <Image src={'/images/icons/filter.png'} alt={'Filter'} width={18} height={18.94} />
                        </div>
                        <div className='ml-2'>
                            Filter
                        </div>

                    </div>
                </div>
                <div className='flex-auto'>
                    <div className='flex justify-end'>
                        <div className='border-2 w-[223px] h-[48px] flex items-center'>
                            <div className='flex-none ml-2'>
                                <Image src={'/images/icons/SearchGlass.png'} alt={'Search'} width={20} height={20} />
                            </div>
                            <div className='ml-2'>Search</div>

                        </div>
                    </div>
                </div>
                <div className="flex-auto">
                    <div className='flex justify-end'>
                        <Button text={'+ Import Clients'} style={ButtonStyles.Primary} width={'w-[172px]'}
                        />
                    </div>
                </div>
                <div className="flex-auto">
                    <div className='flex justify-end'>
                        <Button text={'+ Add Clients'} style={ButtonStyles.Primary} width={'w-[172px]'}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {/* {selectedPeople.length > 0 && (
                                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        Bulk edit
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        Delete all
                                    </button>
                                </div>
                            )} */}
                            <table className="min-w-full table-fixed divide-y divide-white">
                                {/* Having trouble figuring out the divide */}
                                <thead >
                                    <tr>
                                        <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                ref={checkbox}
                                                checked={checked}
                                                onChange={toggleAll}
                                            />
                                        </th>
                                        <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-white">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Location
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Trainer
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            Last Session
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="">
                                    {people.map((person: Person) => (
                                        <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-white/25' : 'odd:bg-oxford-blue even:bg-delft-blue'}>
                                            <td className="relative px-7 sm:w-12 sm:px-6">
                                                {selectedPeople.includes(person) && (
                                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                                )}
                                                <input
                                                    type="checkbox"
                                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    value={person.email}
                                                    checked={selectedPeople.includes(person)}
                                                    onChange={(e) =>
                                                        setSelectedPeople(
                                                            e.target.checked
                                                                ? [...selectedPeople, person]
                                                                : selectedPeople.filter((p) => p !== person)
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td
                                                className={classNames(
                                                    'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                    selectedPeople.includes(person) ? 'text-indigo-600' : 'text-white'
                                                )}
                                            >
                                                {person.name}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.email}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.phone}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.location}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.trainer}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.lastSession}</td>
                                            <td className="flex flex-1 items-center whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                                <a href="#" className="inline-flex items-center px-7 py-2 bg-oxford-blue border border-white text-white hover:bg-blue-700 w-[100px] h-[40px] ">
                                                    Profile
                                                </a>

                                                <Image className="ml-6" src={'/images/icons/elipses.png'} alt={'Row menu'} width={5} height={22.63} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




