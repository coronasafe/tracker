import React from 'react'
import { navigate } from 'hookrouter'

const ViewSuspectsTableRow = (props) => {
    const { id, name, district, facility, created_date, is_active } = props.data
    return (
        <tr className="cursor-pointer" onClick={()=>navigate("/suspect/"+id)}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {name}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{district}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {new Date(created_date).toLocaleString()}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    {is_active && <><span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Activo</span></>}
                    {!is_active && <><span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Activo</span></>}
                </span>
            </td>
        </tr>
    )
}

export default ViewSuspectsTableRow
