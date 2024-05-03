import React from 'react';
import './nestedlist.css';

export default function Nested_listitem() {
    let users = [
        { sno: 1, name: 'user1', contact: 1234567890, address: [{ street: 'street1', village: 'village1', district: 'district1', pincode: 111111 }] },
        { sno: 2, name: 'user2', contact: 1234567890, address: [{ street: 'street1', village: 'village2', district: 'distric2', pincode: 222222 }] },
        { sno: 3, name: 'user3', contact: 1234567890, address: [{ street: 'street3', village: 'village3', district: 'distric3', pincode: 333333 }] },
        { sno: 4, name: 'user4', contact: 1234567890, address: [{ street: 'street4', village: 'village4', district: 'distric4', pincode: 444444 }] },
        { sno: 5, name: 'user5', contact: 1234567890, address: [{ street: 'street5', village: 'village5', district: 'distric5', pincode: 555555 }] }
    ];

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.sno}>
                            <td>{user.sno}</td>
                            <td>{user.name}</td>
                            <td>{user.contact}</td>
                            <td>
                                {user.address.map((add) => (
                                    <table key={add.street} >
                                        <thead>
                                            <tr>
                                                <th>Street</th>
                                                <th>District</th>
                                                <th>Pincode</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{add.street}</td>
                                                <td>{add.district}</td>
                                                <td>{add.pincode}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
