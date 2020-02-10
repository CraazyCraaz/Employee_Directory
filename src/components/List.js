import React from 'react'

export default function List() {
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">facePic</th>
                        <td>John Doe</td>
                        <td>206-123-4567</td>
                        <td>fakeEmail@email.com</td>
                        <td>01/01/1985</td>
                    </tr>                    
                </tbody>
            </table>

        </div>
    )
}
