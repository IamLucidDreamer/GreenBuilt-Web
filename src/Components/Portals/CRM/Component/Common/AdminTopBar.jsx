import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../../store/actions/user'

function AdminTopBar() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	return (
		<>
			{/* Navbar */}
			<nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
				<div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
					{/* Brand */}
					<a
						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
						href="#pablo"
						onClick={e => e.preventDefault()}
					>
						Dashboard
					</a>
					{/* User */}
					<ul className="flex-col md:flex-row list-none items-center hidden md:flex">
						<div
							className="rounded-full bg-red-500 w-10 h-10"
							onClick={() => {
								dispatch(logout())
								navigate('/login')
							}}
						></div>
					</ul>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	)
}

export default AdminTopBar
