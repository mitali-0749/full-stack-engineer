import React from 'react';

function ScanTable(props) {
  const { scans } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Repository Name</th>
          <th>Findings</th>
          <th>Queued At</th>
          <th>Scanning At</th>
          <th>Finished At</th>
        </tr>
      </thead>
      <tbody>
        {scans.map(scan => (
          <tr key={scan.id}>
            <td>{scan.id}</td>
            <td>{scan.status}</td>
            <td>{scan.repositoryName}</td>
            <td>{JSON.stringify(scan.findings)}</td>
            <td>{scan.queuedAt}</td>
            <td>{scan.scanningAt}</td>
            <td>{scan.finishedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScanTable;