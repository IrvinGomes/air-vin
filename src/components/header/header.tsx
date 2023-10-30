import './header.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo/logo';

export function Header({toggleSidebar, isOpen}:any){

	const handleClick = ()=>{
		toggleSidebar((prevIsOpen:boolean) => !prevIsOpen);
	}

	return (
		<div className="header-wrapper">
			<div className='header'>
				<div>
					<IconButton onClick={handleClick}>
						<MenuIcon/>
					</IconButton>
				</div>
				<Logo width='50px'/>
                <span>
                    AIR-Vin
                </span>
			</div>
		</div>
	)
}
export default Header;
