import React, {
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from "react";
import Image from "next/image";
import Select from "./Select";

interface SelectOption {
  value: string | number;
  label: string | number;
}

interface ColumnProps {
  id: string;
  label?: string;
  sortable?: boolean;
  searchable?: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const Col: FC<Props> = ({ children }) => {
  return (
    <td className="h-[56px] font-rubik text-sm first:pl-7 last:pr-7 px-2">
      {children}
    </td>
  );
};

export const Row: FC<Props> = ({ children }) => {
  return <tr className="odd:bg-table-odd">{children}</tr>;
};

interface DataTableProps {
  rows: object[];
  cols: ColumnProps[];
  renderRow: (row: any) => JSX.Element;
  pagination?: boolean;
}

const DataTable: FC<DataTableProps> = ({
  cols,
  rows,
  renderRow,
  pagination = false,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<object[]>([]);

  const checkbox = useRef<HTMLInputElement>(null);
  const [perPageCount, setPerPageCount] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const perPageCountOptions: SelectOption[] = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
  ];

  const filteredRows = () => {
    return rows;
  };

  const handlePrevious = () => {
    setPageNum(pageNum > 1 ? pageNum - 1 : 1);
  };

  const handleNext = () => {
    const totalPageCount = Math.ceil(filteredRows().length / perPageCount);
    setPageNum(pageNum < totalPageCount ? pageNum + 1 : totalPageCount);
  };

  const handleChangePerPageCount = (e: ChangeEvent<HTMLSelectElement>) => {
    setPerPageCount(Number(e.target.value));
  };

  useEffect(() => {
    setPageNum(1);
  }, [perPageCount]);

  const toggleAll = () => {
    setSelectedRows(checked || indeterminate ? [] : rows);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  };

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedRows.length > 0 && selectedRows.length < rows.length;
    setChecked(selectedRows.length === rows.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current !== null) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedRows]);

  return (
    <div className="grid gap-10">
      <table className="w-full bg-table-container shadow-lg rounded-sm">
        <thead>
          <tr>
            <th className="px-0 pt-0.5 pb-[34px] first:pl-5 last:pr-5">
              <div className="h-12 flex items-center gap-2 border-b border-b-white px-2">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] rounded border-2 border-white focus:ring-0 focus:ring-offset-0 rounded-sm bg-transparent checked:text-warning indeterminate:text-warning outline-0"
                  ref={checkbox}
                  checked={checked}
                  onChange={toggleAll}
                />
              </div>
            </th>
            {cols.map((col: ColumnProps) => (
              <th
                key={col.id}
                className="px-0 pt-0.5 pb-[34px] first:pl-5 last:pr-5"
              >
                <div className="h-12 flex items-center gap-2 border-b border-b-white px-2">
                  <span className="font-jost font-bold text-base">
                    {col.label}
                  </span>
                  {col.sortable && (
                    <Image
                      src="/swap.png"
                      width={24}
                      height={24}
                      alt="Sort"
                      className="cursor-pointer"
                    />
                  )}
                  {col.searchable && (
                    <Image
                      src="/filter.png"
                      width={14.53}
                      height={15}
                      alt="Filter"
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows()
            .slice(perPageCount * (pageNum - 1), perPageCount * pageNum)
            .map((row: any, i: number) => (
              <Row key={i}>
                <Col>
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] rounded border-2 border-white focus:ring-0 focus:ring-offset-0 rounded-sm bg-transparent checked:text-warning outline-0"
                    value={row.id}
                    checked={selectedRows.includes(row)}
                    onChange={(e) =>
                      setSelectedRows(
                        e.target.checked
                          ? [...selectedRows, row]
                          : selectedRows.filter((r) => r !== row)
                      )
                    }
                  />
                </Col>

                {renderRow(row)}
              </Row>
            ))}
        </tbody>
      </table>
      {pagination && (
        <div className="flex items-center justify-between">
          <Select
            id="123"
            name="select"
            value={perPageCount}
            onChange={handleChangePerPageCount}
            options={perPageCountOptions}
            className="w-[90px]"
          />
          <ul className="flex items-center gap-6 font-rubik text-base">
            <li className="cursor-pointer" onClick={handlePrevious}>{`<`}</li>
            {Array.from(Array(Math.ceil(rows.length / perPageCount))).map(
              (_, i: number) => (
                <li
                  key={i}
                  className={`cursor-pointer ${
                    pageNum === i + 1 ? `text-warning` : `text-white`
                  }`}
                  onClick={() => setPageNum(i + 1)}
                >
                  {i + 1}
                </li>
              )
            )}
            <li className="cursor-pointer" onClick={handleNext}>{`>`}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataTable;
