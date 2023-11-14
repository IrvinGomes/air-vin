import { Button, TextField } from '@mui/material';
import '../pages.scss'
import './iframe.scss'
import { useEffect, useState } from 'react';

function receivePostMessage(event:any){
	if (event.data && event.data.type === 'resize') {
		const newHeight = event.data.payload.size;
		// Set the iframe's height to the received height
		const iframe = document.getElementById('myiframe');
		if (iframe) {
			if(newHeight !== iframe.style.height){
				iframe.style.height = 'none';
				iframe.style.height = newHeight + 'px';
			}
		}
	}
	else if(event.data && event.data.type === 'analytics'){
		console.log('Event: ', event.data)
	}
}

export function IFrame(){
    const [url, setUrl] =  useState('');

	const handleSubmit = (e:any)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
		setUrl(formJson.url.toString());
	}

	useEffect(()=>{
        window.addEventListener('message', (event) => {receivePostMessage(event)});
		return (
			window.removeEventListener('message', (event) => {receivePostMessage(event)})
		)
    })

	return (
		<div className="content-page-wrapper">
			<div className='iframe-wrapper'>
				<form onSubmit={handleSubmit} className="form" >
					<TextField fullWidth label="Sandbox + MV Url" id="Sandbox + MV Url" name='url' style={{background:'white', borderRadius: '5px'}}/>
					<Button variant="contained" style={{marginLeft: '5px'}} type='submit'>Load</Button>
				</form>
				<br />
				<iframe src={url} id="myiframe" title='storefrontIframe' className="storefrontIframe"></iframe>
			</div>
		</div>
	)
}
export default IFrame;
