import React from "react";

/**
 *
 *  Table (currently using tailwind)
 *  Params:
 * 1. Config: {
 *  columns:Array [
 *         Object:{
 *                 key:"Data Key",
 *                  title:"Header title",
 *                  component:Component to render in cell. Would recieve the required value as children
 *                  componentProps:{
 *                      "propname":"value",
 *                      "propname":{
 *                          key:"Key to pass as prop"
 *                      }
 *                   }
 *          }
 *  ]
 * }
 * 2. Rows : Array of row objects with key matching with config.columns
 */
function Table({ config, rows }) {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {config.columns.map((column) => {
            return (
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => {
          return (
            <tr>
              {config.columns.map((column) => {
                let Component = column.component ? column.component : ({children})=>{return children};
                let componentProps = { row };
                Object.keys(column.componentProps || {}).forEach((propName) => {
                  if (column.componentProps[propName]["key"]) {
                    componentProps[propName] =
                      row[column.componentProps[propName]["key"]];
                  } else {
                    componentProps[propName] = column.componentProps[propName];
                  }
                });
                return (
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Component {...componentProps}>{row[column.key] ?  row[column.key] : column.title}</Component>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
