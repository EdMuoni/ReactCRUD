import {useEffect, useState } from "react";
//import React, { useCallback, useEffect, useState } from "react";
import type { School } from "../types/school";

function SchoolList() {
    const [schools, setSchools] = useState<School[]>([]);

    useEffect(() => {
        populateSchoolData();
    }, []);

    async function populateSchoolData() {
        const response = await fetch("/api/school");
        if (response.ok) {
            const data = await response.json();
            setSchools(data);
        }
    }

    return (
        <div>
            <h1>School List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Student Count</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((school) => (
                        <tr key={school.id}>
                            <td>{school.id}</td>
                            <td>{school.name}</td>
                            <td>{school.address}</td>
                            <td>{school.studentCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SchoolList;