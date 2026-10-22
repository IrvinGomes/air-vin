import { Box, Button, TextField } from "@mui/material";
import { FC, FormEvent, useEffect, useRef, useState } from "react";

export const IFramePage: FC = () => {
  const [url, setUrl] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextUrl = formData.get("url");
    setUrl(typeof nextUrl === "string" ? nextUrl : "");
  };

  useEffect(() => {
    if (!url) return;

    let expectedOrigin: string;
    try {
      expectedOrigin = new URL(url, window.location.href).origin;
    } catch {
      return;
    }

    const receivePostMessage = (event: MessageEvent<unknown>) => {
      const iframe = iframeRef.current;
      if (
        !iframe ||
        event.source !== iframe.contentWindow ||
        event.origin !== expectedOrigin
      ) {
        return;
      }

      const data = event.data;
      if (
        typeof data !== "object" ||
        data === null ||
        !("type" in data) ||
        (data.type !== "iframeHeight" && data.type !== "resize") ||
        !("height" in data)
      ) {
        return;
      }

      const height = data.height;
      if (typeof height !== "number" || !Number.isFinite(height) || height < 0) {
        return;
      }

      const nextHeight = `${height}px`;
      if (iframe.style.height !== nextHeight) {
        iframe.style.height = nextHeight;
      }
    };

    window.addEventListener("message", receivePostMessage);
    return () => {
      window.removeEventListener("message", receivePostMessage);
    };
  }, [url]);

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
        ref={iframeRef}
        src={url}
        id="myiframe"
        title="storefrontIframe"
        className="storefrontIframe"
        frameBorder="0"
      ></iframe>
    </Box>
  );
};
