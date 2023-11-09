import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { saveFormData } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrintData = () => {
    const [state, setStat] = useState({})
    const location = useLocation();
    const final = location.state;
    const total = 100;
    const totlmarks =
        +final.English +
        +final.Math +
        +final.Urdu +
        +final.Chemistry +
        +final.Physics;

    console.log(totlmarks, "yes");

    const obtained = 75;
    const calculateGrade = (obtained) => {
        if (obtained >= 90) {
            return 'A+';
        } else if (obtained >= 80) {
            return 'A';
        } else if (obtained >= 70) {
            return 'B';
        } else if (obtained >= 60) {
            return 'C';
        } else if (obtained >= 50) {
            return 'D';
        } else {
            return 'F';
        }
    };

    const status = (Grade) => {
        if (Grade == "F") {
            return "Fail"
        }
        else {
            return "Pass"
        }
    }

    const navigate = useNavigate()

    const handleclick = () => {
        dispatch(saveFormData(final))
        navigate("/")
    }

    final.EnglishGrade = calculateGrade(final.English)
    final.MathGrade = calculateGrade(final.Math)
    final.UrduGrade = calculateGrade(final.Urdu)
    final.ChemistryGrade = calculateGrade(final.Chemistry)
    final.PhysicsGrade = calculateGrade(final.Physics)

    final.percentage = (totlmarks / 500) * 100

    final.EnglishStatus = status(final.EnglishGrade)
    final.MathStatus = status(final.MathGrade)
    final.UrduStatus = status(final.UrduGrade)
    final.ChemistryStatus = status(final.ChemistryGrade)
    final.PhysicsStatus = status(final.PhysicsGrade)

    const dispatch = useDispatch()

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
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
                        <td className="px-6 py-4">{final.English}</td>
                        <td className="px-6 py-4">{final.EnglishGrade}</td>
                        <td className="px-6 py-4">{final.EnglishStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Urdu
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{final.Urdu}</td>
                        <td className="px-6 py-4">{final.UrduGrade}</td>
                        <td className="px-6 py-4">{final.UrduStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Math
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{final.Math}</td>
                        <td className="px-6 py-4">{final.MathGrade}</td>
                        <td className="px-6 py-4">{final.MathStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Chemistry
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{final.Chemistry}</td>
                        <td className="px-6 py-4">{final.ChemistryGrade}</td>
                        <td className="px-6 py-4">{final.ChemistryStatus}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Physics
                        </th>
                        <td className="px-6 py-4">{total}</td>
                        <td className="px-6 py-4">{final.Physics}</td>
                        <td className="px-6 py-4">{final.PhysicsGrade}</td>
                        <td className="px-6 py-4">{final.PhysicsStatus}</td>
                    </tr>

                </tbody>
            </table>
            <button
                onClick={handleclick}
                className='py-1 px-3 block mx-auto rounded-[10px] text-white bg-red-500 mt-3'>Submit</button>
        </div>
    );
};

export default PrintData;
