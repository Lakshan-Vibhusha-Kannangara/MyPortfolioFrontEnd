import React, { useState, useEffect } from "react";
import axios from "axios";
import Plx from "react-plx";
import {

  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
  MDBCardText,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import "./Chat.css";

interface Message {
  senderId: number;
  receiverId: number;
  timestamp: Date;
  content: string;
  senderName: string;
  receiverName: string;
}
interface Chats {
  chatId: string; // In this case, chatId is a combination of senderId and receiverId
  messages: Message[];
}
interface UserInfo {
  id: number;
  username: string;
  email: string;
}

export default function Chat() {
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<UserInfo>({
    id: 0, // Provide an appropriate default value
    username: "", // Provide an appropriate default value
    email: "", // Provide an appropriate default value
  });

  const [newMessage, setNewMessage] = useState("");




  const sendMessage = (receiverId: number) => {
    const headers = {
      Authorization: token,
    };

    const messageData = {
      content: newMessage,
      senderId: user?.id || 0, // Use user's id
      receiverId: receiverId,
      timestamp: new Date(),
    };

    axios
      .post("http://localhost:8080/addMessage", messageData, {
        headers,
      })
      .then((response) => {
        console.log("Message sent successfully:", response.data);

        const newMessageObj: Message = {
          senderId: user?.id || 0, // Use user's id
          receiverId: receiverId,
          timestamp: new Date(),
          content: newMessage,
          senderName: user?.username || "",
          receiverName: "", // You can set receiverName if needed
        };

        setMessages([...messages, newMessageObj]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  useEffect(() => {
    const fetchMessages = () => {
      const headers = {
        Authorization: token,
      };
  
  
  
      axios
        .get<Message[]>("http://localhost:8080/getMessagesByUser", {
          headers,
        })
        .then((response) => {
          setMessages(response.data);
    
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
  
        });
    };
  
    const fetchUser = () => {
      const headers = {
        Authorization: token,
      };
  
  
  
      axios
        .get<UserInfo>("http://localhost:8080/getUserByToken", {
          headers,
        })
        .then((response) => {
          setUser(response.data);
  
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
  
        });
    };
    const fetchData = async () => {
      const storedToken = getTokenFromCookie();
      if (storedToken) {
        setToken(storedToken);
      }
    };

    fetchData();
    fetchUser();
    fetchMessages();
  }, [token]);

  function getTokenFromCookie() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "token") {
        return value;
      }
    }
    return null;
  }

  function groupMessagesByChat(messages: Message[]): Chats[] {
    const chatsMap: { [chatId: string]: Message[] } = {};

    messages.forEach((message) => {
      // Sort the senderId and receiverId to ensure consistent chatId
      const chatIds = [message.senderId, message.receiverId].sort();
      const chatId = chatIds.join("-");

      if (!chatsMap[chatId]) {
        chatsMap[chatId] = [];
      }
      chatsMap[chatId].push(message);
    });

    return Object.keys(chatsMap).map((chatId) => ({
      chatId,
      messages: chatsMap[chatId],
    }));
  }
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  // Now, you can use the grouped chats to render your components
  const chats: Chats[] = groupMessagesByChat(messages);
  console.log(messages);
  return (
    <div style={{ margin: "80px", position: "relative", left: "10vw" }}>
  

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.6, 0.8, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "40vw",
          top: "10vh",
          width: "30vw",
          height: "30vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <div>
          <h1 style={{ fontSize: "4vw" }}>My Projects</h1>
        </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "10vw",
          top: "10vh",
          width: "30vw",
          height: "30vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "120vw", opacity: 1 ,right:'20vw',position:'relative',top:'-10vh'}}
          src="backgroung.png"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "10vw",height:'auto', opacity: 0.2,right:'-22vw',position:'relative',top:'-10vh' }}
          src="glow.gif"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "60vw",height:'auto', opacity: 1,right:'70vw',position:'relative',top:'0vh' }}
          src="moon.png"
          alt="background"
        />
      </Plx>
     
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.4, 0.53, 2],
            properties: [
              {
                startValue: -2, // Start with no horizontal shift
                endValue: 6, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "15vw",height:'auto', opacity: 0.9,right:'70vw',position:'relative',top:'16vh' }}
          src="rover.png"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100vw",height:'70vh', opacity: 1,right:'70vw',position:'relative',top:'20vh' }}
          src="ground.png"
          alt="background"
        />
      </Plx>
    
     
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -6, // End with a 100px rightward shift
                property: "translateY",
              },
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -7, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "80vw",height:'auto', opacity: 1,right:'40vw',position:'relative',top:'10vh' }}
          src="astronaut.png"
          alt="background"
        />
      </Plx>
     
      <MDBRow>
      <MDBCardText style={{color:'beige',fontSize:'2vw',left:'5vw',position:'relative'}}>Space Chat</MDBCardText>
        <MDBCol size="3" style={{ margin: "" }}>
          <MDBTabs className="mb-3">
            {chats.map((chat) => (
              <MDBTabsItem style={{ backgroundColor: "transparent" }}>
                <MDBTabsLink style={{backgroundColor: "transparent"}}
                  onClick={() => handleVerticalClick(chat.chatId)}
                  active={verticalActive === chat.chatId}
                >
                  <MDBCard className="mask-custom" style={{ width: "20vw",backgroundColor:'transparent' }}>
                    <MDBCardBody>
                      <MDBTypography listUnStyled className="mb-0">
                        <li
                          className="p-2 border-bottom"
                          style={{
                            borderBottom:
                              "1px solid rgba(255,255,255,.3) !important",
                          }}
                        >
                          <a
                            href="#!"
                            className="d-flex justify-content-between link-light"
                          >
                            <div className="d-flex flex-row">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                alt="avatar"
                                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                width="60"
                              />
                              <div className="pt-1">
                                <p className="fw-bold mb-0">
                                  {chat.messages[0].receiverName}
                                </p>
                                <p className="small text-white">
                                  {chat.messages[0].content}
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small mb-1 text-white">
                                {chat.messages.length > 0
                                  ? new Date(
                                      chat.messages[
                                        chat.messages.length - 1
                                      ].timestamp
                                    ).toLocaleString(undefined, {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })
                                  : ""}
                              </p>
                              <span className="badge bg-danger float-end">
                                1
                              </span>
                            </div>
                          </a>
                        </li>
                      </MDBTypography>
                    </MDBCardBody>
                  </MDBCard>
                </MDBTabsLink>
              </MDBTabsItem>
            ))}
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
     
          <MDBTabsContent>
           
            {chats.map((chat) => (
              
              <MDBTabsPane
                key={chat.chatId}
                show={verticalActive === chat.chatId}
              >
                <div style={{ margin: "2vw" }}>
                  {chat.messages.map((message) => (
                    <li
                      key={message.content} // Add a unique key for each list item
                      className="d-flex justify-content-left mb-2"
                      style={{
                        position: "relative",
                        right: message.senderId === user.id ? "-60px" : "60px",
                      }}
                    >
                      {message.senderId === user.id ? (
                        <div></div>
                      ) : (
                        <img
                          style={{ margin: "2vh" }}
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                          width="60"
                        />
                      )}
                      <MDBCard
                        className="mask-custom"
                        style={{
                          justifyContent:
                            message.receiverId === 2 ? "left" : "right",
                          width: "30vw",
                          position: "relative",color:'white'
                        }}
                      >
                        <MDBCardHeader
                          className="d-flex justify-content-between p-3"
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,.3)",
                          }}
                        >
                          <p className="fw-bold mb-0">{message.senderName}</p>
                          <p className="text-light small mb-0">
                            <MDBIcon far icon="clock" />{" "}
                            <p className="small mb-1 text-white">
                              {chat.messages.length > 0
                                ? new Date(message.timestamp).toLocaleString(
                                    undefined,
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )
                                : ""}
                            </p>
                          </p>
                        </MDBCardHeader>
                        <MDBCardBody>
                          <p className="mb-0">{message.content}</p>
                        </MDBCardBody>
                      </MDBCard>
                      {message.senderId === user.id ? (
                        <img
                          style={{ margin: "2vh" }}
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                          width="60"
                        />
                      ) : (
                        <div></div>
                      )}
                    </li>
                  ))}
                </div>

                <li
                  className="mb-3"
                  style={{ listStyleType: "none", width: "40vw" }}
                >
                  <MDBTextArea style={{backgroundColor:'transparent',color:'white'}}
                    label="Message"
                    id="textAreaExample"
                    rows={4}
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <MDBBtn
                    color="light"
                    size="lg"
                    rounded
                    className="float-end"
                    onClick={() =>
                      sendMessage(parseInt(chat.chatId.split("-")[1], 10))
                    }
                  >
                    Send
                  </MDBBtn>
                </li>
              </MDBTabsPane>
            ))}
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
