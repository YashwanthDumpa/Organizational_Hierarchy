import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';

interface RowData {
  jobTitle: string;
  employmentType: string;
  orgHierarchy: string[];
}



function getData() {
  interface RowData {
    orgHierarchy: string[];
    jobTitle: string;
    employmentType: string;
  }

  const rowData: RowData[] = [
    {
      orgHierarchy: ['Erica Rogers'],
      jobTitle: 'CEO',
      employmentType: 'Permanent',
    },
    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
      jobTitle: 'Exec. Vice President',
      employmentType: 'Permanent',
    },

    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
      jobTitle: 'Director of Operations',
      employmentType: 'Permanent',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Esther Baker',
        'Brittany Hanson',
      ],
      jobTitle: 'Fleet Coordinator',
      employmentType: 'Permanent',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Esther Baker',
        'Brittany Hanson',
        'Leah Flowers',
      ],
      jobTitle: 'Parts Technician',
      employmentType: 'Contract',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Esther Baker',
        'Brittany Hanson',
        'Tammy Sutton',
      ],
      jobTitle: 'Service Technician',
      employmentType: 'Contract',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Esther Baker',
        'Derek Paul',
      ],
      jobTitle: 'Inventory Control',
      employmentType: 'Permanent',
    },

    {
      orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
      jobTitle: 'VP Sales',
      employmentType: 'Permanent',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Francis Strickland',
        'Morris Hanson',
      ],
      jobTitle: 'Sales Manager',
      employmentType: 'Permanent',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Francis Strickland',
        'Todd Tyler',
      ],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Francis Strickland',
        'Bennie Wise',
      ],
      jobTitle: 'Sales Executive',
      employmentType: 'Contract',
    },
    {
      orgHierarchy: [
        'Erica Rogers',
        'Malcolm Barrett',
        'Francis Strickland',
        'Joel Cooper',
      ],
      jobTitle: 'Sales Executive',
      employmentType: 'Permanent',
    },
  ];

  return rowData;
}


//   const getData = (): RowData[] => {
//     // Implement your data fetching logic here
//   };

const GridExample: React.FC = () => {
  const gridRef = useRef<AgGridReact | null>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<RowData[]>(getData());

  console.log(rowData, "rowdata");
  console.log(getData())
  const [columnDefs, setColumnDefs] = useState<any[]>([
    // we're using the auto group column by default!
    { field: 'jobTitle' },
    { field: 'employmentType' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: 'Organisation Hierarchy',
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
      },
    };
  }, []);
  const getDataPath = useMemo(() => {
    return (data: RowData) => {
      return data.orgHierarchy;
    };
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.api.setQuickFilter(
        (document.getElementById('filter-text-box') as HTMLInputElement).value
      );
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div className="example-wrapper">
        <div style={{ marginBottom: '5px' }}>
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          />
        </div>

        <div className="ag-theme-alpine">

          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            treeData={true}
            animateRows={true}
            groupDefaultExpanded={-1}
            getDataPath={getDataPath}
          />

        </div>
      </div>
    </div>
  );
};

export default GridExample;


