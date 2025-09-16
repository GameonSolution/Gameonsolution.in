import { useEffect } from "react";

function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://myappzchat.com/production/master/widget/embed-widget.umd.js";
    script.defer = true;
    script.setAttribute(
      "data-widget-id",
      "9c5d0333-e81c-4cf8-b26c-c02d1c94833a"
    );
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup if component unmounts
    };
  }, []);

  return null; // widget will inject itself
}

export default ChatWidget;
