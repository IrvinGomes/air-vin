import { Box, Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

function receivePostMessage(event: MessageEvent) {
  if (!event.data || typeof event.data !== "object") return;

  const { type, height } = event.data;

  if (type === "iframeHeight" || type === "resize") {
    const iframe = document.getElementById("myiframe") as HTMLIFrameElement | null;
    if (!iframe) return;

    const newHeight = Number(height);

    if (!Number.isNaN(newHeight) && newHeight > 0) {
      iframe.style.height = `${newHeight}px`;
    }
  }
}

export const IFramePage: FC = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    setUrl(formJson.url.toString());
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      receivePostMessage(event);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

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
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </Box>
  );
};
