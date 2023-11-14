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
	else{
		console.log('Event: ', event.data.payload)
	}
}
//https://bgwp-049.dx.commercecloud.salesforce.com/on/demandware.store/Sites-sfra-storefronts-Site/default/buy-iframe?mv=e28fdc5281d2ad9a9cb1aa1234b53885a93ff79a4489764bc13791804c96d74f37a119008d52321d184f7c46a86495eea641946ed4b6b59da029294d30af74d57fdb34cf2930fa1efda5e8a4f4026c8623f1b7e4d3243cd463d027cf988dc8d3a17b654473c0985d058690d40f0cf15ac31379219cc703eb0f99c8aa316798a3

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
