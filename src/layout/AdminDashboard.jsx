import React from "react";

function AdminDashboard() {
  return (
    <>
      <main>
        <section id="admin-dashboard" class="section">
                <h2>Admin Dashboard</h2>
                <div class="upload-section">
                    <h4>Upload Seating Data</h4>
                    <input type="file" id="file-upload"></input>
                    <button id="upload">Upload</button>
                    <p class="status-message"><b>Status: </b>Upload successful</p>
                </div>
                <div class="seating-table">
                    <h3>Manage Seats</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Reg. No.</th>
                                <th>Section</th>
                                <th>Seat No.</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>REG001</td>
                                <td>A</td>
                                <td>110</td>
                                <td><button id="admin-btn">Edit</button> <button id="admin-btn">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    </>
  );
}

export default AdminDashboard;