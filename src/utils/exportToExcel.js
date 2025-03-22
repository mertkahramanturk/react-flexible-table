export const exportToExcel = (columns, data, fileName = 'table-export') => {
  const headers = columns.map(col => `"${col.title}"`).join(',');
  const rows = data.map(row =>
    columns.map(col => `"${row[col.key] ?? ''}"`).join(',')
  );
  const csvContent = [headers, ...rows].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
