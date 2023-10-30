interface iLogoProps{
	width:string;
}

export function Logo({width}:iLogoProps){

	const image = '../../logo.svg'

	return(
		<img src={image} alt="logo" width={width}/>
	)
}

export default Logo;
