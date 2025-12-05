import { Box, Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

function receivePostMessage(event:any){
    console.log(event)
	if (event.data && event.data.type === "iframeHeight") {
		const newHeight = event.data.height;
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
		console.log('Event: ', event.data)
	}
}

export const IFramePage: FC = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    setUrl(formJson.url.toString());
  };

  useEffect(() => {
    window.addEventListener("message", (event) => {
      receivePostMessage(event);
    });
    return window.removeEventListener("message", (event) => {
      receivePostMessage(event);
    });
  });

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      p={"2em"}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", marginBottom: "10px" }}
      >
        <TextField
          fullWidth
          label="Sandbox + MV Url"
          id="Sandbox + MV Url"
          name="url"
          style={{ background: "white", borderRadius: "5px" }}
        />
        <Button variant="contained" style={{ marginLeft: "5px" }} type="submit">
          Load
        </Button>
      </form>
      <iframe
        src={url}
        id="myiframe"
        title="storefrontIframe"
        className="storefrontIframe"
        frameBorder="0"
      ></iframe>
    </Box>
  );
};
