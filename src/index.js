import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import dateFormatt from 'dateformat';
import {STAFFS} from './staffs.jsx'

// Component
function UserItem ({user, onClick} ) {
    return (
        <div class="col l-4 m-6 c-12">
            <button class='btn-name' id={user.id} onClick={onClick}>{user.name}</button>
        </div>
    )
}

// Tạo component App

function App () {
    const handleClick = (user) => {
        const b = document.getElementById('car');
        function Info () {
            return (
                <div >
                    <h1>Họ và tên: {user.name}</h1>
                    <h3>Ngày sinh: {dateFormat(user.doB, 'dd/mm/yyyy')}</h3>
                    <h3>Ngày vào công ty: {dateFormat(user.startDate, 'dd/mm/yyyy')}</h3>
                    <h3>Phòng ban: {user.department.name}</h3>
                    <h3>Số ngày nghỉ còn lại: {user.annualLeave}</h3>
                    <h3>Số ngày đã làm thêm: {user.overTime}</h3>
                </div>
            )
        }
        const root2 = ReactDOM.createRoot(document.getElementById('car'))
        root2.render(<Info/>)
        
       
    }
    return (
        <div id='wrapper'>
            {STAFFS.map(user => (
                <UserItem 
                    key={user.id}
                    user={user}
                    onClick={() => handleClick(user)}
                />
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById('root'))

