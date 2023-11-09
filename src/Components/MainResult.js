import React from 'react'

import { useSelector } from 'react-redux';

const MainResult = () => {
    const students = useSelector(state => state.resultReducer.Students);
    console.log(students,"hhhh");

    const total = 100
    const totalmul = 100*5
    const totlmarks =
        +students.English +
        +students.Math +
        +students.Urdu +
        +students.Chemistry +
        +students.Physics;

    return (    
       <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Obtained
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Grade
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            English
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{students.English}</td>
                        <td className="px-6 py-4">{students.EnglishGrade}</td>
                        <td className="px-6 py-4">{students.EnglishStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Urdu
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{students.Urdu}</td>
                        <td className="px-6 py-4">{students.UrduGrade}</td>
                        <td className="px-6 py-4">{students.UrduStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Math
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{students.Math}</td>
                        <td className="px-6 py-4">{students.MathGrade}</td>
                        <td className="px-6 py-4">{students.MathStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Chemistry
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{students.Chemistry}</td>
                        <td className="px-6 py-4">{students.ChemistryGrade}</td>
                        <td className="px-6 py-4">{students.ChemistryStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Physics
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{students.Physics}</td>
                        <td className="px-6 py-4">{students.PhysicsGrade}</td>
                        <td className="px-6 py-4">{students.PhysicsStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                           Calculations
                        </th>
                        <td className="px-6 py-4">{totalmul}</td>
                        <td className="px-6 py-4">{totlmarks} </td>
                        <td className="px-6 py-4">{students.percentage}%</td>


                    </tr>

                </tbody>
            </table>
       </div>
    );
};

export default MainResult
