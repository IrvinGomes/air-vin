import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import CropFreeIcon from '@mui/icons-material/CropFree';
import InfoIcon from '@mui/icons-material/Info';
import './sidebar.scss'

interface iSidebarProps{
	isOpen:boolean;
	listOfItems:string[]
}

export function Sidebar({isOpen, listOfItems}:iSidebarProps){
    const handleClick = (item:string)=>{
        document.location.href=item;
        console.log(item);
    }

	const setListOfItems = ()=>{
		return (
			listOfItems.map((item:string)=>{
				return (
					<ListItem key={item} disablePadding onClick={()=>handleClick(item)}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: isOpen ? 'initial' : 'center',
							px: 2.5,
						}}>
						<ListItemIcon 
							sx={{
								minWidth: 0,
								mr: isOpen ? 3 : 'auto',
								justifyContent: 'center',
							}}>
							{setIcon(item)}
						</ListItemIcon>
						<ListItemText primary={item} sx={{ opacity: isOpen ? 1 : 0 }}/>
					</ListItemButton>
				</ListItem>)
			})
		)
	}

    const setIcon = (item:string)=>{
        switch (item) {
            case 'Home':
                return (<HomeIcon />)
            case 'IFrame':
                return (<CropFreeIcon />)
            case 'About':
                return (<InfoIcon />)
            default:
                return(<QuestionMarkIcon />)
        }
    }

	return (
		<div className={`sidebar-wrapper ${isOpen ? '' : 'closed'}`} >
			<List disablePadding>
				{setListOfItems()}
			</List>
		</div>
	)
}
export default Sidebar;
