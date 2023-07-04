import React from 'react';
import * as XLSX from 'xlsx';

const BotonReporte = ({ tableData, fileName }) => {
  const handleExport = () => {
    const table = document.getElementById(tableData);
    
    if (table) {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.table_to_sheet(table);
      XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
      XLSX.writeFile(wb, `${fileName}.xlsx`);
    }
  };

  return (
    <button onClick={handleExport}className='btnReporte'title='GENERAR UN REPORTE DE EXCEL DE ESTA SESION' >
      <img src="https://cdn-icons-png.flaticon.com/512/732/732220.png" alt="" /> 
        Generar Estadísticas
        </button>
  );
};

export default BotonReporte;