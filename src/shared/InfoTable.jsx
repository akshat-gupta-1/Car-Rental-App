function InfoTable({
  price,
  model,
  manufacturer,
  year,
  seats,
  transmission,
  fuel,
}) {
  return (
    <table>
      <thead className="text-center bg-darkBlue text-pastelYellow">
        <tr>
          <th colSpan={2} className="p-4 text-xl">
            Rs {price}
            <span className="font-normal text-sm text-center">
              / rent per day
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Model</td>
          <td>{model}</td>
        </tr>
        <tr>
          <td>Manufacturer</td>
          <td>{manufacturer}</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>{year}</td>
        </tr>
        <tr>
          <td>Seats</td>
          <td>{seats}</td>
        </tr>
        <tr>
          <td>AC</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>{transmission}</td>
        </tr>
        <tr>
          <td>Fuel</td>
          <td>{fuel}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default InfoTable;
