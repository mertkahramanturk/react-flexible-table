export const exportToPdf = (columns, data, fileName = 'table-export') => {
  const html = `
    <html>
    <head>
      <title>${fileName}</title>
      <style>
        table { border-collapse: collapse; width: 100%; font-family: sans-serif; }
        th, td { border: 1px solid #999; padding: 8px; text-align: left; }
      </style>
    </head>
    <body>
      <table>
        <thead>
          <tr>${columns.map(col => `<th>${col.title}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>${columns.map(col => `<td>${row[col.key] ?? ''}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;

  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
  win.close();
};
