import _ from "lodash";

const Table = ({ data, colums }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {colums.map((col, i) => (
            <th scope="col" key={i}>
              {col.lable}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {colums.map((c) => (
              <td>{_.get(row, c.path) || c.content(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
