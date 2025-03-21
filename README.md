<br/>
<br/>

<p align="center" style="box-shadow: 2px 2px;">
  <a href="https://mertkahramanturk.github.io/react-flexible-table/?path=/story/components-flexibletable--basic" rel="noopener" target="_blank" ><h1 align="center">react-flexible-table</h1>
</a></p>
</p>

<div align="center">

A highly customizable and flexible table component for React

</div>

## Demo and documentation

You can access all code examples and documentation on site https://mertkahramanturk.github.io/react-flexible-table/?path=/story/components-flexibletable--basic

## Issue Prioritizing

Please share your problems, bugs and development requests.
[Issue](https://github.com/mertkahramanturk/react-flexible-table/issues)

## Installation

#### 1.Install package

To install react-flexible-table with `npm`:

    npm install react-flexible-table

To install react-flexible-table with `yarn`:

    yarn add material-table @material-ui/core

## Types / General Table Props


<div class="overflow-x-auto contain-inline-size"><table data-start="267" data-end="4119" node="[object Object]"><thead data-start="267" data-end="414"><tr data-start="267" data-end="414"><th data-start="267" data-end="287">Prop Name</th><th data-start="287" data-end="321">Type</th><th data-start="321" data-end="335">Default</th><th data-start="335" data-end="414">Description</th></tr></thead><tbody data-start="564" data-end="4119"><tr data-start="564" data-end="714"><td><code data-start="566" data-end="575">columns</code></td><td><code data-start="586" data-end="593">array</code></td><td><code data-start="620" data-end="624">[]</code></td><td>Table column definitions. Each item contains <code data-start="679" data-end="684">key</code>, <code data-start="686" data-end="693">title</code>,<code data-start="686" data-end="693">searchable</code>,<code data-start="686" data-end="693">openTableDetail</code>, <code data-start="686" data-end="693">sortable</code> <code data-start="695" data-end="706">cellStyle</code></td></tr><tr data-start="715" data-end="862"><td><code data-start="717" data-end="723">data</code></td><td><code data-start="737" data-end="744">array</code></td><td><code data-start="771" data-end="775">[]</code></td><td>The dataset that populates the table.</td></tr><tr data-start="863" data-end="1010"><td><code data-start="865" data-end="874">actions</code></td><td><code data-start="885" data-end="892">array</code></td><td><code data-start="919" data-end="923">[]</code></td><td>Optional row-level action buttons (e.g., edit, delete).</td></tr><tr data-start="1011" data-end="1158"><td><code data-start="1013" data-end="1025">pagination</code></td><td><code data-start="1033" data-end="1042">boolean</code></td><td><code data-start="1067" data-end="1074">false</code></td><td>Enables or disables pagination controls.</td></tr><tr data-start="1159" data-end="1306"><td><code data-start="1161" data-end="1167">page</code></td><td><code data-start="1181" data-end="1189">number</code></td><td><code data-start="1215" data-end="1218">1</code></td><td>Current page number (used with external pagination).</td></tr><tr data-start="1307" data-end="1454"><td><code data-start="1309" data-end="1319">pageSize</code></td><td><code data-start="1329" data-end="1337">number</code></td><td><code data-start="1363" data-end="1367">10</code></td><td>Number of rows per page.</td></tr><tr data-start="1455" data-end="1602"><td><code data-start="1457" data-end="1469">totalItems</code></td><td><code data-start="1477" data-end="1485">number</code></td><td><code data-start="1511" data-end="1514">0</code></td><td>Total number of items (used for external pagination).</td></tr><tr data-start="1603" data-end="1750"><td><code data-start="1605" data-end="1617">totalPages</code></td><td><code data-start="1625" data-end="1633">number</code></td><td><code data-start="1659" data-end="1662">1</code></td><td>Total number of pages (used for external pagination).</td></tr><tr data-start="1751" data-end="1898"><td><code data-start="1753" data-end="1767">externalSort</code></td><td><code data-start="1773" data-end="1782">boolean</code></td><td><code data-start="1807" data-end="1814">false</code></td><td>If <code data-start="1824" data-end="1830">true</code>, disables internal sorting and expects <code data-start="1870" data-end="1881">setFilter</code> to handle it.</td></tr><tr data-start="1899" data-end="2046"><td><code data-start="1901" data-end="1917">externalSearch</code></td><td><code data-start="1921" data-end="1930">boolean</code></td><td><code data-start="1955" data-end="1962">false</code></td><td>If <code data-start="1972" data-end="1978">true</code>, disables internal searching and delegates it to <code data-start="2028" data-end="2039">setFilter</code>.</td></tr><tr data-start="2047" data-end="2195"><td><code data-start="2049" data-end="2068">searchPlaceholder</code></td><td><code data-start="2071" data-end="2079">string</code></td><td><code data-start="2102" data-end="2115">"Search..."</code></td><td>Placeholder for search inputs.</td></tr><tr data-start="2196" data-end="2343"><td><code data-start="2198" data-end="2209">setFilter</code></td><td><code data-start="2218" data-end="2244">(filter: object) =&gt; void</code></td><td><code data-start="2252" data-end="2262">() =&gt; {}</code></td><td>Callback to update filtering externally (used with external search/sort).</td></tr><tr data-start="2344" data-end="2491"><td><code data-start="2346" data-end="2358">changePage</code></td><td><code data-start="2366" data-end="2390">(page: number) =&gt; void</code></td><td><code data-start="2400" data-end="2410">() =&gt; {}</code></td><td>Callback to update the page externally.</td></tr><tr data-start="2492" data-end="2639"><td><code data-start="2494" data-end="2510">changePageSize</code></td><td><code data-start="2514" data-end="2538">(size: number) =&gt; void</code></td><td><code data-start="2548" data-end="2558">() =&gt; {}</code></td><td>Callback to change page size externally.</td></tr><tr data-start="2640" data-end="2787"><td><code data-start="2642" data-end="2654">onRowClick</code></td><td><code data-start="2662" data-end="2685">(row: object) =&gt; void</code></td><td><code data-start="2696" data-end="2707">undefined</code></td><td>Triggered when a row is clicked. Provides information about the clicked row</td></tr><tr data-start="2788" data-end="2935"><td><code data-start="2790" data-end="2803">tableDetail</code></td><td><code data-start="2810" data-end="2838">(row: object) =&gt; ReactNode</code></td><td><code data-start="2844" data-end="2850">null</code></td><td>Renders expandable detail row content.</td></tr><tr data-start="2936" data-end="3083"><td><code data-start="2938" data-end="2957">handleMultiSelect</code></td><td><code data-start="2960" data-end="2986">(rows: object[]) =&gt; void</code></td><td><code data-start="2992" data-end="2998">null</code></td><td>Callback for checkbox row selection.</td></tr><tr data-start="3084" data-end="3231"><td><code data-start="3086" data-end="3099">fivotColumn</code></td><td><code data-start="3106" data-end="3114">number</code></td><td><code data-start="3140" data-end="3143">0</code></td><td>Number of columns to pin (freeze) to the left. To use, wrap the table in a div and do apply max-width</td></tr><tr data-start="3232" data-end="3379"><td><code data-start="3234" data-end="3245">fivotLeft</code></td><td><code data-start="3254" data-end="3262">number</code></td><td><code data-start="3288" data-end="3293">100</code></td><td>Width of pinned (frozen) columns in pixels.</td></tr><tr data-start="3380" data-end="3527"><td><code data-start="3382" data-end="3396">stickyHeader</code></td><td><code data-start="3402" data-end="3411">boolean</code></td><td><code data-start="3436" data-end="3443">false</code></td><td>Keeps the header sticky on scroll.</td></tr><tr data-start="3528" data-end="3675"><td><code data-start="3530" data-end="3543">lineStriped</code></td><td><code data-start="3550" data-end="3559">boolean</code></td><td><code data-start="3584" data-end="3591">false</code></td><td>Alternates row background colors.</td></tr><tr data-start="3676" data-end="3823"><td><code data-start="3678" data-end="3687">loading</code></td><td><code data-start="3698" data-end="3707">boolean</code></td><td><code data-start="3732" data-end="3739">false</code></td><td>Displays loading state.</td></tr><tr data-start="3824" data-end="3971"><td><code data-start="3826" data-end="3844">loadingComponent</code></td><td><code data-start="3846" data-end="3857">ReactNode</code></td><td><code data-start="3880" data-end="3886">null</code></td><td>Custom loading spinner/component.</td></tr><tr data-start="3972" data-end="4119"><td><code data-start="3974" data-end="3988">previousData</code></td><td><code data-start="3994" data-end="4001">array</code></td><td><code data-start="4028" data-end="4032">[]</code></td><td>Optional data to show while new data is loading.</td></tr></tbody></table></div>

#### Columns

You can give an array directly when creating the columns of the table. The key value must match the field name of the data.
```jsx
table_columns = [
	{
		"title": "Id",
		"key": "id",
		"sortable": true,
		"searchable": true,
		"openTableDetail": true,
		"cellStyle": { "minWidth": "100px", "maxWidth:": "100px" }
	},
]
```
If you want to show a column in a different style, you can do so as follows.
```jsx
	const columns = table_columns?.map((col) => {
		if (col.key === 'status') {
			return {
				key: col.key,
				title: col.title,
				sortable: col.sortable,
				searchable: col.searchable,
				cellStyle: col.cellStyle,
				openTableDetail: col.openTableDetail,
				render: (row) => (
					<div className=''>
						<span className={{
							"Active": "status-active",
							"Passive": "status-passive",
							"Pending": "status-pending"
						}[row.status]}>{row.status} </span> 
					</div>
				),
			};
		}
		return {
			key: col.key,
			title: col.title,
			cellStyle: col.cellStyle,
			sortable: col.sortable,
			searchable: col.searchable,
			openTableDetail: col.openTableDetail
		};
	});
```
#### Data

You can send the data structure as an array. Your column keys and field names will match and be displayed in the table.
```jsx
[
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "phone": "(212) 555-1234",
		"status": "Pending"
  },
	...
]
```
#### Actions

Optional row-level action buttons (e.g., edit, delete, info).
<div class="overflow-x-auto contain-inline-size"><table data-start="267" data-end="4119" node="[object Object]"><thead data-start="267" data-end="414"><tr data-start="267" data-end="414"><th data-start="267" data-end="287">Prop Name</th><th data-start="287" data-end="321">Type</th></tr></thead><tbody data-start="564" data-end="4119"><tr data-start="564" data-end="714"><td><code data-start="566" data-end="575">icon</code></td><td><code data-start="586" data-end="593">ReactNode</code></td><td><code data-start="620" data-end="624"></code></td></tr><tr data-start="564" data-end="714"><td><code data-start="566" data-end="575">ClassName</code></td><td><code data-start="586" data-end="593">String</code></td><td><code data-start="620" data-end="624"></code></td></tr><tr data-start="564" data-end="714"><td><code data-start="566" data-end="575">onClick</code></td><td><code data-start="586" data-end="593">function</code></td><td><code data-start="620" data-end="624"></code></td></tr><tr data-start="564" data-end="714"><td><code data-start="566" data-end="575">style</code></td><td><code data-start="586" data-end="593">String</code></td><td><code data-start="620" data-end="624"></code></td></tr></tbody></table></div>

```jsx
	const actions = [
		{
			icon: <img src={InfoIcon} alt="InfoIcon" />,
			className: 'font-size-14 text-dark',
			onClick: (rowData) => handleActionClick(rowData?.id),
			style: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }
		}
	];

```
#### tableDetail

openTableDetail indicates the component that will be opened when the column component marked as true is clicked. Each row opens on its own and closes on the second click.
You can access the row information directly from here.
```jsx
	const renderTableDetail = (data) => (
		<div>
			<div className="d-flex align-items-center gap-2">
				<div className="font-size-14 text-dark">Address:</div>
				<div className="font-size-14">{data.address}</div>
			</div>
			<div className="d-flex align-items-center gap-2">
				<div className="font-size-14 text-dark">City:</div>
				<div className="font-size-14">{data.city}</div>
			</div>
			<div className="d-flex align-items-center gap-2">
				<div className="font-size-14 text-dark">State:</div>
				<div className="font-size-14">{data.state}</div>
			</div>
			<div className="d-flex align-items-center gap-2">
				<div className="font-size-14 text-dark">Zipcode:</div>
				<div className="font-size-14">{data.zip}</div>
			</div>
		</div>
	)

```
#### fivotColumn & fivotLeft

> :warning: There should be a container structure on the page, such as maxWidth etc.

As the number of data in the table grows, it does not fit on the screen and users examine the data with the scrolling process. The information that seems important here can be fixed with fivotColumn, this column always remains fixed during the scrolling process.

```jsx
	return (
		<div style={{maxWidth: '960px'}}>
			<FlexibleTable
				externalSort={false}
				externalSearch={false}
				searchPlaceholder='Search...'
				setFilter={handleFilter}
				columns={columns}
				actions={actions}
				data={data}
				pagination={true}
				onRowClick={handleRowClick}
				changePage={changePage}
				changePageSize={changePageSize}
				page={page}
				pageSize={pageSize}
				totalItems={totalItems}
				totalPages={totalPages}
				loading={loading}
				fivotColumn={0}
				fivotLeft={100}
				lineStriped={true}
				tableDetail={renderTableDetail}
				handleMultiSelect={handleMultiSelect}
				stickyHeader={true}
				loadingComponent={customLoading}
				previousData={[]}
			/>
		</>
	)
```

## Usage

Here is a basic example of using react-flexible-table within a react application.

```jsx
import { useCallback } from "react";
import "./App.css";
import { FlexibleTable } from "react-flexible-table";
import "../node_modules/react-flexible-table/dist/index.cjs.css";
import data from "./test-data.json";
import InfoIcon from "./info-circle.svg";
const table_columns = [
  {
    title: "Id",
    key: "id",
    sortable: true,
    openTableDetail: true,
    cellStyle: { minWidth: "100px", "maxWidth:": "100px" },
  },
  {
    title: "İsim",
    key: "name",
    searchable: true,
    sortable: true,
    cellStyle: { minWidth: "200px", "maxWidth:": "200px" },
  },
  {
    title: "Email",
    key: "email",
    sortable: true,
    cellStyle: { minWidth: "200px", "maxWidth:": "200px" },
  },
  {
    title: "Phone",
    key: "phone",
    sortable: false,
    cellStyle: { minWidth: "200px", "maxWidth:": "200px" },
  },
  {
    title: "Status",
    key: "status",
    sortable: false,
    cellStyle: { minWidth: "200px", "maxWidth:": "200px" },
  },
];

function App() {
  const handleFilter = useCallback(() => {
    console.log("handleFilter");
  }, []);

  const handleRowClick = () => {
    console.log("handleRowClick");
  };
  const handleMultiSelect = (data) => {
    console.log("handleMultiSelect: ", data);
  };

  const handleActionClick = () => {
    console.log("handleActionClick");
  };
  const changePage = () => {
    console.log("changePage");
  };

  const changePageSize = () => {
    console.log("changePageSize");
  };

  const page = 1;
  const pageSize = 20;
  const totalItems = 28;
  const totalPages = 1;
  const loading = false;

  const renderTableDetail = (data) => (
    <div>
      <div className="d-flex align-items-center gap-2">
        <div className="font-size-14 text-dark">Address:</div>
        <div className="font-size-14">{data.address}</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="font-size-14 text-dark">City:</div>
        <div className="font-size-14">{data.city}</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="font-size-14 text-dark">State:</div>
        <div className="font-size-14">{data.state}</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="font-size-14 text-dark">Zipcode:</div>
        <div className="font-size-14">{data.zip}</div>
      </div>
    </div>
  );

  const actions = [
    {
      icon: <img src={InfoIcon} alt="InfoIcon" />,
      className: "font-size-14 text-dark",
      onClick: (rowData) => handleActionClick(rowData?.id),
      style: {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      },
    },
  ];

  const columns = table_columns?.map((col) => {
    if (col.key === "status") {
      return {
        key: col.key,
        title: col.title,
        sortable: col.sortable,
        searchable: col.searchable,
        cellStyle: col.cellStyle,
        openTableDetail: col.openTableDetail,
        render: (row) => (
          <div className="">
            <span
              className={
                {
                  Active: "status-active",
                  Passive: "status-passive",
                  Pending: "status-pending",
                }[row.status]
              }
            >
              {row.status}{" "}
            </span>
          </div>
        ),
      };
    }
    return {
      key: col.key,
      title: col.title,
      cellStyle: col.cellStyle,
      sortable: col.sortable,
      searchable: col.searchable,
      openTableDetail: col.openTableDetail,
    };
  });

  return (
    <>
      <FlexibleTable
        externalSort={false}
        externalSearch={false}
        searchPlaceholder="Search..."
        setFilter={handleFilter}
        columns={columns}
        actions={actions}
        data={data}
        pagination={true}
        onRowClick={handleRowClick}
        changePage={changePage}
        changePageSize={changePageSize}
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        totalPages={totalPages}
        loading={loading}
        fivotColumn={0}
        fivotLeft={100}
        lineStriped={true}
        tableDetail={renderTableDetail}
        handleMultiSelect={handleMultiSelect}
        stickyHeader={true}
      />
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("react-div"));
```

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](https://github.com/mbrn/material-table/blob/master/.github/CONTRIBUTING.md)].
<a href="https://github.com/mertkahramanturk/react-flexible-table/graphs/contributors"><img style="border-radius: 2000px" src="https://avatars.githubusercontent.com/u/84500180?v=4&size=64" /></a>

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
