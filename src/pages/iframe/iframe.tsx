import { Button, TextField } from '@mui/material';
import '../pages.scss'
import './iframe.scss'

export function IFrame(){

	const handleSubmit = (e:any)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
		console.log(formJson.url.toString());
        
	}

	return (
		<div className="content-page-wrapper">
			<div className='iframe-wrapper'>
				<form onSubmit={handleSubmit} className="form" >
					<TextField fullWidth label="Sandbox + MV Url" id="Sandbox + MV Url" name='url' style={{background:'white', borderRadius: '5px'}}/>
					<Button variant="contained" style={{marginLeft: '5px'}} type='submit'>Load</Button>
				</form>
			</div>
		</div>
	)
}
export default IFrame;
