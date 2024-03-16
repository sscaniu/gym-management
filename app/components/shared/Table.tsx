import { useLayoutEffect, useRef, useState } from 'react'
import { rubik } from './font';

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
        phone: '555-555-3234',
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
    }
    // More people...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Table() {

    const [checked, setChecked] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
    const checkbox = useRef<HTMLInputElement>(null);

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
        <div className="px-4 sm:px-6 lg:px-8 bg-delft-blue py-5">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className={`${rubik.className} font-semibold leading-6 text-white text-[40px]/[48px]`}>Clients</h1>

                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {selectedPeople.length > 0 && (
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
                            )}
                            <table className="min-w-full table-fixed divide-y divide-white drop-shadow-lg">
                                <thead>
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
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person: Person) => (
                                        <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : 'odd:bg-oxford-blue even:bg-delft-blue'}>
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
                                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit<span className="sr-only">, {person.name}</span>
                                                </a>
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




