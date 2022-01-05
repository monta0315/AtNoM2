import { FlexMessage, Message } from "@line/bot-sdk";
type messageComponent = {
  videoUrl: string;
  imageUrl: string;
  name: string;
  title: string;
  type: string;
};

const typeIconUrl = (type: string) => {
  if (type === "youtube") {
    return "https://img.icons8.com/plasticine/344/youtube.png";
  } else {
    return "https://img.icons8.com/plasticine/344/youtube.png";
  }
};

const flexMessage = (components: messageComponent[]): Message[] => {
  //DBからデータとってくるようにしたい
  return components.map((component) => createContents(component));
};

const createContents = (component: messageComponent): FlexMessage => {
  const typeIcon = typeIconUrl(component.type);
  const template = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: component.imageUrl,
          size: "full",
          aspectMode: "cover",
          aspectRatio: "2:3",
          gravity: "top",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: component.title,
                  size: "xl",
                  color: "#ffffff",
                  weight: "bold",
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "Reco by",
                  color: "#ebebeb",
                  size: "sm",
                  flex: 0,
                },
                {
                  type: "text",
                  text: component.name,
                  color: "#ffffffcc",
                  gravity: "bottom",
                  flex: 0,
                  size: "lg",
                },
              ],
              spacing: "lg",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler",
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "filler",
                    },
                    {
                      type: "icon",
                      url: "https://openmoji.org/data/color/svg/1F929.svg",
                      size: "xxl",
                      position: "relative",
                      margin: "none",
                    },
                    {
                      type: "text",
                      text: "Go !!",
                      color: "#ffffff",
                      flex: 0,
                      offsetTop: "-9px",
                    },
                    {
                      type: "filler",
                    },
                  ],
                  spacing: "sm",
                },
                {
                  type: "filler",
                },
              ],
              borderWidth: "1px",
              cornerRadius: "4px",
              spacing: "sm",
              borderColor: "#ffffff",
              margin: "xxl",
              height: "40px",
            },
          ],
          position: "absolute",
          offsetBottom: "0px",
          offsetStart: "0px",
          offsetEnd: "0px",
          backgroundColor: "#03303Acc",
          paddingAll: "20px",
          paddingTop: "18px",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              size: "4xl",
              offsetTop: "3px",
              url: typeIcon,
            },
          ],
          position: "absolute",
          cornerRadius: "20px",
          offsetTop: "18px",
          offsetStart: "18px",
          height: "100px",
          width: "100px",
        },
      ],
      paddingAll: "0px",
    },
  };
  return JSON.stringify(template);
};

export { flexMessage, messageComponent };
